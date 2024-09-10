function sendNotification(email){
    if(email.indexOf('@') === -1){
        return "Invalid Email";
    }
    else{
        const emailParts = email.split('@');
        let output = emailParts[0] + ' sent you an email from ' + emailParts[1];
        return output;
    }
}

