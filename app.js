function validateForm() {
    var nama = document.getElementById("bgfname").value;
    var namal = document.getElementById("blname").value;
    var alamatemail = document.getElementById("bgemail").value;
    var nophone = document.getElementById("bgno").value;
    var sub= document.getElementById("bgsub").value;
    var msg= document.getElementById("bgmsg").value;
    var cek = document.getElementById("cek").checked;
  
    if (nama.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
    if (namal.trim() === "") {
        alert("Please enter your name.");
        return false;
      }
  
    if (alamatemail.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (nophone.trim() === "") {
      alert("Please enter your phone number.");
      return false;
    }
    if (sub.trim() === "") {
        alert("Please enter your message.");
        return false;
      }
    if (msg.trim() === "") {
      alert("Please enter your message.");
      return false;
    }
  
    if (!cek) {
      alert("Please agree to the terms and conditions.");
      return false;
    }
  
    // Additional custom validations can be added here
  
    // Form is valid, submit the data
    // yourForm.submit();
    alert("Form submitted successfully!");
    return true;
  }