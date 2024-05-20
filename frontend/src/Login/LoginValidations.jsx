function validation(values){
    let error ={}
    const username_pattern = /^[a-zA-Z0-9_]{3,15}$/; // Username pattern: Alphanumeric characters and underscores, 3-15 characters
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; // Password pattern: At least one digit, one lowercase letter, one uppercase letter, and minimum 8 characters long
    
    if(values.username === ""){ // Username validations
        error.username = "Username should not be empty!";
    }
    else if (!username_pattern.test(values.username)){
        error.username = "Invalid username format!";
    } else { 
        error.username = "";
    }

    if(values.password === ""){ // Password validations
        error.password = "Password should not be empty!";
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Invalid password format!";
    } else { 
        error.password = "";
    }
    
    return error;
}

export default validation;
