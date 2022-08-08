// Optional

function buildNameOptional(fistName : string, lastName?: string) {
    return lastName ? fistName + " " + lastName : fistName
}

console.log(buildNameOptional("Bob"))
console.log(buildNameOptional("Bob", "Adams"))

// Default 

function buildNameDefault(fistName : string, lastName = "Smith") {
    return fistName + " " + lastName 
}

console.log(buildNameDefault("Bob"))
console.log(buildNameDefault("Bob", "Adams"))