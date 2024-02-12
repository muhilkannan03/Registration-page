function CreateAccount() {
        var letters = /^[A-Za-z]+$/;  
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
        var Name = document.getElementById("Name").value;
        var Email = document.getElementById("Email").value;
        var Password = document.getElementById("Password").value;
        var ConfirmPassword = document.getElementById("ConfirmPassword").value;

        if (Name === "" || Email === "" || Password === "" || ConfirmPassword === "") {
            alert("Check the entered details");
        } else if (!letters.test(Name)) {
            alert("Name should contain only alphabets");
        } else if (!emailRegex.test(Email)) {
            alert("Enter a valid email");
        } else if (Password !== ConfirmPassword) {
            alert("Password & Confirm Password don't match");
        } else if (Password.length < 6 || Password.length > 20) {
            alert("Password criteria are not satisfied");
        }
    }
