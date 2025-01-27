#FROM node:18
FROM mcr.microsoft.com/devcontainers/base:alpine-3.17


# Install basic development tools
# RUN apt update && apt install -y less man-db sudo

#RUN apk update && apk add nodejs
# RUN apk add --update nodejs nodejs-npm
RUN set -ex && apk --no-cache add sudo
RUN sudo apk update
RUN sudo apk add nodejs
RUN sudo apk add npm

#Create App Directory
# WORKDIR /usr/src/web

#Install Dependencies
COPY package.json .
RUN sudo npm install

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

#Install Dependencies
# COPY package.json .
# RUN npm install

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
