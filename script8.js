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