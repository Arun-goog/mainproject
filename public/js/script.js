
let signinEmailIndex = 0;
let signinPasswordIndex = 0;


let signupUsernameIndex = 0;
let signupPhonenumberIndex = 0;
let signupEmailIndex = 0;
let signupPasswordIndex = 0;
let signupPasswordMatch = 0;




// sign in validation 

function email_validate_signin(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
        signinEmailIndex = 0;
        usernameCorrect.style.display ="none";
        usernameWrong.style.display   = "inline";
        
            }
    else
    {
        signinEmailIndex = 1;
        usernameCorrect.style.display ="inline";
        usernameWrong.style.display   = "none";
        
    }
}


function signinPasswordcheck(inputtxt) 
{ 
    console.log(inputtxt.value);
    var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(inputtxt.value.match(passw)) { 
        signinPasswordIndex = 1;
        signinWrong.style.display ="none";
        signinCorrect.style.display   = "inline";
        
       
    }else{ 
        signinPasswordIndex = 0;
        signinCorrect.style.display ="none";
        signinWrong.style.display   = "inline";
        
    }
}


function submitSignin(){

    if(signinEmailIndex === 1 && signinPasswordIndex === 1){ 

        alert("Login success");
        return true ;
    }else {

        alert("Login failed");
        return false ;
    }


}



// sign up validation 

function Validate(txt) {
    console.log(txt.value);
    if(txt.value === " " || txt.value === null){
        signupUsernameIndex = 0;
        upusernameCorrect.style.display ="none";
        upusernameWrong.style.display   = "inline";
    }else{
        signupUsernameIndex = 1;
        upusernameWrong.style.display ="none";
        upusernameCorrect.style.display   = "inline";
    }
}

function email_validate_signup(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
        signupEmailIndex = 0;
        emailCorrect.style.display ="none";
        emailWrong.style.display   = "inline";

        
    }
    else
    {
        signupEmailIndex = 1;
        emailWrong.style.display ="none";
        emailCorrect.style.display   = "inline";
       
    }
}


function phonenumberValidate(inputtxt)
{

    console.log(inputtxt.value);
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
        signupPhonenumberIndex = 1;
        phoneWrong.style.display ="none";
        phoneCorrect.style.display   = "inline";
        
	 }
   else
     {
        signupPhonenumberIndex = 0;
        phoneCorrect.style.display ="none";
        phoneWrong.style.display   = "inline";
        
     }
}


function signupPasswordcheck01(inputtxt) 
{ 
    console.log(inputtxt.value);
    var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(inputtxt.value.match(passw)) { 
        signupPasswordIndex = 1;
        cpasswordWrong.style.display ="none";
        cpasswordCorrect.style.display   = "inline";  
        
    }else{ 
        signupPasswordIndex = 0;
        cpasswordCorrect.style.display ="none";
        cpasswordWrong.style.display   = "inline";
        
    }
}


function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('password01');
    var pass2 = document.getElementById('password02');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    //var goodColor = "#66cc66";
    //var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(password01.value == password02.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        //password02.style.backgroundColor = goodColor;
        //rpassword.style.backgroundcolor = goodColor;
        signupPasswordMatch = 1;
        alert("password match")
        //message.innerHTML = "Passwords Match"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        //password02.style.backgroundColor = badColor;
        //rpassword.style.backgroundcolor = badColor;
        signupPasswordMatch = 0;
        alert("password do not match")
        //message.innerHTML = "Passwords Do Not Match!"
    }
}

function signupPasswordcheck02(inputtxt) 
{ 
    console.log(inputtxt.value);
    var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(inputtxt.value.match(passw)) { 
        signupPasswordIndex = 1;
        rpasswordWrong.style.display ="none";
        rpasswordCorrect.style.display   = "inline";  
        
    }else{ 
        signupPasswordIndex = 0;
        rpasswordCorrect.style.display ="none";
        rpasswordWrong.style.display   = "inline";
        
    }

    checkPass();
}


function submitSignup(){
    
if (signupUsernameIndex === 1 && signupPhonenumberIndex === 1 && signupEmailIndex === 1 && signupPasswordIndex === 1 && signupPasswordMatch === 1){
    
    alert("Signup success");
    
    return true ;
}else{
    alert("Sign up failed");
    return false;
}


}

