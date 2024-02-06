# Deployment Requirement

## Required Services

Bellow here is the required services.

| service         | version                      |
| --------------- | ---------------------------- |
| Minio           | RELEASE.2024-02-04T22-36-13Z |
| Postgres DB     | 16.1                         |
| PG Bouncer      | 1.22.0                       |
| Ha Proxy        | 3.0                          |
| PG Admin        | 4.0                          |
| Redis Stack     | 7.2                          |
| RedisInsight    | 1.14                         |
| Memchached      | 1.6.23                       |
| memcached-admin | latest                       |
| Elasticsearch   | 8.12.1                       |
| Logstash        | 8.11.0                       |
| Kibana          | 8.12.0                       |
| daphne          | 4.0.0                        |
| nginx           | 1.23.4                       |
| traefik         | 2.11.0-rc2                   |
| Jenkins         | 2.443                        |

## Service Role & connected services

| Service         | Role                      | Connected Service                                                 |
| --------------- | ------------------------- | ----------------------------------------------------------------- |
| Minio           | App Helper Service        | Logstash                                                          |
| Postgres DB     | App Helper Service        | Logstash                                                          |
| PG Bouncer      | Database helper service   | Postgres DB , Logstash                                            |
| Ha Proxy        | Database helper service   | PG Bouncer , Logstash                                             |
| PG Admin        | Database helper service   | Ha Proxy , Logstash                                               |
| Redis Stack     | App Helper Service        | Logstash                                                          |
| RedisInsight    | Redis Helper sevice       | Redis Stack , Logstash                                            |
| Memchached      | App Helper Service        | Logstash                                                          |
| memcached-admin | Memchached helper service | Memchached, Logstash                                              |
| Elasticsearch   | App Helper Service        | Logstash                                                          |
| Logstash        | App Helper Service        | Elasticsearch, Logstash                                           |
| Kibana          | EL Helper service         | Logstash, Elasticsearch                                           |
| daphne          | App Service               | Ha Proxy, Minio, Redis Stack, Memchached, Elasticsearch, Logstash |
| nginx           | App Helper Service        | daphne , Logstash                                                 |
| traefik         | App Helper Service        | nginx , Logstash                                                  |
| Jenkins         | CI/CD Helper Service      | Logstash                                                          |

## deployemnt PIPLINE

## Deployemnt Note

- Please Use alpine Image for Docker Containers.
- use .env file for authentication creandential, configuration, PORT LIST etc.
- add a sample .env.sample for devlopement team.
- only PORT 80, 443 will be accessable via internent.
- all services should be Horizontal Scaleable.
-
