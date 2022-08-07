// Définit un type comme étant inconnu. Accepte tous les types
// Avec Unnown on refuse avant vérification ce qui n'est pas le cas avec Any

let inputData : unknown
inputData = 20
console.log(typeof inputData)

let inputAge : number
if (typeof inputData ==="number"){
    inputAge = inputData
    console.log(typeof inputAge)
}