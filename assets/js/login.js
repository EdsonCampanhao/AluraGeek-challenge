
const inputEmail = document.querySelector(".login__email")
const inputPassword = document.querySelector(".login__password")
const submitButton = document.querySelector(".login__button")



const validateEmail = (event) => {

    const input = event.currentTarget;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailTest = regex.test(input.value);

    if (!emailTest) {
        submitButton.setAttribute('disabled', 'disabled');
        inputEmail.classList.add('login__email-error');
    } else {
        submitButton.removeAttribute('disabled');
        inputEmail.classList.remove('login__email-error');
    }
}

const validatePassword = (event) => {

    const input = event.currentTarget;
    if (input.value.length < 8) {

        submitButton.setAttribute('disabled', 'disabled');
        inputPassword.classList.add('login__password-error');

    } else {

        submitButton.removeAttribute('disabled');
        inputPassword.classList.remove('login__password-error');
    }


}

inputEmail.addEventListener('input', validateEmail);
inputPassword.addEventListener('input', validatePassword);
