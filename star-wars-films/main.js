import { films } from '../data/films.js'
console.log(films[0]["title"])

const cards = document.getElementById("cards")
const main = document.querySelector("main")
//let filterTest = films.filter(x => x["episode_id"] >= 4 || <= 6)
let filterTest = films.filter((r, a) => r + (a >= 4 && a <= 6), 0)
//let reduceTest = films.reduce((r, a) => r + (["episode_id"] >= 4 && ["edpisode_id"] <= 6), 0)
console.log(filterTest)

for(let i = 0; i < films; i ++){
  console.log(films[i])
}

function buttonAction(array){
  console.log(array)
}

CreateButton("Original Trilogy",main,CreateCards,filterTest,3,"button")

CreateButton("All Films",main,CreateCards,filterTest,films.length,"button")

// const originalTrilogy = document.createElement('button')
// originalTrilogy.textContent = 'Original Trilogy'
// main.appendChild(originalTrilogy)

// const othersButton = document.createElement('button')
// othersButton.textContent = 'Other Films'
// main.appendChild(othersButton)

// CreateCards(films,3)
function CreateCards(array,iteration){
  for (let step = 0; step < iteration; step++) {

      //create DOM elements
      let figure = document.createElement('figure')
      let figImg = document.createElement('img')
      figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
      let figCaption = document.createElement('figcaption')
      figCaption.textContent = array[step].title


      //put it into HTML
      figure.appendChild(figImg)
      figure.appendChild(figCaption)

      cards.appendChild(figure)
    }
}

/* for (const film of films) {
    let newImg = document.createElement('img') // new image instance
    newImg.src = 'https://starwars-visualguide.com/assets/img/films/2.jpg' // set the source of it or nothing will show
    // now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title)
  } */


function CreateButton(text,appendto,onClickMethod,array,amt,className){
  let myButton = document.createElement('button')//create button in DOM
  //create event listener for click event
  myButton.className = className
  myButton.addEventListener('click', ()=>{
    onClickMethod(array,amt)//thing to do when clicked. This is using an argument so you can do anything
  })
  myButton.textContent = text//pass in button text
  appendto.appendChild(myButton)//put button in your HTML so it's visible. The method lets you choose where to put it
}

//https://starwars-visualguide.com/assets/img/characters/2.jpg