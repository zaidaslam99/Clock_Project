const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Get the degree for the watch as time increments.
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (seconds / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
