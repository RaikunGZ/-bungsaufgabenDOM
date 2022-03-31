export const navContentChangFunc = () => {
    const navHome = document.querySelector('#home')
    const navProd = document.querySelector('#products')
    const navCont = document.querySelector('#contact')
    const navContainer = document.querySelector('#navContainer')

    navHome.addEventListener("click", () => {
        document.querySelector('#navContainer').innerText = `Home der Seite`
    })

    navProd.addEventListener("click", () => {
        document.querySelector('#navContainer').innerText = `Products der Seite`
    })

    navCont.addEventListener("click", () => {
        document.querySelector('#navContainer').innerText = `Contact der Seite`
    })
}