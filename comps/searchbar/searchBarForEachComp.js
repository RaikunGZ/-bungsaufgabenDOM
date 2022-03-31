export const searchBarForEachFunc = (contentCollection) => {
    const newArr = []
    contentCollection.forEach(film => {
        const searchBulk = film.title.toLowerCase() + "|" + film.year

        if (searchBulk.includes(searchBar.value)) {
            console.log(film)
            newArr.push(film)
            console.log("newArr inner if", newArr)
        }
    })
    console.log("newArr all Filme", newArr)

    document.querySelector('#contextContainer').innerHTML = `
                ${newArr.map(newFilm => {
                    return `
                        <div class="film">
                            <div class="filmTitle">${newFilm.title}</div>
                            <div class="filmYear">Erschienen: ${newFilm.year}</div>
                            <div>${newFilm.desrc}</div>
                    `
                })}`
            
}