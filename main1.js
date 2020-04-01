const React = require('react');
const ReactDOM = require('react-dom');
// console.log(jQuery)
import $ from 'jquery'
// let $ = require('jquery');
console.log($)
var style = require('./app.css');

$('h1').text("I am h1")

document.write('<h1>Hello World</h1>');

var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);

// require.ensure(['./a'], function (require) {
//     var content = require('./a');
//     document.open();
//     document.write('<h1>' + content + '</h1>');
//     document.close();
// });

// var load = require('bundle-loader!./a.js');

// load(file => {
//     document.open();
//     document.write('<h1>' + file + '</h1>');
//     document.close();
// });

ReactDOM.render(
    <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
    </div>,
    document.querySelector('#a')
);