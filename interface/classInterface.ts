interface HumanSounds {
    talk(): string;
}

interface AlienSounds {
    telepathy(): string;
}

class Person implements HumanSounds {
    constructor(public name : string, private age : number){}

    talk(){
        return `je m'appelle ${this.name}`;
    }
}

class Alien {
    constructor(readonly name : string, private age : number){}

    telepathy(){
        return `je m'appelle ${this.name}`;
    }
}

let homer = new Person("Homer", 43)
let roger = new Alien("Roger", 1500)

let humanMembers : HumanSounds[] = []
humanMembers.push(homer)
console.log(humanMembers)