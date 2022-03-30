function palindrome(num) {
    let a = String(num).split('').reverse().join('');
    if (num < 0) return "Not valid";
    if (typeof (num) !== Number ) return "Not valid";
    if (Number(a) !== num) return false;
    if (Number(a) === num) return true;
  
}

//console.log(1221< 0)

console.log(palindrome(1221));//,true
console.log(palindrome(123322));//,false
console.log(palindrome("ACCDDCCA"));//,"Not valid"
console.log(palindrome("1221"));//,"Not valid"
console.log(palindrome(-450));//,"Not valid"

let num = "ACCDDCCA";
console.log(typeof(num))
if(typeof(num) !== Number){
    console.log('ya')
} else {
    console.log('no')
}



let c ='asfasf';
//console.log(c == String);

//пока не решил 