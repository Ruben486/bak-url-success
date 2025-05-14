const querystring = window.location.search || window.location.hash;
console.log(querystring);   // ?id=1234567890
const params = new URLSearchParams(querystring);    
console.log(params);        // URLSearchParams { 'id' => '1234567890' }