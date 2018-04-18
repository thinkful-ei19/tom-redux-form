import React from 'react';
import {reduxForm, SubmissionError} from 'redux-form';
import { API_BASE_URL } from '/Users/thaborak/Documents/Thinkful/redux-form-challenge/redux-form-challenge/src/config.js'
import Form from './Form';



export class DeliveryComplaintForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        return res.json().then(err => Promise.reject(err));
                    }
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Report submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
        return (
            <div className="delivery-form">
                <h2>Report a problem with your delivery</h2>
                <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                    {successMessage}
                    {errorMessage}
                    <Form />
              </form>
         </div>
     
        );
    }
}

export default reduxForm({
    form: 'delivery',
    initialValues: {
        issue: 'not-delivered'
    }
})(DeliveryComplaintForm);
