// AS
let someValue : unknown = "This is a string"

let strLengthAs = (someValue as string).length
console.log(strLengthAs)

const firstNameAs = document.getElementById("firstName") as HTMLInputElement
console.log(typeof firstNameAs.value)

// Angle-Braket

let strLengthAngleBraket = (<string>someValue).length
console.log(strLengthAngleBraket)

const firstNameBraket = <HTMLInputElement>document.getElementById("firstName")
console.log(typeof firstNameBraket.value)