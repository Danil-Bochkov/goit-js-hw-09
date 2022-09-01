import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');

let formData = {email: '', message: ''};
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', _.throttle(onInputTracker, 500));

form.addEventListener('submit', onFormSubmit);

populateText();


function onInputTracker(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    formData = {email: '', message: ''};
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        form.elements.email.value = savedMessage.email;
        form.elements.message.value = savedMessage.message;
        formData = savedMessage;
    }
}