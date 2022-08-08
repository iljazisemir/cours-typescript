// Le type Never représente le type de valeurs qui ne se produisent jamais

type AcceptedValues = string | number | boolean

function format(value : AcceptedValues) {
    if (typeof value === "string") {
        return value.length
    } else if (typeof value === "number") {
        return value.toString()
    } else {
       //  const verifyCases : never = value TS error
    }
}

format(true)

// Error Function

function throwError(errMsg) : never {
    throw new Error(errMsg) // Stop
}

// Infinite Loop

const sayHello = function (textMsg : string) {
    while (true) {
        console.log(textMsg)
    }
}

sayHello("Hello")