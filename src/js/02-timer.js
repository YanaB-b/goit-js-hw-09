// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  daretimePicker: document.querySelector('#datetime-picker'),

};

refs.startBtn.disabled = true;
let refsDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      refsDate = selectedDates[0].getTime()
      flatpickrClose();
  },
};
flatpickr('#datetime-picker', options)

refs.startBtn.addEventListener('click', timeStart)

function flatpickrClose() {
  if( refsDate < options.defaultDate.getTime()){
    Notiflix.Notify.failure("Please choose a date in the future");

}else {

  refs.startBtn.disabled = false;
    refs.daretimePicker.disabled = true;
    Notify.success('Date is OK');
  }
}


function timeStart(){
  const onInterval = setInterval(() => {
    refs.startBtn.disabled = true;
    const intervalDate = Date.now();
    const ms = refsDate - intervalDate;

    const { days, hours, minutes, seconds } = convertMs(ms);
    refs.days.textContent = `${addLeadingZero(days)}`;
    refs.hours.textContent = `${addLeadingZero(hours)}`;
    refs.minutes.textContent = `${addLeadingZero(minutes)}`; 
    refs.seconds.textContent = `${addLeadingZero(seconds)}`;
   
    if(ms < 1000) {
      clearInterval(onInterval);
    }
  },1000);

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
  


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}