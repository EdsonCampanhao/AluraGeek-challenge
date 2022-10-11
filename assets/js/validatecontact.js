const inputName= document.querySelector('.about__contact__name');
const submitButton= document.querySelector('.about__contact__button');

const validateName = (event) => {

    const input = event.currentTarget;
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const test = regex.test(input.value);

    if (!test) {
        submitButton.setAttribute('disabled', 'disabled');
        inputName.classList.add('error');
    } else {
        submitButton.removeAttribute('disabled');
        inputName.classList.remove('error');
    }
    console.log(regex.test(input.value))
}

inputName.addEventListener('input', validateName);