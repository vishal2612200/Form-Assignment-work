var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        document.getElementById("email").focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus();
        return false;
}
}
/*
To check a password 
-   between 8 to 15 characters
-   which contain at least one lowercase letter
-   one uppercase letter
-   one numeric digit
-   and one special character
*/
function CheckPassword(inputtxt) 
{ 
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(inputtxt.value.match(passw)) 
    { 
        alert('Correct, try another...')
        return true;
    }
    else
    { 
        alert('Wrong...!')
        return false;
    }
}

// Function to valdate empty Field (Required Functionality Using Javascript)
function validateForm(email,password) {
    
    if (email == "" || password == "") {
      alert("Empty Field must be filled out");
      return false;
    }
  } 


function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Call function to validate empty field
    validateForm(email,password);
    // Validate Email using function
    ValidateEmail(email);

    // Validate Password using function
    CheckPassword(password);

    if ( email == "abc@gmail.com" && password == "abc#123"){
        alert ("Login successfully");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
    }
    }
}