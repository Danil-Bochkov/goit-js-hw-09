import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');

const formData = {}
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', evt => {
    _.throttle(() => {
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        console.log("word");
    }, 500)
    }
);

populateText();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        form.elements.email.value = savedMessage.email;
        form.elements.message.value = savedMessage.message;
    }
}