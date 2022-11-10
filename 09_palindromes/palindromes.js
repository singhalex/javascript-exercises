const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^\w\']|_/g, "")
    if (word === word.split("").reverse().join("")) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
