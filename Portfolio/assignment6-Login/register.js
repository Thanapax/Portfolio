window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
	form.onsubmit = validateForm;
}

function validateForm() {

    //ref สไลด์ week6 หน้า 14+30
    var person = {
        firstname : document.forms["myRegister"]["firstname"].value,
        lastname : document.forms["myRegister"]["lastname"].value,
        gender : document.forms["myRegister"]["gender"].value,
        bday : document.forms["myRegister"]["bday"].value,
        email : document.forms["myRegister"]["email"].value,
        username : document.forms["myRegister"]["username"].value,
        password : document.forms["myRegister"]["password"][0].value,
        retypePassword : document.forms["myRegister"]["password"][1].value
    };

    if(!person.gender && !person.bday){
        errormsg("ใส่วันเกิดกับเพศ");
        return false;
    } else if(!person.gender){
        errormsg("ยังไม่เลือกเพศ");
        return false;
    }else if(!person.bday){
        errormsg("ใส่วันเกิดด้วย");
        return false;
    }

    if(person.password !== person.retypePassword){
        errormsg("เอาใหม่ พาสเวิร์ดไม่ตรง");
        return false;
    }
}

function errormsg(message){
    var error = document.getElementById("errormsg");
    error.innerHTML = message;
}


//ref สไลด์ week6 หน้า 30
    // var firstname = document.forms["myRegister"]["firstname"];
    // var lastname = document.forms["myRegister"]["lastname"];
    // var gender = document.forms["myRegister"]["gender"];
    // var bday = document.forms["myRegister"]["bday"];
    // var email = document.forms["myRegister"]["email"];
    // var username = document.forms["myRegister"]["username"];
    // var firstname = document.forms["myRegister"]["firstname"];
    // var password = document.forms["myRegister"]["password"][0];
    // var retypePassword = document.forms["myRegister"]["password"][1];



// function pageLoad(){
//     alert("Start");
// 	var form = document.getElementById("myRegister");
//     form.onsubmit = validateForm;
// }
// window.onload = pageLoad;

// function validateForm() {
    // var data = document.forms["myRegister"];
    // data["firstName"] = document.getElementById("firstName").value;
    // data["lastName"] = document.getElementById("lastName").value;
    // data["age"] = document.getElementById("age").value;
    // data["gender"] = document.querySelector('input[name="gender"]:checked').value;
    // data["bday"] = document.getElementById("bday").value;
    // data["email"] = document.getElementById("email").value;
    // data["username"] = document.getElementById("username").value;
    // data["password"] = document.getElementById("password").value;
    // data["retry_password"] = document.getElementById("password").value;
    // var passwordFields = document.getElementsByName("password");
    // data["password"] = passwordFields[0].value;
    // data["retry_password"] = passwordFields[1].value;
    // var firstName = document.getElementById("firstName").value;
    // var lastName = document.getElementById("lastName").value;
    // var gender = document.querySelector('input[name="gender"]:checked');
    // var bday = document.getElementById("bday").value;
    // var email = document.getElementById("email").value;
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password")[0].value;
    // var retry_password = document.getElementById("password")[1].value;

    // var passwordFields = document.getElementsByName("password");
    // var password = passwordFields[0].value;
    // var retry_password = passwordFields[1].value;
//     var errorMsg = "";

//     if(password[0] !== password[1]){
//         errorMsg = "Passwords do not match.";
//     } 

//     if(errorMsg){
//         document.getElementById("errormsg").textContent = errorMsg;
//         return false;
//     }
// }

// function errormsg(message){
//     var error = document.getElementById("errormsg");
//     error.innerHTML = message;
// }

/*function validateForm() {
    //var form = document.forms["myRegister"];
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var bday = document.getElementById("bday").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    // var passwordjingjing = document.getElementsByName("password");
    // var password = passwordjingjing[0].value;
    // var retry_password = passwordjingjing[1].value;
    var password = document.getElementById("password").value;
    var retry_password = document.getElementById("password").value;
    

    if(password !== retry_password){
        document.getElementById("errormsg").innerHTML = "Passwords do not match!";
        return false;
    } 
}*/

// function errormsg(message){
//     var error = document.getElementById("errormsg");
//     error.innerHTML = message;
// }