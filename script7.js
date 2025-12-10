//Promises Async Await setTimeout setInterval

let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise resolved")
    },2000)
})

p1.then(()=>{
    console.log("Promise resolved");
})
.catch(()=>{
    console.log("Promise rejected");
})


//ADVANCED USE CASE 

function getNum(){
    return new Promise((res,rej)=>{
        let num = Math.floor(Math.random()*11);
        if(num%2==0){
            res(num)
        } else {
            rej(num);
        }
    })
}

async function getResult(){
    let v = await getNum();
    console.log(v);
}

getResult();
