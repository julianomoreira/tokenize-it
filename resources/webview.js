import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js'
import pluginCall from 'sketch-module-web-view/client'

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

// // Disable the context menu to have a more native feel
// document.addEventListener("contextmenu", function(e) {
//   e.preventDefault();
// });

// document.getElementById('button').addEventListener('click', function () {
//   pluginCall('nativeLog', 'Called from the webview')
// })

// called from the plugin
// window.setRandomNumber = function (randomNumber) {
//   document.getElementById('answer').innerHTML = 'Random number from the plugin: ' + randomNumber
//   console.log("hello")
// }
