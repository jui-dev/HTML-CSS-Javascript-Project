// 1. bring all 3 of the rating divs inside the js.
const ratingEls = document.querySelectorAll(".rating"); // querySelectorAll = to target all of the 3 ratings.
// bring the button element inside the js.
const btnEl = document.getElementById("btn");
// bring the container.
const containerEl = document.getElementById("container");

// declaring a variable that is initialized with an empty string, which will hold the selected emoji's text.
let selectedRating = "";

// 2. add a "event listener" to all of the 3 ratings . use foreach loop to loop through each of the ratings.
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive(); // 6. calling the removeActive() function.
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText; //7. getting the value / inner text of the selected Rating / emoji.
    event.target.classList.add("active"); // 3. adding the "active" class to the "rating" that we have "clicked".
    event.target.parentNode.classList.add("active"); // 4. when we click on the emoji the "active" class will be added to the parent Node.
  }); // adding event listener to each of the ratings. || when someone click on the rating , we are going to call a function.
});
// 8. adding an "eventListener" to the button. || if any emoji is selected only then we will be able to change the container div's "inner Html" after clicking the button.
btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong> Thank You! </strong>
    <br>
    <strong>Feedback:  ${selectedRating} </strong>
    <br>
    <p> We'll use your feedback to improve our customer support. </p>  
    `;
  }
});

// 5. this function will remove all the active classes from the elements.  // whenever we will call this function the "active" class will be removed from that element.
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
