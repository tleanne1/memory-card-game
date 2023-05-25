const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
  let clickedCard = e.target; // getting user clicked card
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      // return the cardOne value to clickCard
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("img"),
      cardTwoImg = cardTwo.querySelector("img");
    matchCards(cardOneImg, cardTwoImg);
  }
}

cards.forEach((card) => {
  // adding click event to all cards
  card.addEventListener("click", flipCard);
});
