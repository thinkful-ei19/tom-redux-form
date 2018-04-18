import React from 'react';
import { Field } from 'redux-form';
import Input from './Input';
import { required, nonEmpty, exactLength, onlyNumbers } from '../validators';


const exactLength5 = exactLength(5);


export default function Form(props) {
    return (
            <main>
                <Field
                    name="trackingNumber"
                    id="trackingNumber"
                    label="Tracking number"
                    component={Input}
                    validate={[
                        required,
                        nonEmpty,
                        exactLength5,
                        onlyNumbers
                    ]}
                />
                <Field
                    name="issue"
                    id="issue"
                    label="What is your issue?"
                    component={Input}
                    element="select">
                    <option value="not-delivered">
                        My delivery hasn't arrived
                        </option>
                    <option value="wrong-item">
                        The wrong item was delivered
                        </option>
                    <option value="missing-part">
                        Part of my order was missing
                        </option>
                    <option value="damaged">
                        Some of my order arrived damaged
                        </option>
                    <option value="other">
                        Other (give details below)
                        </option>
                </Field>
                <Field
                    name="details"
                    id="details"
                    label="Give more details (optional)"
                    component={Input}
                    element="textarea"
                />
                <button type="submit">Submit</button>
            </main>
    );
};


