exports.PORT = process.env.PORT || 3000;

exports.API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';

exports.myInit = process.env.REACT_APP_myInit || {method: 'POST', headers: {'Content-Type': 'application/json'}}