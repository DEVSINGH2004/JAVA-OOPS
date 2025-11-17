//HTTP AND API - it is used to fetch data from the server
// it is used to send data to the server
// it is used to update data on the server
// it is used to delete data from the server

//FETCH -  IT IS A PROMISE BASED MTHOD IN JS USED TO FETCH DATA FROM SERVER

function generateUsers(){
    
    fetch("https://randomuser.me/api/?results=5")
.then((rawdata)=>{
    return rawdata.json();
})
.then((jsondata)=>{
    document.querySelector(".card-container").innerHTML ="";
    jsondata.results.forEach((user)=>{
        
        //creating a card for each user
        let card = document.createElement("div");
        card.classList.add("card");

        //adding image to the card
        let img = document.createElement("img");
        img.classList.add("profile-pic")
        img.src = user.picture.large;
        card.appendChild(img);

        //adding name to the card
        let name = document.createElement("h2");
        name.classList.add("name")
        name.innerHTML = `${user.name.first} ${user.name.last}`;
        card.appendChild(name);

        //adding email to the card
        let email = document.createElement("p");
        email.classList.add("email")
        email.innerHTML = user.email;
        card.appendChild(email);

        //adding card to the body
        document.querySelector(".card-container").appendChild(card);
    })
})

.catch((err)=>{
    console.log(err);
})
}

generateUsers();

function refresh(){
    document.querySelector(".btn").addEventListener("click",()=>{
        generateUsers();
    })
}

refresh();