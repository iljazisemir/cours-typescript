// Une class qu'on ne peut pas instancier elle sert seulement à être hérité

abstract class Person3 {
    constructor(public name : string) {}
        walk(){
            console.log("Je marche")
        }
    
        abstract updateName (name: string) : void
}

class Child extends Person3 {
    updateName(name: string) {
        this.name = name;
        console.log(this.name)
    }
}

let mario = new Child("Mario")
mario.updateName("Spirou")