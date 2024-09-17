import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import FirstModal from './Modal/FirstModal';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import UserReducerFile from "./CRUD/UserReducerFile"

const root = ReactDOM.createRoot(document.getElementById('root'));
//const portalroot = ReactDOM.createRoot(document.getElementById('portal-root'));

// const store = configureStore({
//   reducer: {
//     user: UserReducerFile
//   }
// })

root.render(
  
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <>
    <App />
    </>
    {/* </Provider> */}
  </React.StrictMode>
);

// portalroot.render(
// <>
//   <FirstModal></FirstModal>
// </>

// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
