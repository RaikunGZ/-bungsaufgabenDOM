export const randomImgFunc = () => {
    const showImgBTN = document.querySelector('#showImgBTN')
    const imgContainer = document.querySelector('#imgContainer')
    const imgCollection = ["img-1.jpeg", "img-2.jpeg", "img-3.jpeg"]

    showImgBTN.addEventListener("click", () => {
        const count = Math.floor(Math.random() * imgCollection.length)
        imgContainer.innerHTML = `<img src="./images/${imgCollection[count]}"/>`
    })
}