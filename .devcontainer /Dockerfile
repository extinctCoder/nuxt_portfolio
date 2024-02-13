FROM node:latest

# APT Configuration
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils 2>&1

# non ROOT user for DEV Container
ARG USERNAME=node
ENV HOME /home/$USERNAME

# Optional SUDO permission for user
RUN apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME

# Installing git and process tools
RUN apt-get install -y git procps