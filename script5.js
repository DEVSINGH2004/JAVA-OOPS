//JS OOPs Practice 

let laptop = {
    brand:"HP",
    price:200000,
    start:function(){
        console.log("Laptop started");
    },
    price_increased:function(){
        this.price = this.price + 10000;
    }
    
}

//now if we gave to make 100 laptops then we have to write 100 times laptop object
//so we use classes and objects 

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    showDetails(){
        console.log(this.name,this.salary);
    }
}


let emp1 = new Employee("Shreyans",100000);
let emp2 = new Employee("Rahul",200000);

emp1.showDetails();
emp2.showDetails();
//because of class and objects we can create multiple objects of same attributes


class BankAccount{
    constructor(accountHolderName,balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance = this.balance + amount;
    }
}

let acc1 = new BankAccount("Shreyans",100000);
let acc2 = new BankAccount("Rahul",200000);

acc1.deposit(1);

console.log(acc1.balance);

let person = {
    userName : "DEV SINGH",
    printName:function(){
        console.log(this.userName);
    }
}

let Name = person.printName();
console.log(Name);

//Name gives undefined because it is not returning anything

class Vehicle{
    constructor(type,wheels){
        this.type = type;
        this.wheels = wheels;
    }
}

Vehicle.prototype.describeVehicle = function(){
            console.log(this.type,this.wheels);
        }

let car = new Vehicle("car",4);
let bike = new Vehicle("bike",2);
car.describeVehicle();
bike.describeVehicle();
console.log(car,bike);

//protoype saves memory by allowing multiple objects to share the same method

function showBrand(){
    console.log(this.brand);
}

let brand1 = {
    brand:"Apple"
}

let brand2 = {
    brand:"Samsung"
}

showBrand.call(brand1);

showBrand.call(brand2);

function introduce(city,role){
    console.log(this.userName,city,role);
}


let people = {
    name:"dev",
    userName:"dev"
}

introduce.call(people,"Delhi","developer");


function greet(){
    console.log("hello",this.name);
}

let greetBind = greet.bind(people); // bind is used to bind the object to the function and it returns a new function

greetBind();
