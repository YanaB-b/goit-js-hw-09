import { Notify } from "notiflix";


const elDelay = document.querySelector('input[name ="delay"]');
const elStep = document.querySelector('input[name ="step"]');
const elAmount = document.querySelector('input[name ="amount"]');
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


const btnSuccess = ({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};
const btnFailure = ({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};


function onPromise (event) {
  event.preventDefault();
  let delay = Number(elDelay.value);
  let step = Number(elStep.value);
  let amount = Number(elAmount.value);

  if(!amount){
    amount = 1;

  }
 for (let i = 0; i < amount; i++) {
  createPromise(i + 1, delay + step *i)
  .then (btnSuccess).catch (btnFailure);
 }
}
btn.addEventListener('click', onPromise);
