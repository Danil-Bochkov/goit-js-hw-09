import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;
let formData = {};
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
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateText() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        emailField.value = savedMessage.email || '';
        messageField.value = savedMessage.message || '';
        formData = savedMessage;
    }
}