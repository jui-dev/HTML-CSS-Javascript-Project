// 1. bring all the html element

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

// 2. function for getting the time from our computer.

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // when h > 12 , PM
  if (h > 12) {
    h = h - 12; // when h> 12, means h=13, h = h - 12 = 13-12 = 1
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h; // to display the two digits hour.
  m = m < 10 ? "0" + m : m; // to display the two digits minutes.
  s = s < 10 ? "0" + s : s; // to display the two digits seconds.

  // changing the html element's innerText.

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000); // after 1 second call the function again, to make it infinite loop. || that's how the function will be called every second.
}

updateClock(); /// calling the function.
