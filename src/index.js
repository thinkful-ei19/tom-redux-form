import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import DeliveryComplaintForm from '/Users/thaborak/Documents/Thinkful/redux-form-challenge/redux-form-challenge/src/components/DeliveryComplainForm.js';
//import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <DeliveryComplaintForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();