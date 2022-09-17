import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import {worker} from "./mocks/browser";

worker.start({
    onUnhandledRequest: "bypass"
})
.then(() => {

    ReactDOM.render(
        <React.StrictMode>
            {/* <App1/> */} {/** Component Mount on path change for sure! ~Sahil */}
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );


    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}).catch(console.error)

