FROM node:boron

MAINTAINER Yali Wang, Longlong Li

# Use Alibaba's NPM mirror
RUN npm set registry https://registry.npm.taobao.org/

# active api server
RUN mkdir -p /usr/projects
WORKDIR /usr/projects

RUN git clone https://github.com/Binaryify/NeteaseCloudMusicApi

WORKDIR /usr/projects/NeteaseCloudMusicApi
RUN npm install --production
# runing in 4000 port
# RUN PORT=4000 node app.js

# creat workdir
RUN mkdir -p /usr/projects/netease-musice-vue
WORKDIR /usr/projects/netease-musice-vue

# Install dependencies
COPY package.json /usr/projects/netease-musice-vue
RUN npm install --production
RUN npm install -g @vue/cli@latest

# copy other codes and resources
COPY . /usr/projects/netease-musice-vue

EXPOSE 8080
# ENTRYPOINT diff CMD CDM can be overrided
CMD npm run serve & node ../NeteaseCloudMusicApi/app.js
