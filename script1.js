// JS OOPS - it follows the approach of object and classes

function CreatePlayer(name,level,score,style){
    this.name = name;
    this.level = level;
    this.score = score;
    this.style = style;
    this.write = function(){
        let h1  = document.createElement("h1");
        h1.style.fontSize = "24px";
        h1.style.color = "green";
        h1.innerHTML = `Hello ${this.name}, your level is ${this.level} and your score is ${this.score}`;
        document.body.appendChild(h1);
        console.log(`Hello ${this.name}, your level is ${this.level} and your score is ${this.score}`);
    }
}  // this here is known as constructor function

CreatePlayer.prototype.game = "zero dawn";  // prototype keyword - it is used to add a new property to the constructor function without wasting any memory
// value of this keyword will remain same in all object - it is the object that is created using the constructor function
let newPlayer = new CreatePlayer("Shrey",10,1000,"Close Combat"); 
newPlayer.write();
console.log(typeof newPlayer);

//CLASSES - it is a blueprint for creating objects
// it is a way to create a new object with the same properties and methods

class CreateEnemy{
    constructor(name,level,score,style){
        this.name = name;
        this.level = level;
        this.score = score;
        this.style = style;
    }

    attack(){
        console.log(`${this.name} is attacking with ${this.style} style`);
    }

    defend(){
        console.log(`${this.name} is defending with ${this.style} style`);
    }

    show(){
        let h1 = document.createElement("h1");
        h1.style.color = this.color;
        h1.style.fontSize = "24px";
        h1.innerHTML = `Hello ${this.name}, your level is ${this.level} and your score is ${this.score}`;
        document.body.appendChild(h1);
    }


}

CreateEnemy.prototype.color = "red";

class EliteEnemy extends CreateEnemy{
    constructor(name,level,score,style){
        super(name,level,score,style); // the super keywords is used to call the constructor of the parent class
    }

    absorb(){
        document.querySelectorAll("h1").forEach((e)=>{
            e.remove();
            let h1 = document.createElement("h1");
            h1.style.color = "white";
            h1.style.fontSize = "24px";
            h1.innerHTML = ` ${this.name} has absorbed the lower level enemy`;
            document.body.appendChild(h1);
        })
    }
} // it is a example of classical inheritance - where the child class inherits the properties and methods of the parent class

EliteEnemy.prototype.color = "Purple";

let emeny1 = new CreateEnemy("RAMESH",12,345,"Knife Combat");
emeny1.show();
let emeny2 = new EliteEnemy("SURESH",13,456,"Gun Combat");
emeny2.show();

//Protoype Inheritance - in this child object inherits the properties and methods of the parent object
// it is a way to create a new object with the same properties and methods as the parent object

let weapon = {
    name: "Knife",
    damage: 10,
    range: 100,
}

console.log(weapon);

let weapon2 = Object.create(weapon);
weapon2.name = "Gun";
weapon2.damage = 20;
weapon2.range = 200;
weapon2.cost = 100;

console.log(weapon2);


