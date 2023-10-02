/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Noah Wright",
    photo: "images/Profile Pic.jpg",  
    favoriteFoods: ["pasta", "pizza", "taco bell"],
    hobbies: ["video games", "board games", "disc golf", "traveling"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Tooele, UT",
        length: "7 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Mesa, AZ",
        length: "12 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Pocatello, ID",
        length: "2 years"
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("#name").setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});
