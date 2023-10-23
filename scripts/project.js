/* W05: Programming Tasks */

/* Declare and initialize global variables */
const cardsElement = document.querySelector("#cards");
let cardList = [];
/* async displayTemples Function */
const displayCards = (cards) => {
    cardsElement.innerHTML = "";
    cards.forEach((card) => {

        const article = document.createElement("article");
        cardsElement.appendChild(article);
        const h3 = document.createElement("h3");
        h3.textContent = card.cardName;
        const img = document.createElement("img");
        img.src = card.imageUrl;
        img.alt = card.color;
        article.appendChild(h3);
        article.appendChild(img);
    });
};
/* async getTemples Function using fetch()*/
const getCards = async () => {
    const response = await fetch("https://run.mocky.io/v3/2079fffe-52d1-4475-a9c9-b62631d2bc58");
    data = await response.json();
    cardList.push(...data);
    displayCards(cardList);
};

/* reset Function */
const reset = () => {
    cardsElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (cards) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "red":
            displayCards(cards.filter(card => card.color.includes("Red")));
            break;
        case "blue":
            displayCards(cards.filter(card => card.color.includes("Blue")));
            break;
        case "green":
            displayCards(cards.filter(card => card.color.inlcudes("Green")));
        case "all":
            displayCards(cards);
            break;
    }
};

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {
    sortBy(cardList);
});

getCards();