
document.getElementById("select").addEventListener("change", addShippers);
document.getElementById("sub-shipper-select").addEventListener("change", addModule);
var select;
var module;
var value;
var count;
var dict = {};
var shipperData;

function addShippers(e) {
    const select = document.getElementById("select");
    shipperData = data[select.value];
    let subSelect = document.getElementById("sub-shipper-select");

    for (i = subSelect.options.length - 1; i >= 0; i--) {
        subSelect.remove(i);
    }

    for (var key of Object.keys(shipperData)) {
        let option = document.createElement('option');
        option.text = key;
        subSelect.add(option);
    }
}

function addModule() {
    select = document.getElementById("sub-shipper-select");
    module = select.value;
    createModule(module);
}

function createModule(module) {
    const sourceName = document.getElementById("select").value;

    var container = document.createElement('div');

    container.appendChild(createMainMetricsRow());
    container.appendChild(createNumOfSourcesForAllRow());
    container.id = module;
    container.sourceName = sourceName;
    container.className += "module_container";

    $("#insert").prepend(container);

    rowsContainer = document.createElement('div');
    for (var key of Object.keys(shipperData)) {
        if (key == module) {
            for (value of Object.keys(shipperData[key])) {
                count = data[sourceName][key][value].metric_count;
                numOfSourcesInput = createNumOfSourcesInput(key, value);


                rowsContainer.appendChild(createMetricsRow(numOfSourcesInput));
                rowsContainer.appendChild(createBr());

                dict[`${sourceName}.${key}.${value}`] = numOfSourcesInput.value;
            }
        }
    }
    container.appendChild(rowsContainer);

}

document.getElementById("body").addEventListener("change", calculateMetrics);

function calculateMetrics() {
    var sum = 0;

    for (var prop in dict) {
        var val = dict[prop];

        if (val != 0) {
            var props = prop.split(".");
            var sourceName = props[0];
            var moduleName = props[1];
            var metricsetName = props[2];
            sum += parseInt(val) * parseInt(data[sourceName][moduleName][metricsetName]["metric_count"]);
        }
    }

    document.getElementById("sum").innerHTML = sum;
    if (sum > 1000)
        document.getElementById("price").innerHTML = Math.ceil(sum / 1000) * 15 + " $";
    else
        document.getElementById("price").innerHTML = 0 + " $";
}

function addSources() {
    const sourceName = document.getElementById("select").value;

    if (!this.value) {
        dict[`${sourceName}.${this.id}`] = 0;
    } else {
        dict[`${sourceName}.${this.id}`] = parseInt(this.value);
    }
}

function removeModule() {
    Array.from(Array.from(this.parentElement.parentElement.children)[2].children).filter(element => element.classList.contains('row')).forEach(row => {
        var input = row.children[0].childNodes[1].children[1];;
        const sourceName = this.parentElement.parentElement.sourceName;

        delete dict[`${sourceName}.${input.id}`];
    });

    this.parentElement.parentElement.remove();
    calculateMetrics();
}

function createNumOfSourcesInput(key, value) {
    let input = document.createElement('input');
    input.id = key + "." + value;
    input.moduleName = key;
    input.type = "number";
    input.onkeydown = function (e) {
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || e.keyCode == 8)) {
            return false;
        }
    }
    input.onchange = function (e) {
        calculateModule(this.moduleName);
    };
    input.className += "w3-input input float-md-right";
    input.addEventListener('change', addSources);

    return input;
}

function calculateModule(moduleName) {
    const sumOfModule = Array.from($(`[id^=${moduleName}\\.]`)).reduce((sum, { value }) => {
        if (value) {
            sum += parseInt(value);
        }
        return sum;
    }, 0)

    document.getElementById(`sum-module-${moduleName}`).innerText = sumOfModule;
}

