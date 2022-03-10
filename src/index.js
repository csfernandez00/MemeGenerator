import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


if(document.querySelector(".linea1").innerHTML.length < 20){
  document.querySelector(".linea1").style = "font-size: 40px";
  
}
if(document.querySelector(".linea1").innerHTML.length > 20){
document.querySelector(".linea1").style = "font-size: 30px; line-height: 1.8rem";

}
if(document.querySelector(".linea1").innerHTML.length > 40){
document.querySelector(".linea1").style = "font-size: 28px; line-height: 1.5rem";
}
if(document.querySelector(".linea1").innerHTML.length > 45){
document.querySelector(".linea1").style = "font-size: 24px; line-height: 1.3rem";
}
if(document.querySelector(".linea2").innerHTML.length < 20){
document.querySelector(".linea2").style = "font-size: 40px";

}
if(document.querySelector(".linea2").innerHTML.length > 20){
document.querySelector(".linea2").style = "font-size: 30px; line-height: 1.8rem";

}
if(document.querySelector(".linea2").innerHTML.length > 40){
document.querySelector(".linea2").style = "font-size: 28px; line-height: 1.5rem";
}
if(document.querySelector(".linea2").innerHTML.length > 45){
document.querySelector(".linea2").style = "font-size: 24px; line-height: 1.3rem";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
