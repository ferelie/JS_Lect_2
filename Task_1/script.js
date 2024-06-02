const readUserInfo = () => {
    let name, landlineNum, mobileNum, email;
    while (true) {
        name = prompt("Enter your name:");
        if (/^[A-Za-z]+$/.test(name) && name.length > 0) {
            break;
        } else {
            alert("Please enter a valid name");
        }
    }

    while (true) {
        landlineNum = prompt("Enter your landline number:");
        if (/^\d{9}$/.test(landlineNum)) {
            break;
        } else {
            alert(
                "Please enter a valid 9-digit landline number including government code"
            );
        }
    }

    while (true) {
        mobileNum = prompt("Enter your mobile number:");
        if (/^(010|011|012|015)\d{8}$/.test(mobileNum)) {
            break;
        } else {
            alert("Please enter a valid 11 digit mobile number");
        }
    }

    while (true) {
        email = prompt("Enter your email:");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            break;
        } else {
            alert("Please enter a valid email");
        }
    }

    console.log(`%cWelcome, ${name}! \nYour contact information is: \nLandline: ${landlineNum} \nMobile: ${mobileNum} \nEmail: ${email}`, 'color: green');
};

readUserInfo();
