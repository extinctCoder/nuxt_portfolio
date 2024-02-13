FROM node:latest

# APT Configuration
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

ARG USERNAME=node
ENV HOME /home/$USERNAME