console.log('🪻');
console.log('🌸');

const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm');
const errorElement = document.getElementById('error');
var re =
    /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+((?:\_[a-zA-Z0-9]+)|(?:\.[a-zA-Z0-9]+))*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,6}(?:\.[a-zA-Z]{2})?)$)/;

form.addEventListener('submit', (e) => {
    let messages = [];

    if (re.test(email.value) == false) {
        messages.push('Please enter a valid email ex: myname@gmail.com');
    }

    if (isNaN(zip.value)) {
        messages.push('Please enter a valid zip code ex. 90210');
    }

    if (password.value.length <= 3) {
        messages.push('Password must be longer than 3 characters');
    }
    if (password.value != confirmpassword.value) {
        messages.push('Passwords must match!');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
