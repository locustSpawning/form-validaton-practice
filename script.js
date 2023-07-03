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

confirmpassword.addEventListener('mouseout', (e) => {
    if (confirmpassword.value != password.value || password.value == null) {
        password.style.borderColor = '#ff54ad';
        confirmpassword.style.borderColor = '#ff54ad';
    }
    if (confirmpassword.value === password.value) {
        password.style.borderColor = '#54ffc0';
        confirmpassword.style.borderColor = '#54ffc0';
    }
});

form.addEventListener('submit', (e) => {
    let messages = [];

    if (re.test(email.value) == false) {
        messages.push('Please enter a valid email ex: myname@gmail.com');
    }

    if (isNaN(zip.value) || zip.value < 0) {
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
        errorElement.style.display = 'block';
    }
    if (messages.length == 0) {
        highFive();
    }
});

function highFive() {
    alert('*✋* High Five! You did it!');
}
