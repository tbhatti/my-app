# ReactApp

This project is created without using create-react-app

## Steps to create my-app from terminal
```bash
 mkdir my-app
 cd my-app
 npm init -y
 npm install react react-dom
 mkdir app
 create index.js index.css inside app directory
 ```
## Copy following code into my-app\app\index.js
```python
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
```
So when you try to run this code in the browser it will give an error as the our code is written in JSX and browser does not understand it.

So this is the point where Babel and Webpack comes into play.
To install all required dependency for these two run following command from your terminal.
```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
```
### Webpack configurations

Create webpack.config.js at root folder and paste following code into it

```python
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
```
### In conjuction with out babel-loader works we have to add babel preset config to our package.json file

```python
"main": "index.js",
"babel":{
    "presets" : [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  
  ```
  
  ### To run the build we have to add webpack to our script tag in our package.json
  
  ```python
  "main": "index.js",
  "babel":{
    "presets" : [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
  "scripts": {
    "create": "webpack"
  },
  ```
So when i run npm run create from terminal it will run the webpack which will create the dist folder and our bundle file with index.html file.

It's hassle to run webpack every time. So you can start a webpack dev server. so it will start build your code as soon as you run it. modify your script in package.json with following.

```python

"scripts": {
    "start": "webpack-dev-server --open"
  }
  ```
  Now when you run npm run start it will start the dev server and open your app in the browser.

  # Use Less in the project
  You need to do following changes to use less instead of simple CSS
  ```python
  npm i less-loader
  ```
  ## Update webpack.config.js as follow

  ```python
  {test : /\.less$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }

```

## Add styles.less inside app folder 

Add path for styles.less in index.js as follow

import './styles.less';


