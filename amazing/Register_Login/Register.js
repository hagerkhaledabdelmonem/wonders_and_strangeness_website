function validate() {
    var Username = document.getElementById('username').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('pass').value;
    var userRGEX = /^[a-zA-Z]{2,}\d*$/i;
    var emailRGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var passRGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var userResult = userRGEX.test(Username);
    var emailResult = emailRGEX.test(Email);
    var passResult = passRGEX.test(Password);

    if (userResult == false) {
        alert('Please enter a valid Username');
        return false;
    }

    if (emailResult == false) {
        alert('Please enter a valid Email');
        return false;
    }

    if (passResult == false) {
        alert('Please enter a valid Password');
        return false;
    }

    return true;

}

function store() {

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    //JSON.parse() to convert the string into a JavaScript object

    if (user_records.some((v) => { return v.email == email })) {
        alert("Duplicate Data");
    }
    else {
        user_records.push({  //The push() method adds new items to the end of an array
            'username': username,
            'email': email,
            'pass': password,
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        //Convert a JavaScript object into a string
    }
}
