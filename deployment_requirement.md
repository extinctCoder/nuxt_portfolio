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

- 3 Consistance branch will be exist in sorce control (GitHub/GitLab). STAGING, QA, PROD.
- 3 deployment environment will be setup for CI/CD (STAGING, QA, PROD)
- each deployment should have its unique identifier based on the marge/pull request
- after each successfull marge/pull request unused environment will be detroyed automatically for STAGING, QA, PROD.
- for PROD new deployment will trigured based on the latest image with the latest pull request

_PIPLINE:_
git marge/pull request (STAGING)-> DEPLOY SATAGING -> git marge/pull request (QA) -> DEPLOY SATAGING & DESTROY STAGING -> git marge/pull request (PROD) -> DESTROY QA, PROD & DEPLOY PROD (latest)

## Link structure

| url                 | stage | service |
| ------------------- | ----- | ------- |
| studygiveway.com    | PROD  | daphne  |
| s3.studygiveway.com | PROD  | minio   |
| studygiveway.com    | PROD  | daphne  |
| studygiveway.com    | PROD  | daphne  |
| studygiveway.com    | PROD  | daphne  |

## Deployemnt Note

- Please Use alpine Image for Docker Containers.
- use .env file for authentication creandential, configuration, PORT LIST etc.
- add a sample .env.sample for devlopement team.
- only PORT 80, 443 will be accessable via internent.
- all services should be Horizontal Scaleable.
- All data should be persistent and stored in set intervel.
