
# Storyblok quick starter project

Welcome to this sample project for React!
This project serves as a quick starter for integrating Storyblok, a headless CMS, into your web development projects.

For starting, you can access to the `storyblok-integration` folder.
In the folder you have some files like:

- `src/index.js`: the configuration with Storyblok API;
- `src/App.js`: the initialization of the Storyblok Bridge.

## HTTPS setup

```
# install system package
brew install mkcert
mkcert -install

# generate certificate
mkcert localhost

# install npm package
npm install -g local-ssl-proxy

# start the app on dev port 3000
npm start

# start the https proxy 3010->3000 using the cert generated in the previous step
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
