// console.log(document.cookie)

// document.cookie="name=ANs1838"
// document.cookie="name=ANs1838"
let key=prompt("enter your key")
let value=prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
