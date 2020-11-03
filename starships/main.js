import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            console.log(event)
        })
    })
}