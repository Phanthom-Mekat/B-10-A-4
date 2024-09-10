function calculateTax(income,expenses){
    let tax= 0;
    if(income>=expenses){
        if(income >=0 && expenses >= 0){
        tax = (income-expenses)*0.2;
        }
        else{
            return "Invalid input";
        }
    }
    else{
        return "Invalid input";
    }
    return tax;
}

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

function checkDigitsInName(name) {
    const number =['0','1','2','3','4','5','6','7','8','9'];
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    else if (name){
        for(let i=0; i<name.length; i++){
            if(number.includes(name[i])){
                return true;
            }
        }
        return false;
    }
}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;
    let score = 0;
    if (testScore > 50) {
        score += 50;
    } else {
        score += testScore;
    }
    if (schoolGrade > 30) {
        score += 30;
    } else {
        score += schoolGrade;
    }
    if (isFFamily) {
        score += 20;
    }
    if (score >= 80) {
        return true;
    } else {
        return false;
    }

}

function  waitingTime(waitingTimes  , serialNumber) {
    if (Array.isArray(waitingTimes)===false || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    let average = Math.round(sum / waitingTimes.length);

    let peopleLeft = serialNumber - waitingTimes.length - 1;

    let waitingTime = peopleLeft * average;
    return waitingTime;
}

