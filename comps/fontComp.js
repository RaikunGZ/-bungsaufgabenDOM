export const fontFunc = () => {
    //Aufgabe 1
    const buttonElem = document.querySelector('#font');
    const pElem = document.querySelector('p');

    buttonElem.addEventListener("click", () => {
        pElem.style.fontFamily = 'Courier';
        pElem.style.fontSize = '3rem';
        pElem.style.color = 'red';
});
}