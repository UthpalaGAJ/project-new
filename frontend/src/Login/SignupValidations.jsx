function validation(values){
    let error ={};
    const email_pattern = /^[^\$@]+@[^\s@]+\-[^\s@]+$/; // email format
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z®\-9]{8,}$/; // password format
    //Password must contain at least one digit, one lowercase letter,
    // one uppercase letter, and be at least 8 characters long.
    
    const username_pattern = /^[a-zA-Z0-9_]{3,15}$/; // username format: Alphanumeric characters and underscores, 3-15 characters

    if(values.name === ""){ // name validations
        error.name = "Name should not be empty!";
    }
    else { 
        error.name = "";
    }

    if(values.email === ""){ // email validations
        error.email = "Email should not be empty!";
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email is invalid! Please enter a valid email address!";
    }
    else { 
        error.email = "";
    }

    if(values.username === ""){ // username validations
        error.username = "Username should not be empty!";
    }
    else if (!username_pattern.test(values.username)){
        error.username = "Username is invalid! Username must be alphanumeric and 3-15 characters long.";
    }
    else { 
        error.username = "";
    }

    if(values.password === ""){ // password validations
        error.password = "Password should not be empty!";
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Password is not valid! Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.";
    }
    else { 
        error.password = "";
    }
    if (values.role !== "customer") {
        // role validation
        error.role = "Role must be 'customer'!";
      } else {
        error.role = "";
      }
    

    return error;
}

export default validation;
