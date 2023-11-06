function diceGameAnalyser(){
    let numberOfDice = 5;
    let diceResults = [];

    for(let i =0; i< numberOfDice; i++){
        // simulation d'un dé entre 1 et 6
        const result = Math.floor(Math.random() * 6) + 1;
        // ajout du résultat
        diceResults.push(result);
    }
    return sortNumberAscending(diceResults);
};

function sortNumberAscending(list){
    return list.sort((a, b) => a - b);
}

const yamsGame = () => {
    return diceGameAnalyser();
}

module.exports = yamsGame;