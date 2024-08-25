import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'; 
import { Calculator } from './calculator/calculator';
// import { Regform } from './formsample/regform';
// import { Userdetails } from './formsample/userdetails';
// import {Cart} from './formsample/cart';
// import { Usestate } from './Usestate';
// import App from './App.jsx'
// import Usercard from './usercard/Usercard';
// import './usercard/usercard.css'
// import { QRcode } from './qrcodegenerator/qrcode';
// import './qrcodegenerator/qrcode.css';
// import { AdviceApp } from './advice/AdviceApp';  
// import FixedSizeBarcodeGenerator from './barcodegenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App /> 
   <Usestate/>
   <Cart/>
   <Userdetails/>
   <Regform/>
  <Usercard/>*/}
   {/* <QRcode/>  */}
  {/* <AdviceApp/> */}
   {/* <FixedSizeBarcodeGenerator/> */}
   <Calculator/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
