// Static permet d'acceder les propriétés et les méthodes directement avec le nom de la class
// Pas possible dans le constructor

class Person1 {
    static readonly age : number = 30

    constructor(private name : string) {}

    walk() {
        console.log("je marche")
    }

    static talk() {
        console.log("J'ai " + this.age)
        // walk() X
    }
}

const person3 = new Person1("toto")
Person1.talk()