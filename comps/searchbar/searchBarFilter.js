export const searchBarFilterFunc = (contentCollection) => {
    //const searchBulk = contentCollection.title.toLowerCase() + "|" + contentCollection.year
    //const filteredArr = contentCollection.filter(search => {searchBulk.includes(search.value)})

        const filteredArr = contentCollection.filter((film) => film["title"].toLowerCase().includes(searchBar.value.toLowerCase()))

        //document.querySelector('#contextContainer').innerHTML = filteredArr//WOZU?

        document.querySelector('#contextContainer').innerHTML = `
         ${filteredArr.map(film => {
            return `
                <div class="film">
                    <div class="filmTitle">${film.title}</div>
                    <div class="filmYear">${film.year}</div>
                    <div>${film.desrc}</div>
                </div>
                `
            }).join('')
        }`
}