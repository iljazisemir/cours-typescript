// Permet de nommer des ensembles de valeurs d’une façon numérique.

enum Color {
    Red = 2,
    Green = 1,
    Blue
 }
 
 let c = Color.Green
 let colorName : string = Color[1]
 
 console.log(c)
 console.log(colorName)