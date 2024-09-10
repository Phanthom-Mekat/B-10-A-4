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

