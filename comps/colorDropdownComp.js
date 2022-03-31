export const colorDropdownFunc=()=>{
    const deleteBTN = document.querySelector("#deleteBTN")
    const addBTN = document.querySelector("#addBTN")
    const colorSelect = document.querySelector('#colorSelect')
    const addColor = document.querySelector('#addColor')

    deleteBTN.addEventListener("click", () => {
        colorSelect.remove(colorSelect.selectedIndex)
    })

    addBTN.addEventListener("click", () => {
        const option = document.createElement("option")
        option.text = addColor.value
        colorSelect.add(option)
    })
}