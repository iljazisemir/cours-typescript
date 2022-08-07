// Type Function générique : (Une seule contrainte: le type doit être une fonction)

// function gift (num : number) {
//     return num + 3
// }

// function displayClg(arg) {
//     console.log(arg)
// }

// let age : Function 
// age n'accepte désormais que les fonctions
// age = gift 
// Ok
// console.log(age(20)) 
// Return 23

// age = displayClg;
// console.log(age(20)) 
// Undefined

// Type Function bien spécifiques: Non seulement c'est une fonction
// mais celle-ci doit êtres très explicite (param:type) => return type RECOMMANDÉE

const gift = (num : number) => {
    return num + 3
}

function displayClg(arg : number) {
    return arg
}

let age : (num : number) => number 
age = gift // Ok
console.log(age(20)) // Return 23

age = displayClg;
console.log(age(20)) // Undefined