//collect form data in JavaScript variables 
var RegForm = document.getElementById("l6");
var signForm = document.getElementById("l7");
var fName = document.getElementById("n1");
var lName = document.getElementById("n2");
var Email = document.getElementById("n3");
var pw1 = document.getElementById("n4");
var pw2 = document.getElementById("n5");
var EmailS = document.getElementById("n8");
var pw1S = document.getElementById("n9");
var userEmail = localStorage.getItem('uEmail');
var userPas = localStorage.getItem('uPas');
/////////////////////////////////////////////////////////////////////////////////////
////////////==================Rergistration====================///////////////////////////
//    check  first name field   
function fname() {
    if (fName.value == "") {
        document.getElementById("s1").innerHTML = "**Fill the first name**";
        return false;
    } else if (!isNaN(fName.value)) {
        document.getElementById("s1").innerHTML = "**Only characters are allowed**";
        return false;
    } else {
        document.getElementById("s1").innerHTML = "";
        return true;
    }
}
//check  Last name field   
function lname() {
    if (lName.value == "") {
        document.getElementById("s2").innerHTML = "**Fill the last name**";
        return false;
    } else if (!isNaN(lName.value)) {
        document.getElementById("s2").innerHTML = "**Only characters are allowed**";
        return false;
    } else {
        document.getElementById("s2").innerHTML = "";
        return true;
    }
}
//check  Email field  
function mail() {
    var emailPattern = /\S+@\S+\.\S+/;
    if (Email.value == "") {
        document.getElementById("s3").innerHTML = "**Fill the Email**";
        return false;
    } else if (emailPattern.test(Email.value) == false) {
        document.getElementById("s3").innerHTML = "**Fill the Email with correct pattern**";
        return false;
    } else {
        document.getElementById("s3").innerHTML = "";
        return true;
    }
}
//check empty password field  
function p1() {
    if (pw1.value == "") {
        document.getElementById("s4").innerHTML = "**Fill the password please!**";
        return false;
    } else if (pw1.value.length < 8) {
        document.getElementById("s4").innerHTML = "**Password length must be atleast 8 Number**";
        return false;
    } else {
        document.getElementById("s4").innerHTML = "";
        return true;
    }
}
//check empty confirm password field  
function p2() {
    if (pw2.value == "") {
        document.getElementById("s5").innerHTML = "**Re-Enter the password please!**";
        return false;
    } else if (pw1.value !== pw2.value) {
        document.getElementById("s5").innerHTML = "**Passwords are not same**";
        return false;
    } else {
        document.getElementById("s5").innerHTML = "";
        return true;
    }
}
RegForm.addEventListener('click', function () {
    fname();
    lname();
    mail();
    p1();
    p2();
    if ((fname() && lname() && mail() && p1() && p2()) == true) {
        localStorage.setItem('Fname', fName.value);
        localStorage.setItem('Lname', lName.value);
        localStorage.setItem('uEmail', Email.value);
        localStorage.setItem('uPas', pw1.value);
        window.location.replace('./signin.html')
        // window.location.href = "/signin.html";
    }
})
/////////////////////////////////////////////////////////////////////////////////////
////////////==================Sign in====================///////////////////////////
function sign() {
    console.log(userEmail, userPas)
    //check  Email field  
    function mailS() {
        if (EmailS.value == "") {
            document.getElementById("s8").innerHTML = "**Fill the Email**";
            return false;
        } else if (EmailS.value !== userEmail) {
            document.getElementById("s8").innerHTML = "**Enter your Email correctly**";
            return false;
        } else {
            document.getElementById("s8").innerHTML = "";
            return true;
        }
    }
    //check empty password field  
    function p1S() {
        if (pw1S.value == "") {
            document.getElementById("s9").innerHTML = "**Fill the password please!**";
            return false;
        } else if (pw1S.value !== userPas) {
            document.getElementById("s9").innerHTML = "**Enter your password correctly**";
            return false;
        } else {
            document.getElementById("s9").innerHTML = "";
            return true;
        }
    }
    mailS();
    p1S();

    if ((mailS() && p1S()) == true) {
        document.getElementById("continar2").style.display = "none";
        document.getElementById("start").style.display = "flex";
    }
}

function start() {
    window.location.replace('./Exam.html')
}