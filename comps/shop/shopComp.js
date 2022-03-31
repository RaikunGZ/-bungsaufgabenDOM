//Create a bookstore to order books
import { basketFunc } from "./orderComp.js"

export const shopFunc = (contentCollection) => {
    const shopContent = document.querySelector('#shopContent')
    const orderBTN = document.querySelector('.addToCard')
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

    orderBTN.addEventListener("click", () => {
        const orderFilmName = $('.this').closest('.film').children('.filmName').text();
        console.log(orderFilmName);
        amount += 1;
    })

    const navShop = document.querySelector('#shop')
    const basket = document.querySelector('#basket')
    const basketContent = document.querySelector('#basketContent')
    const previewIMG = document.querySelector('.previewIMG')

    basket.addEventListener("click", () => {
        basketFunc(contentCollection, order, amount)
    })
}