function validation() {
    if (document.mform.name.value == "") {
      document.getElementById("result").innerHTML = "Enter your Name*";
      return false;
    } else if (document.mform.email.value == "") {
      document.getElementById("result").innerHTML = "Enter your Email*";
      return false;
    } else if (document.mform.contact.value == "") {
      document.getElementById("result").innerHTML = "Enter Contact Number*";
      return false;
    } else if (document.mform.username.value == "") {
      document.getElementById("result").innerHTML = "Enter your Username*";
      return false;
    } else if (document.mform.username.value.length < 6) {
      document.getElementById("result").innerHTML = "Atleast six letters*";
      return false;
    } else if (document.mform.password.value == "") {
      document.getElementById("result").innerHTML = "Enter your Password*";
      return false;
    } else if (document.mform.password.value.length < 6) {
      document.getElementById("result").innerHTML =
        "Password must be of 6-digits*";
      return false;
    } else if (document.mform.cpassword.value == "") {
      document.getElementById("result").innerHTML = "Enter Confirm Password*";
      return false;
    } else if (document.mform.password.value !== document.mform.cpassword.value) {
      document.getElementById("result").innerHTML = "Password doesn't match*";
      return false;
    } else if (document.mform.password.value == document.mform.cpassword.value) {
      popup.classList.add("open-slide");
      return false;
    } 
}
var popup=document.getElementById("popup")
function closeSlide(){
popup.classList.remove("open-slide");
}
