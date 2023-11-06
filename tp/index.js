// Jet de Dés d'une partie
function diceGameAnalyser(){
    let numberOfDice = 5;
    let diceResults = [];

    for(let i =0; i< numberOfDice; i++){
        // simulation d'un dé entre 1 et 6
        const diceResult = Math.floor(Math.random() * 6) + 1;
        // ajout du résultat
        diceResults.push(diceResult);
    }
    return sortNumberAscending(diceResults);
};

// Tri croissant
function sortNumberAscending(list){
    return list.sort((a, b) => a - b);
}

// Calcul des figures possibles
function calculatePoints(game){
    // nombres de valeurs identiques
  const valueCount = {};

  // Parcourez la liste et comptez les occurrences de chaque valeur
  for (const value of game) {
    if (valueCount[value]) {
      valueCount[value]++;
    } else {
      valueCount[value] = 1;
    }
  }

  // Comptez le nombre de valeurs identiques
  let identicalCount = 0;
  for (const count of Object.values(valueCount)) {
    if (count > 1) {
      identicalCount += count;
    }
  }
  return identicalCount;

}

// Main
const yamsGame = () => {
    const game = diceGameAnalyser();
    let score = calculatePoints(game);

    return diceGameAnalyser();
}

module.exports = {yamsGame, calculatePoints};