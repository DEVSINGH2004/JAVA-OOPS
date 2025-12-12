// ERROR HANDLING IN JS

// SYNTAX ERROR -> ERROR IN LANGUAGE FROMAT

//RUNTIME ERROR -> ERROR IN ARISED DURING EXECUTION PHASE

//LOGICAL ERROR -> WRONG OUTPUT (IT DOES NOT SHOW ANY ERROR)


//TRY-CATCH

try{
    let a = 56;
    console.log(a.name.city);
}
catch(e){
    console.error(e)
    console.error(e.name)
    console.error(e.message)
    console.log(e.stack)
}finally{
    console.log("code in finally block will always run no matter error or no error");
}

//how to throw errors in js

try{
    let a = 56;
    console.log(a.name.city);
}
catch(e){
   console.error(new Error("something went wrong")); 
}


//BULK EMAIL SIMULATION USING PROMISE AND TRY CATCH

let emails  = ["dev@gmail.com","aarush1234@gmail.com","karan@gmail.com"];

function sendEmails(email){
    let time = Math.floor(Math.random()*5);
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        let prob = Math.floor(Math.random()*10);
        if(prob<=5){
            res("Email sent");
        } else {
            rej("Email not sent");
        }
    },time*1000)
    })
    
}

async function sendEmail(emailList){
let responses =  emailList.map((email)=>{
        return sendEmails(email)
        .then((data)=>{
            return data;
        })
        .catch((err)=>{
            return err;
        })
    })

    let ans =  await Promise.all(responses);
    ans.forEach((Status)=>{
        console.log(Status);
    })
}

sendEmail(emails);