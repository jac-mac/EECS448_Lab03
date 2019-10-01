let field1 = document.getElementById("firstPassword");
let field2 = document.getElementById("confirmPassword");
let outputField = document.getElementById("checkPassword");


validatePass = function() {

  if(field2.value != field1.value) {

  outputField.value = "Passwords do not match!";

  }

  else if(field1.value.length < 8 || field2.value.length < 8) {

  outputField.value = "Password must be 8 characters";

  }

  else{

  outputField.value = "Password confirmed!";

  }
}
