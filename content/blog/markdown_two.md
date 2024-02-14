---
# title: Hello, World!
description: This is my very first blog post and I'm so excited to share it with you!
date: 2023-05-23
cover: nasa-Q1p7bh3SHj8-unsplash.jpg
tags:
  - blog
  - markdown
  - portfolio
---

# Deployment GUIDLINE

## Required Services

| service         | version                      | PUBLIC_PORT | DEPENDS ON DEPLOYMENT STAGE |
| --------------- | ---------------------------- | ----------- | --------------------------- |
| Minio           | RELEASE.2024-02-04T22-36-13Z |             | YES                         |
| Postgres DB     | 16.1                         |             | YES                         |
| PG Bouncer      | 1.22.0                       |             | YES                         |
| Ha Proxy        | 3.0                          |             | YES                         |
| PG Admin        | 4.0                          |             | YES                         |
| Redis Stack     | 7.2                          |             | YES                         |
| RedisInsight    | 1.14                         |             | YES                         |
| Memchached      | 1.6.23                       |             | YES                         |
| memcached-admin | latest                       |             | YES                         |
| Elasticsearch   | 8.12.1                       |             | YES                         |
| Logstash        | 8.11.0                       |             | YES                         |
| Knaiba          | 8.12.0                       |             | YES                         |
| daphne          | 4.0.0                        |             | YES                         |
| nginx           | 1.23.4                       |             | YES                         |
| traefik         | 2.11.0-rc2                   | 80, 443     | NO                          |
| Jenkins         | 2.443                        |             | NO                          |

## Service Role & connected services

| Service         | Role                      | Connected Service                                                 |
| --------------- | ------------------------- | ----------------------------------------------------------------- |
| Minio           | App Helper Service        | Logstash                                                          |
| Postgres DB     | App Helper Service        | Logstash                                                          |
| PG Bouncer      | Database helper service   | Postgres DB, Logstash                                             |
| Ha Proxy        | Database helper service   | PG Bouncer, Logstash                                              |
| PG Admin        | Database helper service   | Ha Proxy, Logstash                                                |
| Redis Stack     | App Helper Service        | Logstash                                                          |
| RedisInsight    | Redis Helper service      | Redis Stack , Logstash                                            |
| Memchached      | App Helper Service        | Logstash                                                          |
| memcached-admin | Memchached helper service | Memchached, Logstash                                              |
| Elasticsearch   | App Helper Service        | Logstash                                                          |
| Logstash        | App Helper Service        | Elasticsearch, Logstash                                           |
| Kibana          | EL Helper service         | Logstash, Elasticsearch                                           |
| daphne          | App Service               | Ha Proxy, Minio, Redis Stack, Memchached, Elasticsearch, Logstash |
| nginx           | App Helper Service        | daphne, Logstash                                                  |
| traefik         | App Helper Service        | nginx, Logstash                                                   |
| Jenkins         | CI/CD Helper Service      | Logstash                                                          |

## deployment PIPELINE

- 3 Consistent branch will be exist in source control (GitHub/GitLab). STAGING, QA, PROD.
- 3 deployment environment and pipeline will be setup for CI/CD (STAGING, QA, PROD)
- each deployment should have its unique identifier based on the marge/pull request
- after each successful marge/pull request unused environment will be destroyed automatically for STAGING, QA, PROD.
- for PROD new deployment will triggered based on the latest image with the latest pull request

### PIPELINE

```sh
git marge/pull request (STAGING)-> **DEPLOY STAGING** -> git marge/pull request (QA) -> **DEPLOY STAGING & DESTROY STAGING** -> git marge/pull request (PROD) -> **DESTROY QA, PROD & DEPLOY PROD (latest)**
```

## Link structure

| url                                                  | stage   | service         |
| ---------------------------------------------------- | ------- | --------------- |
| jenkins.studygiveway.com                             | X       | Jenkins         |
| studygiveway.com                                     | PROD    | daphne          |
| s3.studygiveway.com                                  | PROD    | minio           |
| db.studygiveway.com                                  | PROD    | PG Admin        |
| redis.studygiveway.com                               | PROD    | RedisInsight    |
| memchached.studygiveway.com                          | PROD    | memcached-admin |
| kibana.studygiveway.com                              | PROD    | kibana          |
| <MARGE/PULL_REQUEST_TAG>.studygiveway.com            | QA      | daphne          |
| s3-<MARGE/PULL_REQUEST_TAG>.studygiveway.com         | QA      | minio           |
| db-<MARGE/PULL_REQUEST_TAG>.studygiveway.com         | QA      | PG Admin        |
| redis-<MARGE/PULL_REQUEST_TAG>studygiveway.com       | QA      | RedisInsight    |
| memchached-<MARGE/PULL_REQUEST_TAG>.studygiveway.com | QA      | memcached-admin |
| kibana-<MARGE/PULL_REQUEST_TAG>.studygiveway.com     | QA      | kibana          |
| <MARGE/PULL_REQUEST_TAG>.studygiveway.com            | STAGING | daphne          |
| s3-<MARGE/PULL_REQUEST_TAG>.studygiveway.com         | STAGING | minio           |
| db-<MARGE/PULL_REQUEST_TAG>.studygiveway.com         | STAGING | PG Admin        |
| redis-<MARGE/PULL_REQUEST_TAG>studygiveway.com       | STAGING | RedisInsight    |
| memchached-<MARGE/PULL_REQUEST_TAG>.studygiveway.com | STAGING | memcached-admin |
| kibana-<MARGE/PULL_REQUEST_TAG>.studygiveway.com     | STAGING | kibana          |

## Deployment Note

- Use alpine Image for Docker Containers.
- Use .env file for authentication credential, configuration, PORT LIST etc.
- Add a sample .env.sample for devolvement team.
- Only PORT 80, 443 will be accessible via internet.
- All services should be Horizontal Scalable.
- All data should be persistent and stored in set interval.
- Internally in containerized environment all the default ports should be open for communication from container to container.
- This deployment Guideline is build with Agile Development & industry standard CI/CD Guideline.
