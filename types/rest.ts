let colors = function(arg1: string, ...restOfColors: string[]) {
    console.log(arg1)
    console.log(restOfColors)
}

colors("List 1","green", "red", "blue")


function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}

let buildNameFun : (fname :string, ...rest : string[]) => string = buildName