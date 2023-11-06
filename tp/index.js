const diceGameAnalyser = ()=>{
    let numberOfDice = 5;
    let diceResults = [];

    for(let i =0; i< numberOfDice; i++){
        // simulation d'un dé entre 1 et 6
        const result = Math.floor(Math.random() * 6) + 1;
        // ajout du résultat
        diceResults.push(result);
    }
    const sortResults = diceResults.sort((a, b) => a - b);
    return sortResults;
}



module.exports = diceGameAnalyser;