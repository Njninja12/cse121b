/* W05: Programming Tasks */
const mockData = [
    {
      cardName: "Riku, of two reflections",
      color: "Red, Blue, Green",
      type: "Legendary Creature",
      imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/commander/riku-of-two-reflections-22654.jpg"
    },
    {
      cardName: "Guttersnipe",
      color: "Red",
      type: "Creature",
      imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/promotional/promotional-37304.jpg"
    },
    {
      cardName: "Ominous Seas",
      color: "Blue",
      type: "Enchantment",
      imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/ikoria-lair-of-behemoths/ominous-seas-26152.jpg"
    },
    {
        cardName: "Reclamation Sage",
        color: "Green",
        type: "Creature",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/2015-core-set/reclamation-sage-93525.jpg"
      },
      {
        cardName: "Rampant Growth",
        color: "Green",
        type: "Sorcery",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/2010-core-set/rampant-growth-46422.jpg"
      },
      {
        cardName: "Eureka Moment",
        color: "Green, Blue",
        type: "Instant",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/strixhaven-school-of-mages/eureka-moment-81971.jpg"
      },
      {
        cardName: "Goblin Electromancer",
        color: "Red, Blue",
        type: "Creature",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/return-to-ravnica/goblin-electromancer-32082.jpg"
      },
      {
        cardName: "Sol Ring",
        color: "Colorless",
        type: "Artifact",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/3rd-edition/sol-ring-73776.jpg"
      },
      {
        cardName: "Acidic Soil",
        color: "Red",
        type: "Sorcery",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/urzas-saga/acidic-soil-96521.jpg"
      },
      {
        cardName: "Mythos of Illuna",
        color: "Blue",
        type: "Sorcery",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/ikoria-lair-of-behemoths/mythos-of-illuna-79404.jpg"
      },
      {
        cardName: "Aetherize",
        color: "Blue",
        type: "Instant",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/starter-commander-decks/aetherize-39643.jpg"
      },
      {
        cardName: "Jaya's Immolating Inferno",
        color: "Red",
        type: "Legendary Sorcery",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/commander-legends/jayas-immolating-inferno-commander-deck-42543.jpg"
      },
      {
        cardName: "Plasm Capture",
        color: "Green, Blue",
        type: "Instant",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/dragons-maze/plasm-capture-39537.jpg"
      },
      {
        cardName: "Return to Nature",
        color: "Green",
        type: "Instant",
        imageUrl: "https://static.cardkingdom.com/images/magic-the-gathering/core-set-2021/return-to-nature-29847.jpg"
      }
];
/* Declare and initialize global variables */
const cardsElement = document.querySelector("#cards");
let cardList = [];
/* async displayTemples Function */
const displayCards = (cards) => {
    cardsElement.innerHTML = "";
    cards.forEach((card) => {

        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = card.cardName;
        const img = document.createElement("img");
        img.src = card.imageUrl;
        img.alt = card.color;
        article.appendChild(h3);
        article.appendChild(img);
        cardsElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getCards = async () => {
    //const response = await fetch("https://run.mocky.io/v3/13c7d9a7-0f38-4a42-b5b4-9311d3c91cea");
    //const data = await response.json();
    cardList.push(...mockData);
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
            displayCards(cards.filter(card => card.color.includes("Green")));
            break;
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