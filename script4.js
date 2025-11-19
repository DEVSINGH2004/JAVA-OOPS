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

//Throttling - executes a func at a fixed interval of time 

function throttle(fnc,delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            fnc(...args);
            timer = now;
        }
    }
}

// inp.addEventListener("input",throttle(function(){
//     console.log("throttling");
// },1000))      


//LAZY LOADING - it is a technique where we load the resources only when they are needed
//this is used to improve the performance of the application by loading the resources only when they are needed
//this is implemented using the IntersectionObserver API

let img = document.querySelectorAll("img");

console.log(img);

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.style.opacity = 1;
            observer.unobserve(img);
        }
    })
},{
    root:null,
    threshold:0.1
})

img.forEach((img)=>{
    observer.observe(img);
})


//CODE SPLITTING - IT IMPORTS THE SCRIPT ONLY WHEN IT IS NEEDED

let b = document.querySelector(".btn");

b.addEventListener("click",async function(){
    let heavy = await import("./heavy.js");
    heavy.heavy();
})

//DOCUMENT FRAGMENT - IT IS USED TO CREATE A TEMPORARY DOM ELEMENT THAT CAN BE USED TO STORE THE ELEMENTS BEFORE APPENDING THEM TO THE DOM
//IT IS USED TO AVOID THE RE-FLOW AND RE-PAINTS OF THE DOM

let ul = document.querySelector("ul");
let fragment = document.createDocumentFragment();

for(let i=1;i<11;i++){
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
        // ul.appendChild(li); // due to this sudden appendChild, the browser has to reflow and repaint the DOM
        //to avoid this, we use document fragment
        fragment.appendChild(li);
}

ul.appendChild(fragment); //much faster and safer than appending each element individually

//ARCHITECTURE THINKING -  BASICALLY SEPARATION OF CONCERNS (SEPARATING THE LOGICAL AND DOM PART)

//EXAMPLE

let b2 = document.querySelector(".btn1");
let ul1 = document.querySelector(".ul-soc");

function addRandom(){
    return Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
}

b2.addEventListener("click",function(){
        let ans = addRandom();
        console.log(ans);
        let li = document.createElement("li");
        
        li.textContent = ans;
        ul1.append(li);
        console.log(ul1);
})




