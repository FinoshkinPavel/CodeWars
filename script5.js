function lovefunc(fl1, fl2) {
    // moment of truth
    num1 = Number.isInteger(fl1 / 2);
    num2 = Number.isInteger(fl2 / 2);
    if (num1 == true && num2 == true) {
        return false;
    } else if (num1 == true && num2 == false) {
        return true;
    } else if (num1 == false && num2 == true) {
        return true;
    } else if (num1 == false && num2 == false) {
        return false;
    }
}
console.log(lovefunc(1, 4))
//lovefunc(1,4), true
//lovefunc(2,2), false
//lovefunc(0,1), true
//lovefunc(0,0), false