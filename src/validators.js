

export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

// validate tracking number functions

export const exactLength = length => value => value.length === length ? undefined: `Must contain exactly ${length} characters`;


export const onlyNumbers = value => /^\d+$/.test(value) ? undefined : 'Must only contain numbers';