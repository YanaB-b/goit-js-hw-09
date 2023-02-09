import { Notify } from "notiflix";


const delay = document.querySelector('input[name ='delay']');
const step = document.querySelector('input[name ='step']');
const amount = document.querySelector('input[name ='amount']');
const btn = document.querySelector('button');



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({position, delay});
    }
    reject({position, delay});
  }, delay);
 
});
}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });