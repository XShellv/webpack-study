const React = require('react');
const ReactDOM = require('react-dom');
var style = require('./app.css');

ReactDOM.render(
    <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
    </div>,
    document.querySelector('#example')
);

var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);