function registerUser(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var mob=document.getElementById("mob").value;
    var isSessionSave=document.getElementById("isSessionSave").value;

    console.log(uname)
    console.log(pass)
    console.log(mob)
    console.log(isSessionSave)

    if(typeof(Storage) !== 'undefined'){
        localStorage.setItem("username",uname);
        localStorage.setItem("pass",pass);
        localStorage.setItem("mob",mob);
        if(isSessionSave == 'on'){
            sessionStorage.setItem("username",uname);
            sessionStorage.setItem("pass",pass);
            sessionStorage.setItem("mob",mob);
        }
        window.location.href = "login-page.html";

    }else{
        document.getElementById("msg").innerHTML="Storage Facility not supported by your Browser."
    }
}


function loginUser(){
    var uname=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    var puname=localStorage.getItem("username",uname);
    var ppass=localStorage.getItem("pass",pass);

    if(uname == puname){
        if(ppass == pass){
            window.location.href= "welcome.html";
        } 
        else{
            document.getElementById("msg").innerHTML="wrong password." 
        }
    }else{
        document.getElementById("msg").innerHTML="wrong Username." 
    }
}

function logoutUser(){
    window.location.href = "login-page.html";
}