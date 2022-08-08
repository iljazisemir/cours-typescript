class Mother {
    name :string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair=h;
        this.eyes= e    
    }

    speak() {
        console.log(`Je suis ${this.name} et j'ai les cheveux ${this.hair}`)
    }
 }

 class Children extends Mother {
    speak () {
        console.log(`I am ${this.name} ans I have ${this.hair} hair.`)
    }

    speakMothLang() {
        super.speak()
    }
 }

 class Random {
    name :string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair=h;
        this.eyes= e    
    }
 }

 const person1 = new Mother("Rhea", "Marron", 2) // Type Mother
 const person2 : Mother = new Children("Damin", "Brown", 2) // Typer Children
// const person3 : Mother = new Random("Tom", "Blond", 2) // Il faut obligatoirement la function speak