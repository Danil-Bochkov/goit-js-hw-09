import Notiflix from 'notiflix';

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
}

const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formElem = evt.currentTarget.elements;
  const initialDelay = +formElem.delay.value;
  const step = +formElem.step.value;
  const amount = +formElem.amount.value;

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, initialDelay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});