// Impossible de modifier un readonly en dehors d'un constructor

class Car {
    constructor(readonly color :string, public gears : number) {}
}

let ford = new Car ("White", 4)