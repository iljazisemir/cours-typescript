// Définit les contraintes d'un objet (proprietes, methodes)

interface Person {
    name : string;
    eyes: number;
    speak(a : string) : string // type : string + return string
}

let helene : Person

helene = {
    name : "Helene",
    eyes: 2,
    speak(a :string) : string {
        return a + ' ' + this.name
    }
}
const talkingPerson = (a : Person, b: string) => {
    return a.speak(b)
}

const result = talkingPerson(helene, "Je m'appelle")
console.log(result)