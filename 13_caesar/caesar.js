const caesar = function(word, shift) {
    let wordArray = word.split("");
    let charCodeArray = [];
    let shiftedWord = "";

    // Reduces shift if larger than number of letters in alphabet
    if (shift > 26) {
        shift = shift % 26;
    };

    // Create an array of char codes from the given word
    for (letter of wordArray) {
        charCodeArray.push(letter.charCodeAt(0));
    }

    for (code of charCodeArray) {
        // skips over special characters
        if (code == 32 || code == 44 || code == 33) {
            shiftedWord += String.fromCharCode(code);
        } else {
            //for uppercase letters
            if (code < 91) {
                code = code + shift;
                if (code > 90) {
                    code = code - 26;
                } else if (code < 65) {
                    code = code + 26;
                }
        };
        
            //for lowercase letters
            if (code > 122) {
                code = code + shift;
                if (code > 122) {
                    code = code - 26;
                } else if (code < 65) {
                code = code + 26;
            }

            shiftedWord += String.fromCharCode(code)
        }
    }
    }
    return shiftedWord
};

// Do not edit below this line
module.exports = caesar;
