interface User<T> {
    id : number,
    data : T
}

const userData : User<string[]> = {
    id : 24,
    data : ["Mario", "Moderator"]
}

const userData2 : User<object> = {
    id : 24,
    data : {name :"Mario", role : "Moderator"}
}

