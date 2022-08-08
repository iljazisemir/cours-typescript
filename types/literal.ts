// Indique une valeur qui ne change jamais

type GetResult  = "getStringValue" | "getSquare"

function total(arg1: number, arg2: number, totalVersion : GetResult) {
    let result 
    if (totalVersion === "getStringValue") {
        result = arg1.toString() + arg2.toString()
    } else if (totalVersion === "getSquare") {
        const val = arg1 + arg2
        result = val ** 2
    } else {
        result = arg1 + arg2
    }

    return result
}

const totalOne = total(20,10,"getStringValue")
console.log(totalOne)

const totalTwo = total(20,10,"getSquare")
console.log(totalTwo)