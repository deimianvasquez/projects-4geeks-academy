window.onload = () => {
    var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var cardType = ["heart", "spade", "club", "diamond"];

    var randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    var randomCardType = Math.floor(Math.random() * cardType.length);
    var endCardType = cardType[randomCardType];

    document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
    document.getElementById('card').classList.add(getCardType(endCardType));
}

const getCardType = (card) =>{
    switch (card) {
        case "heart": return "card-heart"; break;
        case "spade": return "card-spade"; break;
        case "club": return "card-club"; break;
        case "diamond": return "card-diamond"; break;
    }
}