function createNumOfSourcesForAllInput() {
    let input = document.createElement('input');
    input.type = "number";
    input.onkeydown = function (e) {
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || e.keyCode == 8)) {
            return false;
        }
    }

    input.className += "w3-input input float-md-right";

    return input;
}

function createChangeAllButton() {
    let changeAllButton = document.createElement('button');
    changeAllButton.className += "btn btn-primary change-all-button";
    changeAllButton.innerHTML = "Change All";
    changeAllButton.addEventListener('click', changeNumOfSourceForAllHandler);

    return changeAllButton;
}

function createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.className += "btn btn-primary remove";
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener('click', removeModule);

    return deleteButton;
}

function changeNumOfSourceForAllHandler(e) {
    let inputElements = e.target.parentElement.parentElement.getElementsByClassName('w3-input');
    const valueToChangeTo = inputElements[0].value;

    if (!valueToChangeTo) return;

    for (let i = 1; i < inputElements.length; i++) {
        const element = inputElements[i];
        element.value = valueToChangeTo;
        const sourceName = document.getElementById("select").value;
        dict[`${sourceName}.${element.id}`] = element.value;
    }

    calculateMetrics();
    calculateModule(e.target.parentElement.parentElement.id);
}

function createNumOfMetricsLabel(count) {
    let num_of_metrics = document.createElement('label');
    num_of_metrics.innerHTML = `${count} Metrics`;
    num_of_metrics.className += "metrics_count";

    return num_of_metrics;
}

function createNumOfSourcesLabel() {
    let numOfResourcesLabel = document.createElement('label');
    numOfResourcesLabel.innerHTML = "# of sources:";
    numOfResourcesLabel.className += "sources";

    return numOfResourcesLabel;
}

function createMetricsetNameLabel(value) {
    let metricsetNameLabel = document.createElement('label');
    metricsetNameLabel.innerHTML = value;

    metricsetNameLabel.className += "metricset_name ";

    return metricsetNameLabel;
}

function createBr() {
    return document.createElement('br');
}

function createMainMetricsRow() {
    var para = document.createElement('p');
    para.className += "heading";
    para.innerHTML = module;

    let row = document.createElement('div');
    row.className += "metrics-row ";

    let container = document.createElement('div');

    let sumOfCurrentModuleLabel = document.createElement('label');
    sumOfCurrentModuleLabel.innerHTML = `Sum of current module:`;
    sumOfCurrentModuleLabel.className += "metricset_name ";

    let sumOfCurrentModuleValueLabel = document.createElement('label');
    sumOfCurrentModuleValueLabel.id = `sum-module-${module}`;
    sumOfCurrentModuleValueLabel.innerHTML = 0;
    sumOfCurrentModuleValueLabel.className += "metrics_count";

    container.appendChild(sumOfCurrentModuleLabel);
    container.appendChild(sumOfCurrentModuleValueLabel);

    row.appendChild(para);
    row.appendChild(container);
    row.appendChild(createDeleteButton());

    return row;
}

function createNumOfSourcesForAllRow() {
    row = document.createElement('div');
    row.className += "row num-of-sources-for-all-row ";

    row.appendChild(createNumOfSourcesForAllInput());
    row.appendChild(createChangeAllButton());
    return row;
}

function createMetricsRow(numOfSourcesInput) {
    let row = document.createElement('div');
    row.className += "row ";

    let container = document.createElement('div');
    container.className += "metrics-row metrics-set-row";

    let metricsetContainer = document.createElement('div');
    metricsetContainer.appendChild(createMetricsetNameLabel(value));
    metricsetContainer.appendChild(createNumOfMetricsLabel(count));
    container.appendChild(metricsetContainer);

    let numOfSourceContainer = document.createElement('div');
    numOfSourceContainer.appendChild(createNumOfSourcesLabel());
    numOfSourceContainer.appendChild(numOfSourcesInput);
    container.appendChild(numOfSourceContainer);

    row.appendChild(container);

    return row;
}