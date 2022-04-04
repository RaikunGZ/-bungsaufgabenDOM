//Create a bookstore to order books
import { basketFunc } from "./orderComp.js"

export const shopFunc = (contentCollection) => {
    const shopContent = document.querySelector('#shopContent')
    let amount = 0;

    contentCollection.forEach(film => {
        shopContent.innerHTML += `
            <div class="film">
                    <div class="filmTitle">${film.title}</div>
                    <div class="filmYear">Erschienen: ${film.year}</div>
                    <div class="buy">
                        <div>${film.price} € </div>
                        <button class="addToCard">Add to Card</button>
                    </div>
                   <div style="background: ${film.preview}" class="previewIMG"></div>
                    <div class="descr">${film.desrc}</div>
            </div>
        `
    });

    const addToCardBTN = document.querySelector('.addToCard')
    
    addToCardBTN.addEventListener("click", () => {
            const addOnClick = addToCardBTN.closest(".film")
            const orderFilmName = addOnClick.querySelector('.filmTitle');
            const orderFilmIMG = addOnClick.querySelector('.previewIMG');
            const orderFilmPrice = addToCardBTN.closest(".buy").querySelector('div');
            
            console.log(orderFilmIMG, orderFilmName, orderFilmPrice);
            amount += 1;

            console.log(amount)
       })
    
    

    const navShop = document.querySelector('#shop')
    const basket = document.querySelector('#basket')
    const basketContent = document.querySelector('#basketContent')
    const previewIMG = document.querySelector('.previewIMG')

    basket.addEventListener("click", () => {
        basketFunc(contentCollection, order, amount)
    })
}