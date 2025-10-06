window.onload = pageLoad;

function pageLoad(){
    document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    
    var firstName = form["firstname"].value;
    var lastName = form["lastname"].value;
    var gender = form["gender"].value;
    var bDay = form["bday"].value;
    var email = form["email"].value;
    var userName = form["username"].value;
    var password = form["password"][0].value;
    var rePassword = form["password"][1].value;

    if (password !== rePassword) {
        document.getElementById("errormsg").innerHTML = "Password does not match. Pls try again.";
        return false;
    }

    if (!firstName) {
        document.getElementById("errormsg").innerHTML = "Pls enter first name.";
        return false;
    } 
    else if (!lastName) {
        document.getElementById("errormsg").innerHTML = "Pls enter last name.";
        return false;
    }
    else if (!gender) {
        document.getElementById("errormsg").innerHTML = "Pls enter gender.";
        return false;
    }
    else if (!bDay) {
        document.getElementById("errormsg").innerHTML = "Pls enter birthday.";
        return false;
    }
    else if (!email) {
        document.getElementById("errormsg").innerHTML = "Pls enter email.";
        return false;
    }
    else if (!userName) {
        document.getElementById("errormsg").innerHTML = "Pls enter username.";
        return false;
    }
    else if (!password) {
        document.getElementById("errormsg").innerHTML = "Pls enter password.";
        return false;
    }

    return true;
}