function isPalindrome(x) {
   let a = x.split('').reverse().join('');
    if (a.toUpperCase() === x.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("hellow"))

//isPalindrome("a"), true
//isPalindrome("aba"), true
//isPalindrome("Abba"), true
//isPalindrome("hello"), false
//isPalindrome("Bob"), true
//isPalindrome("Madam"), true
//isPalindrome("AbBa"), true
//isPalindrome(""), true

