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
