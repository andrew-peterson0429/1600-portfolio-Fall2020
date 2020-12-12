const typesAPI = 'https://pokeapi.co/api/v2/type/'

// Inits on page load. Populates the type and limit picklists.
const initOptions = function (url, max, min) {

  // Get the types of pokemon and adds them to the picklist.
  axios.get(url).then((res) => {
    let pickListType = document.getElementById('type');
    let list = res.data.results;
    for (let i = 0; i < list.length; i++) {
      let option = document.createElement('option');
      option.text = list[i].name;
      option.value = list[i].name;
      pickListType.add(option);
    };
  }).catch((err) => {
    console.log(err);
  });

  // Populates the limit picklist.
  let pickListLimit = document.getElementById('limit');
  for (let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.text = i;
    option.value = i;
    pickListLimit.add(option);
  };

  // Populate event listener on button.
  let button = document.getElementById('popCards');
  button.addEventListener('click', () => {
    popCards();
  });

}(typesAPI, 50, 10);

// Gets a list of pokemon based on the users selection 
const getPokemon = function (url, type, quantity) {
  let results = [];
  let selectedType;
  let limit = quantity;

  // Get json data of pokemon types.
  axios.get(url).then((res) =>{
    let outerList = res.data.results;
    for (let i = 0; i < outerList.length; i++) {

      // Iterate through each pokemon type and push all pokemon to the results array.
      if (type == 'all') {
        let iteration = outerList[i];
        axios.get(iteration.url).then((res) => {
          let innerList = res.data.pokemon;
          if (!limit) limit = innerList.length;
          for (let ii = 0; ii < limit; ii++) {
            results.push(innerList[ii]);
          };
        }).catch((err) => {
          console.log(err);
        });
      };

      // Push pokemon from the selected type only into the results array.
      if (type == outerList[i].name) {
        selectedType = outerList[i]; 
        axios.get(selectedType.url).then((res) => {
          let innerList = res.data.pokemon;
          if (!limit) limit = innerList.length;
          for (let ii = 0; ii < limit; ii++) {
            results.push(innerList[ii]);
          };
        }).catch((err) => {
          console.log(err);
        });
      };
    };
  }).catch((err) => {
    console.log(err);
  });
  console.log(results);
  return results;
}; 

const popCards = function () {
  let userSelectedType = document.getElementById('type').value;
  let userSelectedLimit = document.getElementById('limit').value;
  let pokemon = null;
  let pokemonGrid = document.querySelector('pokemonGrid');
  // while (pokemonGrid.firstChild) {
  //   pokemonGrid.removeChild(pokemonGrid.firstChild);
  // }
  pokemon = getPokemon(typesAPI, userSelectedType, userSelectedLimit);

  let pokeScene = document.createElement('div');
  pokeScene.className = 'scene';
  let pokeCard = document.createElement('div');
  pokeCard.className = 'card';
  pokeCard.addEventListener('click', () => {
      pokeCard.classList.toggle('is-flipped');
  });
  
  pokeCard.appendChild(populateCardFront(pokemon))
  pokeCard.appendChild(populateCardBack(pokemon))
  pokeScene.appendChild(pokeCard)
  pokemonGrid.appendChild(pokeScene)
};

function populateCardFront(pokemon) {

  let cardFront = document.createElement('div');
  cardFront.className = `card__face card__face--front`;
  let frontLabel = document.createElement('p');
  let frontImage = document.createElement('img');
  frontLabel.textContent = pokemon.name;
  frontImage.src = getImageFileName(pokemon)
  cardFront.appendChild(frontImage)
  cardFront.appendChild(frontLabel)
  return cardFront
};

function populateCardBack(pokemon) {
  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'
  let backLabel = document.createElement('h3')
  backLabel.textContent = `Abilities:`
  let abilityList = document.createElement('ul')
  pokemon.abilities.forEach(ability => {
      let abilityName = document.createElement('li')
      abilityName.textContent = ability.ability.name
      abilityList.appendChild(abilityName)
  });
  let movesLabel = document.createElement('h3')
  movesLabel.textContent = 'Most Accurate Move:'
  let moveAccuracy = document.createElement('h4')
  const mostAccurateMove = getBestAccuracyAndPower(pokemon.moves)
  cardBack.appendChild(backLabel)
  cardBack.appendChild(abilityList)
  cardBack.appendChild(movesLabel)
  cardBack.appendChild(moveAccuracy)
  return cardBack
};

// function getBestAccuracyAndPower(pokemoves) {
//   return pokemoves.reduce((mostAccurate, move) => {
//       getAPIData(move.move.url).then
//           (async (data) => {
//           })
//     }, {});
// };

function getPokeData(url) {
  axios.get(url).then((res) => {
    let pokemon = res.data;
    return pokemon;
  });
};