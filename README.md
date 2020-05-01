# Stop Watch Timer

In this exercise I will create Actions, Reducers and Store for a Stopwatch application, with a button click event for starting and stopping the time. I'll use Redux-Thunk for this exercise.

  - Create Actions
  - Reducers
  - Store

### Tech

I'll use this technology:

* [React] - Open-source JavaScript library for building user interfaces.
* [Redux] - Redux is a predictable state container for JavaScript apps.

### Installation

Install the dependencies and devDependencies and start the server.

* [FromScratch] - Create a React application from scratch using webpack, babel and React

```sh
$ mkdir stop-watch-timer-redux-react
$ cd stop-watch-timer-redux-react
$ npm init -y
$ npm install react react-dom
$ npm install --save-dev babel-core babel-loader@7 babel-preset-es2015 babel-preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server
```

### Plugins

My app is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| webpack-dev-server | [Using webpack-dev-server][WebPackServer] |
| html-webpack-plugin | [HtmlWebpackPlugin][HtmlWebPack] |

### Building the source

For Dev.

```sh
$ npm run build
```

### Running the app

For Dev.

```sh
$ npm run start
```

### Redux

Install the dependencies for redux.

```sh
$ npm install react-redux redux redux-thunk redux-logger
```

### Moment.js

Parse, validate, manipulate, and display dates and times in JavaScript.

```sh
$ npm install moment --save
```

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [React]: <https://reactjs.org/>
   [Redux]: <https://redux.js.org/>
   [FromScratch]: <https://medium.com/javascript-in-plain-english/create-a-react-application-from-the-scracth-using-webpack-babel-and-react-79a7913c8f61>

   [WebPackServer]: <https://webpack.js.org/guides/development/#using-webpack-dev-server>
   [HtmlWebPack]: <https://webpack.js.org/plugins/html-webpack-plugin/>
   