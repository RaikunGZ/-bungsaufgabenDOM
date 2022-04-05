// TEST VORBEREITUNG
import { contentCollection } from "./storage/film.js";
import { fontFunc } from "./comps/fontComp.js";
import { printFunc } from "./comps/printComp.js";
import { colorFunc } from "./comps/colorComp.js";
import { attributeConsoleFunc } from "./comps/attributeComp.js";
import { colorDropdownFunc } from "./comps/colorDropdownComp.js";
import { randomImgFunc } from "./comps/randomImgComp.js";
import { navContentChangFunc } from "./comps/navContentChangerComp.js";
import { passwordGenFunc } from "./comps/passwordGenComp.js";
import { loginFunc } from "./comps/loginComp.js";
import { searchBarForEachFunc } from "./comps/searchbar/searchBarForEachComp.js";
import { searchBarFilterFunc } from "./comps/searchbar/searchBarFilter.js"
import { shopFunc } from "./comps/shop/shopComp.js"

//Aufgabe 1
fontFunc()

// Aufgabe 2
printFunc()

// Aufgabe 3
colorFunc()

// Aufgabe 4
attributeConsoleFunc()

// Aufgabe 5

// Aufgabe 6
colorDropdownFunc()

// Aufgabe 7
randomImgFunc()

// Aufgabe 8
document.querySelector('#strongPara').innerHTML = `
        <p>
            Lorem, ipsum dolor sit <strong>amet consectetur adipisicing</strong> elit. Odit, <strong>consectetur</strong>? Praesentium, omnis.
        </p>
    `

const strongBTN = document.querySelector('#strongBTN')

strongBTN.addEventListener("click", () => {
    const strongElements = document.querySelectorAll('strong')
    strongElements.forEach(strongElem => {
        if(strongElem.style.color !== "red"){
            strongElem.style.color = "red"
        }else{
            strongElem.style.color = "black"
        }
    });
})

const strongFunc = () => {
    
}

// Aufgabe 9
window.addEventListener("resize", () =>{
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    
    const windowSizeFunc = () => {
        document.querySelector('.whOutput').innerText = `width: ${w}px
        height: ${h}px`
    }
    windowSizeFunc()
})




// Aufgabe 10
navContentChangFunc()

// Aufgabe 11
//Use innerHTML und string literals to create employee cards from the Northwind database

// Aufgabe 12
//Use createElement and appendChild to create employee cards from the Northwind database

// Aufgabe 13
//Create an interactive flashcard game based on the Curriculum JSON

// Aufgabe 14
//Create a password generator
passwordGenFunc()

//import { employees } from "./employees.js"
// Aufgabe 15
loginFunc()

// Aufgabe 16

const contextContainer = document.querySelector('#contextContainer')
const searchBar = document.querySelector('#searchBar')
const searchBTN = document.querySelector('#searchBTN')

contentCollection.forEach(film => {
    document.querySelector('#contextContainer').innerHTML += `
        <div class="film">
            <div class="filmTitle">${film.title}</div>
            <div class="filmYear">Erschienen: ${film.year}</div>
            <div>${film.desrc}</div>
        </div>
    `
});

searchBTN.addEventListener("click", (e) => {
    e.preventDefault()
    
    //searchBarForEachFunc(contentCollection)
    searchBarFilterFunc(contentCollection)
})

// 2. versuch Live searchBar .addEventListener("keypress", logKey = (e) => {}

// Aufgabe 17 - Create a three-page form which prints out the data at the end

// Aufgabe 18
shopFunc(contentCollection)

// Zusatz Bestellfeld


