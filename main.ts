class SweetSweetBasil {
    name: string;
    color: string;
    constructor(){
        // console.log("Hello " + name)
        // this.color = startColor
    }
    getColor(){
        console.log(this.color)
    }
}
let world = new SweetSweetBasil() //"World", "green")
// let basil = new SweetSweetBasil("basil", "bright green")
// basil.getColor()
// world.getColor()

// console.log(basil.color)


class Basil extends SweetSweetBasil {
    constructor(name:string, startColor:string){
        super()
        this.name = name
        this.color = startColor

        
    }
    setNewColor(newColor:string){
        this.color = newColor
        super.getColor()
    }
}

let basil3 = new Basil("basil", "brite green")

basil3.getColor()
basil3.setNewColor("Red")
basil3.getColor()

//Declaring var and let
// github.com/codingforentrepreneurs
// joincfe.com/github
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html


import {MustHaveCoffee} from './src/coffee/getcoffee'


function f(input: boolean){
    let a = 100
    if(input){
        let b = a + 10012	// Chnage 'let b' to 'var b' and return b instead of 'a', you will see undefined on console.
        return b;
    }
    return a;
}

console.log(f(true))
console.log(f(false))

let coffee = new MustHaveCoffee()