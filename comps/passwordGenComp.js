export const passwordGenFunc = () =>{
    const pwGenOut = document.querySelector('#pwGenOut')
    const generateBTN = document.querySelector('#generateBTN')
    const pwMaxLength = 20
    const charArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_/%()=?$§!"

    generateBTN.addEventListener("click", () => {
        let i = Math.floor(Math.random() * 5)
        let password = ""
        const generatePassword = (i) => {
            for (i; i < pwMaxLength; i++) {
                let char = Math.floor(Math.random() * charArr.length)
                password += charArr[char]
            }
        }
        generatePassword(i)
        document.querySelector('#pwGenOut').innerHTML = password
    })
}