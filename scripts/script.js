var date = new Date();
var stringYear = (date.getFullYear() + 1 + '/1/1 00:00:00');

var currentYear = new Date().getTime();
var nextYear = new Date(`${stringYear}`).getTime();

var difference = nextYear - currentYear;

function atualizaData() {
  let day = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementsByClassName('data')[0].innerHTML = day;
  document.getElementsByClassName('data')[1].innerHTML = hours;
  document.getElementsByClassName('data')[2].innerHTML = minutes;
  document.getElementsByClassName('data')[3].innerHTML = seconds;

  difference -= 1000;
}

onload = function() {
  let title = document.getElementsByTagName('title')[0];
  let year = document.getElementsByTagName('h1')[0];

  title.innerHTML = `Countdown for ${date.getFullYear()}`;
  year.innerHTML = `DAYS TO END ${date.getFullYear()}`;

  setInterval(atualizaData, 1000);
}
