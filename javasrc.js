const form=document.getElementById("form");
const uname=document.getElementById("username");
const email=document.getElementById("email");
const pass=document.getElementById("password");
const cpass=document.getElementById("cpassword");

form.addEventListener("submit",function(e){
    e.preventDefault();
   validateinputs();
})


const SetError=(element,message)=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText=message;
    inputcontrol.classList.add("error");
    inputcontrol.classList.remove("success");

}

const Setsuccess=(element,message)=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText="";
    inputcontrol.classList.add("success");
    inputcontrol.classList.remove("error");

}

const isvalid=email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());

}

const validateinputs = () =>{
    const unamevalue=uname.value.trim();
    const emailvalue=email.value.trim();
    const passvalue=pass.value.trim();
    const cpassvalue=cpass.value.trim();
    
    if(unamevalue ==""){
        SetError(username,"username is required");
    }
    else{
    Setsuccess(username);
    }

    if(emailvalue ==""){
        SetError(email,"email is required");
    }else if(!isvalid(emailvalue)){
        SetError(email,"Provide a valid email address");
    }
    else{
        Setsuccess(email);
    }

    if(passvalue==""){
        SetError(pass,"password is required");
    }
    else if(passvalue.length < 8){
        SetError(pass,"password must be atleast 8 character");
    }
    else{
        Setsuccess(pass);
    }

    if(cpassvalue ==""){
        SetError(cpass,"password is required");
    }
    else if(passvalue !== cpassvalue){
        SetError(cpass,"Password doesn't match");
    }
    else{
        Setsuccess(cpass);
    }

};

