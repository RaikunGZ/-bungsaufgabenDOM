export const useFilmsFunc = (qs) => {
    qs.forEach(film => {
        qs.innerHTML += `
    <div class="film">
        <div class="filmTitle">${film.title}</div>
        <div class="filmYear">Erschienen: ${film.year}</div>
        <div>${film.desrc}</div>
    </div>
    `
    });
}