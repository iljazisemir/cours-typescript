
class Mother1 {

    constructor(public name: string, private hair: string, protected eyes: number){}

    private speak() {
        console.log(`Je suis ${this.name} et j'ai les cheveux ${this.hair}`)
    }

    // getter
    getName(){
        return this.name
    }

    // setter
    setHairColor(newColor : string) {
        this.hair = newColor
    }
 }


 class Children1 extends Mother1{
    getData() {
        /*
        Public OK
        Private : Mother (NO)
        Protected : OK
        */

        return this.eyes
    }
 }
 const person = new Mother1("Rhea", "Marron", 2) // Type Mother
 person.setHairColor("Blond")
const person11 = new Children1("Damin", "Rouge", 20)
console.log(person11.getData())
