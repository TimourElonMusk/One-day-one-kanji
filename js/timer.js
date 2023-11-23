function updateTimer() {
  const timerElement = document.getElementById('timer');
  const utcTime = new Date(Date.now() + new Date().getTimezoneOffset() * 60000);
  const nextDayUtc = new Date(utcTime.getUTCFullYear(), utcTime.getUTCMonth(), utcTime.getUTCDate() + 1, 0, 0, 0, 0);
  const timeDifference = nextDayUtc - utcTime;
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


setInterval(updateTimer, 1000);
window.addEventListener('load', updateTimer);