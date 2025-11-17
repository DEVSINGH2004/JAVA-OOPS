//ASYNC JS

// CALLBACK - WHEN U GIVE A FUNC TO ANOTHER FUNC AS AN ARGUMENT - IT IS CALLED CALLBACK

function abc(val){
    val();
}

abc(function(){
    console.log("callback inside abc function");
})

//CALLBACK HELL - WHEN U HAVE A LOT OF CALLBACKS NESTED INSIDE EACH OTHER - IT IS CALLED CALLBACK HELL

function getProfile(Name,callback){
    console.log(`Hello ${Name}, your profile is being fetched...`);
    setTimeout(()=>{
        callback({id:12,Name:"DEV SINGH",status:"active"});
    },2000);
}

function getPosts(id,cb){
    console.log(`Hello ${id}, your posts are being fetched...`);
    setTimeout(()=>{
        cb({id:id,posts:["hello","world"]});
    },2000);
}

function getfollowers(id,cb){
    console.log(`Hello ${id}, your followers are being fetched...`);
    setTimeout(()=>{
        cb({id:id,followers:["Shrey","Ankit","Rahul"]});
    },2000);
}

getProfile("Shrey",function(data){
  console.log(data);
  getPosts(data.id,function(posts){
    console.log(posts);
    getfollowers(data.id,function(followers){
        console.log(followers);
    })
  })
})

//Promise

let pr = new Promise(function(res,rej){
    console.log("Promise is being created...");
    setTimeout(()=>{
        let num = Math.floor(Math.random()*10);
        if(num>5){
            res(`Number ${num} is greater than 5`);
        } else {
            rej("Number is less than 5");
        }
    },2000);
})

pr.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

//Async Await - it is used to hold execution until the value is received

async function xyz(){
    try{
        let val = await pr; 
    console.log(val);
    }
    catch(err){
        console.log(err);
    }
    
}

xyz()