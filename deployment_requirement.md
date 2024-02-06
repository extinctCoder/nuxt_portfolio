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

## Service Role

## Minio

- Please Use alpine Image for Docker Containers.
- use .env file for authentication, configuration etc.
- add a sample .env.sample for devlopement team.
