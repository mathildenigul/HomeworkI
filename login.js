function validate() {
    var form = document.getElementById("login_form");
    if(form.email.value == "" || form.password.value == "") {
        form.action = ""
    }
    else {
        form.action = "index.html"
    }
}