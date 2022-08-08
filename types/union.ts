function concatenate(arg1: number | string, arg2: number | string) {
    let result 
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2
    } else {
        result = arg1.toString() + arg2.toString()
    }

    return result
}

console.log(concatenate(10,20))
console.log(concatenate('Hello','World'))
console.log(concatenate("Hello",20))