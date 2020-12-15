import React from 'react';
// import ReactDOM from 'react-dom';  
import { hydrate, render } from "react-dom";
 
import RouterComponent from './RouterComponent'

import "./assets/library/css/vendor.min.css" 
import "./assets/library/css/main.css" 
 
 

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<RouterComponent />, rootElement);
} else {
  render(<RouterComponent />, rootElement);
}

// ReactDOM.render(
//   <React.StrictMode> 
//       <RouterComponent /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );
 