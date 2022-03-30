function palindrome(num) {
    if(num < 0 || typeof(num) !== 'number') return 'Not valid';
    let a = String(num).split('').reverse().join(''); 
     return a == num
}

console.log(palindrome(1221));//,true
console.log(palindrome(123322));//,false
console.log(palindrome("ACCDDCCA"));//,"Not valid"
console.log(palindrome("1221"));//,"Not valid"
console.log(palindrome(-450));//,"Not valid"

console.log(typeof(123))

