function validate() {
    var up = /^[A-Za-z]+$/;
    var np = /[6-9]{1}[0-9]{9}$/;
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pn").value;
    var password = document.getElementById("psd").value;
    var cpassword = document.getElementById("cpsd").value;

    var a = true

    // Validation checks for the "User Name" field
    if (uname == "") {
        document.getElementById("msg1").innerHTML = "Enter the Username.";
        a=false
    }
    if (!uname.match(up)) {
        document.getElementById("msg1").innerHTML = "Username should contain alphabets only";
        a=false
    }
    if (uname.length < 3) {
        document.getElementById("msg1").innerHTML = "Username should contain min 3 characters";
        a=false
    }
    if (uname.length > 8) {
        document.getElementById("msg1").innerHTML = "Username should contain max 8 characters";
        a=false
    }

    // Validation checks for the "Email" field
    if (email == "") {
        document.getElementById("msg2").innerHTML = "Enter the Email.";
        a=false
    }

    // Validation checks for the "Phone Number" field
    if (phone == "") {
        document.getElementById("msg3").innerHTML = "Enter the Phone Number.";
        a=false
    }
    if (!phone.match(np)) {
        document.getElementById("msg3").innerHTML = "Enter the valid PhoneNumber.";
        a=false
    }

    // Validation checks for the "Password" field
    if (password == "") {
        document.getElementById("msg4").innerHTML = "Enter the Password.";
        a=false
    }
    if (password.length < 8) {
        document.getElementById("msg4").innerHTML = "Password should contain 8 characters.";
        a=false
    }

    // Validation checks for the "Confirm Password" field
    if (password != cpassword) {
        document.getElementById("msg5").innerHTML = "Password and Confirm Password must match.";
        a=false
    }

    // If all validation checks pass for all fields, return true
    return a
    
}
