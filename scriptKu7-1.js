function palindrome(num) {
    let a = String(num).split('').reverse().join('');
    if (Number(a) === num) return true;
    if (Number(a) !== num) return false;
    if (String(num)) return "Not valid";
    if (-num) return "Not valid";
}

console.log(palindrome(123322));

//palindrome(1221),true
//palindrome(123322),false
//palindrome("ACCDDCCA"),"Not valid"
//palindrome("1221"),"Not valid"
//palindrome(-450),"Not valid"

let num = 1221;
let a = String(num).split('').reverse().join('');
//console.log(Number(a))


let c ='asfasf';
//console.log(c == String);

//пока не решил 