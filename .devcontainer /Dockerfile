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

# REMOVEing outdated yarn from /opt and installing via apt package
RUN rm -rf /opt/yarn-* /usr/local/bin/{yarn,yarnpkg} \
    && apt-get install -y curl apt-transport-https lsb-release \
    && curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null \
    && echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get -y install --no-install-recommends yarn

# COPYing default endpoint specific user settings overrides into container to specify Formatter
COPY --chown=node:node settings.vscode.json $HOME/.vscode-remote/data/Machine/settings.json

# processing LINUX housekeping
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

ENV HOST 0.0.0.0
# Optional Seting the default user
USER $USERNAME