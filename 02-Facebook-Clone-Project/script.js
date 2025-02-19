var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

// whenever we will click on the div it will call this function. || this function is for toggling the drop-down menu.
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}

// toggling the button for dark mode and light mode //
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on"); // whenever we will click on the btn it will add the class name "dark-btn-on" & if we again click on the btn it will remove the class name "dark-btn-on".
  document.body.classList.toggle("dark-theme"); // the light & dark theme / mode
  if (localStorage.getItem("theme") == "light") {
    // update the local storage whenever user click the btn.
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// use the concept of localstorage so that, even if the user refresh the website, the website will be set to the selected mode.
// we will use this concept to store the light mode / dark mode of the browser.

// 1st we have to read whether the local storage is there or not.
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on"); // now the btn will be off btn.
  document.body.classList.remove("dark-theme"); // now the website will look light mode.
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on"); // now the btn will be on btn.
  document.body.classList.add("dark-theme"); // now the website will look dark mode.
}
// if we don't have the light/ dark mode saved in the browser, then the else statement will execute. || whenever the user will visit the website for the 1st time this will be executed.
else {
  localStorage.setItem("theme", "light"); // we are creating a local storage with the name of theme with the value of "light"
  //localStorage.getItem("theme"); // parameter = name of that local storage.
}
