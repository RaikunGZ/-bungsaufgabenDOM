export const printFunc =()=>{
    const formButton = document.querySelector('#printButton')
    const inputPrint = document.querySelector('#firstname')
    const inputPrint2 = document.querySelector('#lastname')

    formButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('#printOut').innerHTML = inputPrint.value + " " + inputPrint2.value //output leer ... type string
    })
}