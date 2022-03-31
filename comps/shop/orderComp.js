export const basketFunc = (contentCollection, order, amount) => {

    if(contentCollection.state){
        document.querySelector('#navContainer').innerText = `
            <div id="article">
                <div style="background: ${film.preview}" class="orderIMG"></div>
                <div class="orderTitle">${film.title}</div>
                <div>${film.price} € </div>
                <div id="amount"></div>
            </div>
        `
    }


    basketOrder.addEventListener("click", () => {
    
    })
}