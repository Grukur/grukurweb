// Because we want to access DOM nodes,
// we initialize our script at page load.
window.addEventListener('load', () => {
    // These variables are used to store the form data
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const country = document.getElementById('country');
    const subject = document.getElementById('subject');

const XHR = new XMLHttpRequest();
const boundary = 'blop'

let data = '';
data = fname.value + '\r\n' + lname.value + '\r\n' + country.value + '\r\n' + subject.value + '\r\n';

XHR.addEventListener('load', (event) =>{
    alert('Success!!!');
});
XHR.addEventListener('error', (event) => {
    alert('Oops....')
});

XHR.open('POST', 'https://example.com/cors.php');

XHR.send(data);


const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    sendData()
})

})



