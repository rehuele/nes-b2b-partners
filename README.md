# Nespresso B2B Partners

Nespresso B2B Partners Landing Page.

Starts project by running a local server, watches SASS files, builds SASS to CSS with live reload.
With the first commands (_yarn_ and _npm install_), the _node modules_ will be installed.

The main package bundle of this project is [Parcel](https://parceljs.org/). It's blazing fast, with little to zero configuration web application bundler.


## Contributing / System Requirements
---

You will need to install the following in order to contribute to the project.

- [Node Stable LTS](https://nodejs.org/en/) (v12.18.3)
- [Yarn](https://yarnpkg.com/getting-started)
- [NPM](https://www.npmjs.com/get-npm) (comes with Node by default)

The easiest way to install Node is to use nvm, which enables you to install multiple node versions on the same machine.
Once nvm is installed, run the following command in your terminal:

```
nvm install v6.6.0 && nvm alias default 6.6.0
```

## Install
---

````
yarn
````
or
````
npm install
````

## Getting Started
---

````
yarn dev
````
or
````
npm run dev
````

## Install Parcel
---

````
yarn global add parcel-bundler
````
or
````
npm install -g parcel-bundler
````

## Production
---

````
yarn build
````
or
````
npm run build
````

Unfortunately there has not been a command yet created to transfer assets into the _dist_ folder. So for now, it mus be manually done. Same goes for the _HTML_ file. Remember to alter links if necessary.


## Additional Plugins
---

Sometimes additional plugins are what help get the end result. Here's a list of a few:
- [AOS](https://github.com/michalsnik/aos) (Animate On Scroll Library)