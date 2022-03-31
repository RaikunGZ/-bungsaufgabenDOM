export const loginFunc = () => {
    const loginName = document.querySelector('#login')
    const loginPassword = document.querySelector('#password')
    const loginBTN = document.querySelector('#loginBTN')
    const loginDataStored = [
        {
            name: "Martin",
            password: "1234",
        },
        {
            name: "Dennis",
            password: "4321",
        }
    ]

    loginBTN.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(loginName.value)
        const loginData = loginDataStored.find((user) => {
            return user.name === loginName.value
        })

        console.log("loginData", loginData)

        if (loginName.value === loginData.name && loginPassword.value === loginData.password) {
            document.querySelector('#loginFormContainer').innerHTML = "Login Success!"

        } else if (loginName.value !== loginData.name && loginPassword.value === loginData.password) {
            document.querySelector('#loginFormControll').innerHTML = "Login Failed! Username isn't correct."

        } else if (loginName.value === loginData.name && loginPassword.value !== loginData.password) {
            document.querySelector('#loginFormControll').innerHTML = "Login Failed! Password isn't correct."

        } else {
            document.querySelector('#loginFormControll').innerHTML = "Login Failed!"
        }
    })
}