function smash(words) {
    return words.join(' ')
};

console.log(smash(["hello", "world"]));

//smash(["hello", "world"]), "hello world"
//smash(["hello", "amazing", "world"]), "hello amazing world"
//smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence"