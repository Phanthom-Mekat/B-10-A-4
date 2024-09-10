
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


