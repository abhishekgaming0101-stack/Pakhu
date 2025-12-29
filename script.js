const startDate = new Date("March 30, 2025 00:00:00").getTime();

function updateCounter() {
  const startDate = new Date(2025, 2, 30, 11, 38, 0); // 30 March 2025, 11:38 AM
  const now = new Date();

  let diff = now - startDate;

  if (diff < 0) diff = 0;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();
