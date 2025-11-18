//JS FOR PLACEMENT

//patterns of designs

//module pattern - this is iife (immediately invoked function expression) based where variables and functions are encapsulated in a single unit
//this is used to avoid global scope pollution and we return an object with the variables and functions we want to expose

let paytm = (()=>{
    let balance = 20000;
    function checkBalance(){
        console.log(balance);
    }

    function setBalance(amount){
        balance = amount;
        console.log("Balance set to", balance);
    }

    function withdraw(amount){
        balance -= amount;
        console.log("Withdrawn", amount, "Balance left", balance);
    }

    return {
        checkBalance,
        setBalance,
        withdraw
    }
}
)();

paytm.checkBalance();
paytm.setBalance(10000);
paytm.withdraw(5000);

//Revealing module pattern - this is a variation of module pattern where we return an object with the variables and functions we want to expose
//this is used to avoid global scope pollution and we return an object with the variables and functions we want to expose

let paytm2 = (()=>{
    let balance = 20000;
    function checkBalance(){
        console.log(balance);
    }

    function setBalance(amount){
        balance = amount;
        console.log("Balance set to", balance);
    }

    function withdraw(amount){
        balance -= amount;
        console.log("Withdrawn", amount, "Balance left", balance);
    }

    return {
        check:checkBalance,
        set:setBalance,
        deduct:withdraw
    }
}
)();

paytm2.check();
paytm2.set(10000);
paytm2.deduct(5000);

//FACTORY PATTERN - this is a creational pattern where we create objects using a function
//this is used to create multiple objects of the same type with different values

function createProduct(name,price,stock){
    return{
        checkStock(){
            console.log(`Stock available of ${name} is ${stock}`);
        },

        refill(qty){
            stock += qty;
            console.log(`Refilled ${qty} of ${name}. Total stock now is ${stock}`);
        },

        buy(qty){
            if(stock >= qty){
                stock -= qty;
                console.log(`Bought ${qty} of ${name}. Total stock now is ${stock}`);
            }
            else{
                console.log(`Not enough stock of ${name}`);
            }
        },

        checkPrice(){
            console.log(`Price of ${name} is ${price} per unit`);
        }
    }
}

let samsung = createProduct("samsung",10000,100);
samsung.checkStock();
samsung.refill(50);
samsung.buy(100);
samsung.checkStock();
samsung.checkPrice();

//Observer Pattern - it is a class based pattern in which we have a subject and observers
//the subject is the object that we want to observe and the observers are the objects that want to be notified when the subject changes
//this is used to implement the publish subscribe pattern where we have a subject and multiple observers
//the subject notifies the observers when it changes and the observers update themselves accordingly

class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        console.log(`${user.name} has subscribed to the channel`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
        console.log(`${user.name} has unsubscribed from the channel`);
    }

    notify(message){
        this.subscribers.forEach((subscriber)=>{
            subscriber.update(message);
        })
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(`${this.name} is updated with ${data}`);
    }
}

let user1 = new User("Shrey");
let channel1 = new YoutubeChannel();

channel1.subscribe(user1);
channel1.notify("New video uploaded");
channel1.unsubscribe(user1);

//PERFORMANCE OPTIMIZATION

//DEBOUNCING - it is a technique where we delay the execution of a function until a certain amount of time has passed

let inp = document.getElementById("search");

function debounce(fnc,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fnc();
        },delay)
    }
}

inp.addEventListener("input",debounce(function(){
    console.log(inp.value);
},1000))      



