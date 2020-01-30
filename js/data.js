var data = {
  source1: {
    "aerospike": {
      "namespace": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aerospike-namespace.html",
        "metric_count": 24,
        "sources": 0
      }
    },
    "apache": {
      "status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-apache-status.html",
        "metric_count": 33,
        "sources": 0
      }
    },
    "appsearch": {
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-appsearch-stats.html",
        "metric_count": 19,
        "sources": 0
      }
    },
    "aws": {
      "cloudwatch": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-cloudwatch.html",
        "metric_count": 100,
        "sources": 0
      },
      "ebs": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-ebs.html",
        "metric_count": 7,
        "sources": 0
      },
      "ec2": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-ec2.html",
        "metric_count": 27,
        "sources": 0
      },
      "elb": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-elb.html",
        "metric_count": 3,
        "sources": 0
      },
      "rds": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-rds.html",
        "metric_count": 15,
        "sources": 0
      },
      "s3_daily_storage": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-s3_daily_storage.html",
        "metric_count": 2,
        "sources": 0
      },
      "s3_request": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-s3_request.html",
        "metric_count": 9,
        "sources": 0
      },
      "sqs": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-sqs.html",
        "metric_count": 8,
        "sources": 0
      }
    },
    "azure": {
      "compute_vm": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-compute_vm.html",
        "metric_count": 33,
        "sources": 0
      },
      "compute_vm_scaleset": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-compute_vm_scaleset.html",
        "metric_count": 21,
        "sources": 0
      },
      "monitor": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-monitor.html",
        "metric_count": 3,
        "sources": 0
      }
    },
    "beat": {
      "state": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-beat-state.html",
        "metric_count": 2,
        "sources": 0
      },
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-beat-stats.html",
        "metric_count": 14
      }
    },
    "ceph": {
      "cluster_disk": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-cluster_disk.html",
        "metric_count": 3
      },
      "cluster_health": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-cluster_health.html",
        "metric_count": 2
      },
      "cluster_status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-cluster_status.html",
        "metric_count": 22
      },
      "monitor_health": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-monitor_health.html",
        "metric_count": 8
      },
      "osd_df": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-osd_df.html",
        "metric_count": 5
      },
      "osd_tree": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-osd_tree.html",
        "metric_count": 2
      },
      "pool_disk": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-ceph-pool_disk.html",
        "metric_count": 5
      }
    },
    "consul": {
      "agent": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-consul-agent.html",
        "metric_count": 9
      }
    },
    "coredns": {
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-coredns-stats.html",
        "metric_count": 34
      }
    },
    "couchbase": {
      "bucket": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-couchbase-bucket.html",
        "metric_count": 8
      },
      "cluster": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-couchbase-cluster.html",
        "metric_count": 15
      },
      "node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-couchbase-node.html",
        "metric_count": 22
      }
    },
    "couchdb": {
      "server": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-couchdb-server.html",
        "metric_count": 31
      }
    },
    "docker": {
      "container": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-container.html",
        "metric_count": 2
      },
      "cpu": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-cpu.html",
        "metric_count": 35
      },
      "diskio": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-diskio.html",
        "metric_count": 12
      },
      "event": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-event.html",
        "metric_count": 0
      },
      "healthcheck": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-healthcheck.html",
        "metric_count": 2
      },
      "image": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-image.html",
        "metric_count": 2
      },
      "info": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-info.html",
        "metric_count": 5
      },
      "memory": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-memory.html",
        "metric_count": 39
      },
      "network": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-docker-network.html",
        "metric_count": 16
      }
    },
    "dropwizard": {
      "collector": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-dropwizard-collector.html",
        "metric_count": 26
      }
    },
    "elasticsearch": {
      "ccr": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-ccr.html",
        "metric_count": 5
      },
      "cluster_stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-cluster_stats.html",
        "metric_count": 7
      },
      "enrich": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-enrich.html",
        "metric_count": 4
      },
      "index": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-index.html",
        "metric_count": 5
      },
      "index_recovery": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-index_recovery.html",
        "metric_count": 2
      },
      "index_summary": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-index_summary.html",
        "metric_count": 10
      },
      "ml_job": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-ml_job.html",
        "metric_count": 2
      },
      "node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-node.html",
        "metric_count": 5
      },
      "node_stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-node_stats.html",
        "metric_count": 24
      },
      "pending_tasks": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-pending_tasks.html",
        "metric_count": 2
      },
      "shard": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-elasticsearch-shard.html",
        "metric_count": 2
      }
    },
    "envoyproxy": {
      "server": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-envoyproxy-server.html",
        "metric_count": 36
      }
    },
    "etcd": {
      "leader": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-etcd-leader.html",
        "metric_count": 0
      },
      "metrics": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-etcd-metrics.html",
        "metric_count": 45
      },
      "self": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-etcd-self.html",
        "metric_count": 6
      },
      "store": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-etcd-store.html",
        "metric_count": 16
      }
    },
    "golang": {
      "expvar": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-golang-expvar.html",
        "metric_count": 102
      },
      "heap": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-golang-heap.html",
        "metric_count": 19
      }
    },
    "graphite": {
      "server": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-graphite-server.html",
        "metric_count": 0
      }
    },
    "haproxy": {
      "info": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-haproxy-info.html",
        "metric_count": 41
      },
      "stat": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-haproxy-stat.html",
        "metric_count": 28
      }
    },
    "jolokia": {
      "jmx": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-jolokia-jmx.html",
        "metric_count": 9
      }
    },
    "kafka": {
      "consumergroup": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kafka-consumergroup.html",
        "metric_count": 6
      },
      "partition": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kafka-partition.html",
        "metric_count": 10
      }
    },
    "kibana": {
      "kibana status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kibana-status.html",
        "metric_count": 3
      }
    },
    "kubernetes": {
      "apiserver": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-apiserver.html",
        "metric_count": 1
      },
      "controllermanager": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-controllermanager.html",
        "metric_count": 1
      },
      "event": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-event.html",
        "metric_count": 1
      },
      "node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-node.html",
        "metric_count": 21
      },
      "proxy": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-proxy.html",
        "metric_count": 15
      },
      "scheduler": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-scheduler.html",
        "metric_count": 15
      },
      "state_container": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_container.html",
        "metric_count": 3
      },
      "state_cronjob": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_cronjob.html",
        "metric_count": 5
      },
      "state_deployment": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_deployment.html",
        "metric_count": 5
      },
      "state_node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_node.html",
        "metric_count": 7
      },
      "state_pod": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_pod.html",
        "metric_count": 0
      },
      "state_replicaset": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_replicaset.html",
        "metric_count": 5
      },
      "state_statefulset": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-state_statefulset.html",
        "metric_count": 5
      },
      "system": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kubernetes-system.html",
        "metric_count": 7
      }
    },
    "kvm": {
      "dommemstat": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-kvm-dommemstat.html",
        "metric_count": 2
      }
    },
    "logstash": {
      "node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-logstash-node.html",
        "metric_count": 0
      },
      "node_stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-logstash-node_stats.html",
        "metric_count": 3
      }
    },
    "memcached": {
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-memcached-stats.html",
        "metric_count": 16
      }
    },
    "mongodb": {
      "collstats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mongodb-collstats.html",
        "metric_count": 18
      },
      "dbstats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mongodb-dbstats.html",
        "metric_count": 8
      },
      "metrics": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mongodb-metrics.html",
        "metric_count": 118
      },
      "replstatus": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mongodb-replstatus.html",
        "metric_count": 17
      },
      "mongo status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mongodb-status.html",
        "metric_count": 71
      }
    },
    "mssql": {
      "performance": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mssql-performance.html",
        "metric_count": 16
      },
      "transaction_log": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mssql-transaction_log.html",
        "metric_count": 9
      }
    },
    "mysql": {
      " mysql status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-mysql-status.html",
        "metric_count": 61
      }
    },
    "nats": {
      "connections": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-nats-connections.html",
        "metric_count": 1
      },
      "routes": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-nats-routes.html",
        "metric_count": 1
      },
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-nats-stats.html",
        "metric_count": 15
      },
      "subscriptions": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-nats-subscriptions.html",
        "metric_count": 8
      }
    },
    "nginx": {
      "stubstatus": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-nginx-stubstatus.html",
        "metric_count": 9
      }
    },
    "oracle": {
      "performance": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-oracle-performance.html",
        "metric_count": 9
      },
      "tablespace": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-oracle-tablespace.html",
        "metric_count": 6
      }
    },
    "php_fpm": {
      "pool": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-php_fpm-pool.html",
        "metric_count": 12
      },
      "process": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-php_fpm-process.html",
        "metric_count": 6
      }
    },
    "postgresql": {
      "activity": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-postgresql-activity.html",
        "metric_count": 5
      },
      "bgwriter": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-postgresql-bgwriter.html",
        "metric_count": 10
      },
      "database": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-postgresql-database.html",
        "metric_count": 17
      },
      "statement": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-postgresql-statement.html",
        "metric_count": 19
      }
    },
    "prometheus": {
      "collector": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-prometheus-collector.html",
        "metric_count": 2
      }
    },
    "rabbitmq": {
      "connection": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-rabbitmq-connection.html",
        "metric_count": 10
      },
      "exchange": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-rabbitmq-exchange.html",
        "metric_count": 7
      },
      "node": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-rabbitmq-node.html",
        "metric_count": 35
      },
      "queue": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-rabbitmq-queue.html",
        "metric_count": 16
      }
    },
    "redis": {
      "info": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-redis-info.html",
        "metric_count": 59
      },
      "key": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-redis-key.html",
        "metric_count": 2
      },
      "keyspace": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-redis-keyspace.html",
        "metric_count": 3
      }
    },
    "system": {
      "core": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-core.html",
        "metric_count": 17
      },
      "cpu": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-cpu.html",
        "metric_count": 27
      },
      "diskio": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-diskio.html",
        "metric_count": 20
      },
      "entropy": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-entropy.html",
        "metric_count": 2
      },
      "filesystem": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-filesystem.html",
        "metric_count": 7
      },
      "fsstat": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-fsstat.html",
        "metric_count": 5
      },
      "load": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-load.html",
        "metric_count": 7
      },
      "memory": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-memory.html",
        "metric_count": 24
      },
      "network": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-network.html",
        "metric_count": 8
      },
      "process": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-process.html",
        "metric_count": 59
      },
      "process_summary": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-process_summary.html",
        "metric_count": 8
      },
      "raid": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-raid.html",
        "metric_count": 8
      },
      "socket": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-socket.html",
        "metric_count": 1
      },
      "uptime": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-system-uptime.html",
        "metric_count": 1
      }
    },
    "tomcat": {
      "cache": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-tomcat-cache.html",
        "metric_count": 5
      },
      "memory": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-tomcat-memory.html",
        "metric_count": 8
      },
      "requests": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-tomcat-requests.html",
        "metric_count": 5
      },
      "threading": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-tomcat-threading.html",
        "metric_count": 5
      }
    },
    "traefik": {
      "health": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-traefik-health.html",
        "metric_count": 5
      }
    },
    "uwsgi": {
      "uwsgi status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-uwsgi-status.html",
        "metric_count": 8
      }
    },
    "vsphere": {
      "datastore": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-vsphere-datastore.html",
        "metric_count": 4
      },
      "host": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-vsphere-host.html",
        "metric_count": 6
      },
      "virtualmachine": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-vsphere-virtualmachine.html",
        "metric_count": 5
      }
    },
    "windows": {
      "perfmon": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-windows-perfmon.html",
        "metric_count": 1
      },
      "service": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-windows-service.html",
        "metric_count": 0
      }
    },
    "zookeeper": {
      "connection": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-zookeeper-connection.html",
        "metric_count": 4
      },
      "mntr": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-zookeeper-mntr.html",
        "metric_count": 13
      },
      "server": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-zookeeper-server.html",
        "metric_count": 10
      }
    }
  },
  source2: {
    "aerospike": {
      "namespace": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aerospike-namespace.html",
        "metric_count": 24,
        "sources": 0
      }
    },
    "apache": {
      "status": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-apache-status.html",
        "metric_count": 33,
        "sources": 0
      }
    },
    "appsearch": {
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-appsearch-stats.html",
        "metric_count": 19,
        "sources": 0
      }
    },
    "aws": {
      "cloudwatch": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-cloudwatch.html",
        "metric_count": 100,
        "sources": 0
      },
      "ebs": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-ebs.html",
        "metric_count": 7,
        "sources": 0
      },
      "ec2": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-ec2.html",
        "metric_count": 27,
        "sources": 0
      },
      "elb": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-elb.html",
        "metric_count": 3,
        "sources": 0
      },
      "rds": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-rds.html",
        "metric_count": 15,
        "sources": 0
      },
      "s3_daily_storage": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-s3_daily_storage.html",
        "metric_count": 2,
        "sources": 0
      },
      "s3_request": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-s3_request.html",
        "metric_count": 9,
        "sources": 0
      },
      "sqs": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-aws-sqs.html",
        "metric_count": 8,
        "sources": 0
      }
    },
    "azure": {
      "compute_vm": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-compute_vm.html",
        "metric_count": 33,
        "sources": 0
      },
      "compute_vm_scaleset": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-compute_vm_scaleset.html",
        "metric_count": 21,
        "sources": 0
      },
      "monitor": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-azure-monitor.html",
        "metric_count": 3,
        "sources": 0
      }
    },
    "beat": {
      "state": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-beat-state.html",
        "metric_count": 2,
        "sources": 0
      },
      "stats": {
        "link": "https://www.elastic.co/guide/en/beats/metricbeat/current/metricbeat-metricset-beat-stats.html",
        "metric_count": 14
      },
    }
  },
}


for (var key of Object.keys(data)) {
  let select = document.getElementById("select");
  let option = document.createElement('option');
  option.text = key;
  select.add(option);
}

