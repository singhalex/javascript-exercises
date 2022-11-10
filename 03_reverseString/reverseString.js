const reverseString = function(string) {
    let backwardsString = "";
    let letters = string.split("");
    
    for (i = 0; i < string.length; i++) {
        backwardsString += letters.pop();
    }

    return backwardsString
};

// Do not edit below this line
module.exports = reverseString;
