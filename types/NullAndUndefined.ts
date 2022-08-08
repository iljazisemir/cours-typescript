// let value : number;
// console.log(value) // undefined

let value1 : undefined
console.log(value1) // undefined

let value2 : null = null;
console.log(value2) // null

let value3 : unknown | any
value3 = null // TS ok
value3 = undefined // TS OK