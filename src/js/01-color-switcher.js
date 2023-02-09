function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  let timeId = null;


  const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
  };

  const onStartBtn = () => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    refs.startBtn.classList.replace('button', 'button--disabled');
    refs.stopBtn.classList.replace('button--disabled', 'button');
    timeId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)

  };

  const onStopBtn = () => {
    refs.stopBtn.classList.replace('button', 'button--disabled');
    refs.startBtn.classList.replace('button--disabled', 'button');
    refs.body.style.backgroundColor = null;
    clearInterval(timeId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  };
  


  refs.startBtn.addEventListener('click', onStartBtn);
  refs.stopBtn.addEventListener('click',onStopBtn);