export const attributeConsoleFunc =()=>{
    const linkAttributes = document.querySelector('a')

    linkAttributes.addEventListener("click", (e) => {
        e.preventDefault();
        const getParams = (a) => {
            const result = a.href + a.rel + a.target + a.type
            return result
        }
        console.log(getParams(linkAttributes))
    })
}