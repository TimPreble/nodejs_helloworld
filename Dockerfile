
FROM mcr.microsoft.com/devcontainers/base:alpine-3.17

# Install Sudo, Node & NPM
RUN set -ex && \
    apk --no-cache add sudo && \
    sudo apk --no-cache add nodejs npm

    #Create App Directory
WORKDIR /usr/src/web

#Install Dependencies
COPY package.json .
RUN sudo npm install

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo "$USERNAME" ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/"$USERNAME" \
    && chmod 0440 /etc/sudoers.d/"$USERNAME"

# Copy code to image
COPY . .

# Run Application
CMD ["node", "app.js"]