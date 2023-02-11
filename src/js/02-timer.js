// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const elInput = document.querySelector("datetime-picker");
const valueEl = document.querySelector(".value");
const labelEl = document.querySelector('button[data-start]');
labelEl.disabled = true;
let refsDate = null;

function onValue (value) {
    return String(value).podStart(2, '0');

}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  

function onTime({ days, hours, minutes, seconds }) {
  valueEl[0].textContent = `${days}`;
  valueEl[1].textContent = `${hours}`;
  valueEl[2].textContent = `${minutes}`; 
  valueEl[3].textContent = `${seconds}`;
}

  
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        labelEl.disabled = false;
        labelEl.style.background = '#00ffff';
        refsDate = selectedDates[0];

const onDefauitDate = options.defaultDate;
if (onDefauitDate >  refsDate){
    labelEl.disabled = true;
    labelEl.style.background = 'green';

 Report.failure("Please choose a date in the future")
}else {
    Notify.success('Date is OK');

}
    },
  };

  flatpickr(elInput, options);

  function timeStart() {
    elInput.disabled = true;
    labelEl.disabled = true;
    labelEl.style.background = 'green';
    elInput.style.background = 'green';
  }  

  let onInterval = null;
  onInterval = setInterval(() => {
    const intervalDate = new Date();
    const valueDate =  refsDate - intervalDate;
    if(valueDate < 1000) {
clearInterval (onInterval);
Report.success('Okey');
elInput.disabled = false;
elInput.style.background = '#00ffff';


    }

    let conver = convertMs(valueDate);
    updateTime (conver);

  },1000);


  labelEl.addEventListener ('click', () => {
    timeStart();
  });