
function passwordVerify() {
    let passwordMain = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("cPassword").value
   
    if(passwordMain != passwordConfirm) {
        document.getElementById("password").style.border = "2px solid red"
        document.getElementById("cPassword").style.border = "2px solid red"
        document.getElementById("cPassword").setCustomValidity("Passwords do not match");
        return false;
    }
    return true;
}