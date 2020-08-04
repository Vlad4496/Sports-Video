let clock = document.querySelector('#clock');

function hexClock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  let clockStr = hours + ' : ' + minutes + ' . ' + seconds;

  clock.textContent = clockStr;
}

setInterval(hexClock, 1000);
