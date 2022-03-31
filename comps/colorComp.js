export const colorFunc =()=>{
    const inputChange = document.querySelector('#inputChange')
    const pBackground = document.querySelector('#pBack')

    inputChange.addEventListener("click", () => {
        pBackground.style.backgroundColor = 'red'
    })
}