type NumStr = number | string

let test : NumStr = 20
test = "Hello"

type ObjIdUser = {
    id : number,
    userName: NumStr
}

let User : ObjIdUser = {
    id : 2022,
    userName : "Pierre"
}