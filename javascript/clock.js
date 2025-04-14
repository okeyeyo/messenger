function clock() {
  var time = new Date();

  var hours = time.getHours().toString().padStart(2, "0");
  var minutes = time.getMinutes().toString().padStart(2, "0");

  var timeString = `${hours}:${minutes}`;
  document.getElementsByClassName("status-bar__clock")[0].textContent =
    timeString;

  var hour = `${hours}`;
  document.getElementsByClassName("current-time")[0].textContent =
    hour + "시 기준,";
}

setInterval(clock, 1000);
clock();
