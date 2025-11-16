//ADVANCED JS

//1. SCOPES - GLOBAL , FUNCTIONAL , BLOCK

let a = 10; // global scoped var
console.log(a);

function abcd(){
    let a = 20; // functional scoped var
    console.log(a);
}
abcd();

{
    let a = 30; // block scoped var
    console.log(a);
}

if(true){
    let a = 40; // this is also a block scoped var
    console.log(a);
}

//execution context - it is a temp space for your js code in which there are two phases 
//1. memory allocation phase - where all the variables and functions are stored
//2. code execution phase - where the code is executed line by line
//3. execution context is of types such as global execution context and functional execution context

// js follows lexical scoping which means that the scope  is determined by its position in the code for ex: 

let b = 12;

function xyz(){
    console.log(`b in xyz is ${b}`); // it will print 12 due to lexical scoping , as it is defined in the global scope
}

function pqr(){
    let b = 24;
    console.log(`b in pqr is ${b}`);
    xyz();
}
pqr();

// dynamic scoping - it is a type of scoping in which the scope of a variable is determined at runtime rather than at compile time

//closures - in which there is a parent func returning child func and child func is dependent on parent to completes it execution for ex:

function parent(){
    let a = 10;
    return function child(){
        console.log(a);
    }
    
}

let childFunc = parent();
console.log(childFunc);
childFunc();

//whenever we run closure first it gives a function and then we can call that function
// and it will have access to the variables of parent func

// js uses backlink [[environment]] to access the variables of parent func in child func
// child func has access to the variables of parent func even after the parent func has returned

//private counter

function privateCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = privateCounter();
counter();
counter();
counter();


let counter2 = privateCounter(); // it will start with 1 as new temp space has been alloted
counter2();
counter2();
counter2();

//Encapsulation - it is a mechanism of bundling the data and methods that operate on that data into a single unit
// it helps in hiding the internal details of an object and only exposing the necessary functionality

//example of encapsulation : privateClicker

function privateClicker(){
    let count = 0;
    return function(){
        if(count<5){
            count++;
            console.log(`clicker is clicked ${count} times`);
        } else {
            console.error("clicker is disabled,try after some time.");
        }
        
    }
}

let clicker = privateClicker();
clicker();
clicker();
clicker();
clicker();
clicker();


// making a functional toaster

function createToast(config){
    return function(str){
        let div = document.createElement("div");
        div.id = "toaster";
        div.textContent = str;
        let body = document.querySelector("body");
        body.appendChild(div);
        setInterval(()=>{
            div.remove();
        },config.duration*1000);
    }
}

let toast = createToast({
    duration : 2,
});

toast("your game download has started");

setTimeout(()=>{
    toast("your game download has completed");
},3000);

//this keyword - it is a special keyword in js which refers to the object that is currently executing the function
// it is dynamic in nature and depends on how the function is called

console.log(this); // it will print window object in browser

//this - func scoped

function printThis(){
    console.log(this);
}

printThis(); // it will print window object in browser

// this - method (func in an object) scoped

let obj = {
    name : "Dev Singh",
    age : 20,
    printName : function(){
        console.log(this.name);
    }
}

obj.printName(); // it will print the obj object as it is called by the obj object

//this - event handlers

document.querySelector("h1").addEventListener("click",function(){
    console.log(this);
})

//global - window
//func - window
//func in object (method) - window
//func arrow - window
//func inside func - window
//class - blank obj
//event handler - element


//CALL , APPLY , BIND

let user = {
    name : "Dev Singh",
    age : 20,
}

function wasd(a,b,c){
    console.log(this.name,a,b,c); // now this will print Dev Singh instead of window object
}

//CALL - it is used to call a function with a specified this value and arguments provided individually
wasd.call(user,1,2,3);

//APPLY - it is used to call a function with a specified this value and arguments provided as an array, in this u can only pass arguments as an array
wasd.apply(user,[1,2,3]);

//BIND - it is used to create a new function with a specified this value and arguments provided individually
// it does not call the function immediately, instead it returns a new function which can be called later

let newWasd = wasd.bind(user,1,2,3);
newWasd();


//User Cards - Mini Project it will use this , binding concepts

let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users : [],
    init : function(){
        form.addEventListener("submit",this.handleSubmit.bind(this));
    },
   handleSubmit : function(e){
    e.preventDefault();
        this.addUser();
   },
   addUser : function(){
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
   },
   renderUi : function(){
        document.querySelector(".users").innerHTML = "";
        this.users.forEach(function(user){
           let card =  document.createElement("div");
           card.className = "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";
           // Image
           let img = document.createElement("img");
           img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
        img.src = user.photo;
        card.appendChild(img);

        //Username
        let un = document.createElement("h2");
        un.className = "text-2xl font-bold mb-1 text-blue-700";
        un.textContent = user.username;
        card.appendChild(un);   

        //Role
        let role = document.createElement("p");
        role.className = "text-purple-500 mb-2 font-medium";
        role.textContent = user.role;
        card.appendChild(role);

        //Description
        let desc = document.createElement("p");
        desc.className = "text-gray-600 text-center";
        desc.textContent = user.bio;
        card.appendChild(desc);

        //Append the card to the container
            document.querySelector(".users").appendChild(card);
        })
   }
    
}

userManager.init();




