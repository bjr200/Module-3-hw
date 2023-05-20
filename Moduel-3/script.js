document.getElementById("generate-btn").addEventListener("click", function() {
    var length = document.getElementById("password-length").value;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numeric = document.getElementById("numeric").checked;
    var special = document.getElementById("special").checked;
    
    var password = generatePassword(length, lowercase, uppercase, numeric, special);
    
    if (password) {
      alert("Your generated password is: " + password);
    } else {
      alert("Please select at least one character type.");
    }
  });
  
  function generatePassword(length, lowercase, uppercase, numeric, special) {
    var charSet = "";
    
    if (lowercase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if (uppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    if (numeric) {
      charSet += "0123456789";
    }
    
    if (special) {
      charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    
    var password = "";
    
    if (charSet === "") {
      return null;
    }
    
    for (var i = 0; i < length; i++)}