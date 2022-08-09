// Generic détecte et gere différents types, étant pas spécifique à un type,
// il peut être réutilisable 
//en comparaison à any qui lui accepte tous les types mais ne les detecte pas

function identity<T>(arg : T) : T {
    return arg
}

let output1 = identity("Hello") // string
let output2 = identity(200) // number
// OR
let output3 = identity<string>("Hello") // string
let output4 = identity<number>(200) // string


// Object
function identity2<T extends {title : string}>(arg : T) : T {
    return arg
}

let output5 = identity2({title : "Hello World"})

const objOne = { name : "Bart"}
const objTwo = { age : 8}

function objInArray<N extends {name: string}, A extends {age: number}>(n : N, a : A){
    let data : Array<object> = []
    data.push(n,a)
    return data
}

const user = objInArray(objOne,objTwo)