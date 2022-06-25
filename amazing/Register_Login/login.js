function store() {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    //JSON.parse() to convert the string into a JavaScript object

    if (pass == "Ranfo66*" && username == "admin") {
        alert("Welcome To Admin Page");
        window.open("../AAdminn/control.html");
    }

    else if (user_records.some((v) => { return v.pass == pass && v.username == username })) {
        alert("Welcome To Home Page");
        window.open("../home.html");
    }

    else {
        alert("Please make sure you enter the correct user name and password");
    }

}