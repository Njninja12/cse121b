/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Noah Wright";
let currentYear = new Date().getFullYear();
let profilePicture = new Image();
profilePicture.src = "images/Profile Pic.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture.src);
nameElement.setAttribute("alt", `Profile image of ${fullname}`);




/* Step 5 - Array */
let fav_foods = ["pizza", "wings", "burgers", "chicken alfredo", "orange chicken"];
let anotherFood = "buffalo chicken";
fav_foods.push(anotherFood);
foodElement.innerHTML = fav_foods.join(", ");
foodElement.innerHTML += `<br>${fav_foods}`;
fav_foods.shift();
foodElement.innerHTML += `<br>${fav_foods}`;
fav_foods.pop();
foodElement.innerHTML += `<br>${fav_foods}`;





