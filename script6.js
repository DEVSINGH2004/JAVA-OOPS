//CALLBACKS PRACTICE

//SECTION - 1 WARMING UP

function afterDelay(time,cb){
    setTimeout(cb,time);
}
afterDelay(2000,()=>{
    console.log("callback executed")
})

//SECTION 2 - INTERMEDIATE

function getUser(username,cb){
    setTimeout(function(){
        cb({id:1,username:username},1000)
    })
}

function getUserposts(userid,cb){
    setTimeout(function(){
        cb({posts:["post1","post2","post3"]});
    },1000)
}


getUser("dev singh",function(data){
    console.log(data.username)
    getUserposts(data.id,function(data){
        console.log(data);
    });
})


//Excercise 3 - Advanced

function loginUser(id,name,password,cb){
    setTimeout(cb({user:{id:id,name:name,password:password}}),1000);
}

function getPermission(userid,cb){
    setTimeout(cb({permisssions:["read","write","share"]}),1000);
}

function loadDashboard(permissions,cb){
    setTimeout(cb("dashboard loaded"),1000);
}

loginUser(1,"dev","123",function(data){
    console.log(data);
    getPermission(data.user.id,function(data){
        console.log(data);
        loadDashboard(data.permissions,function(data){
            console.log(data);
        })
    })
});
