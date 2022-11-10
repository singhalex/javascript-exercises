const removeFromArray = function(array, ...removeFrom) {
    let accepted = [];

    for (item of array) {
        if (removeFrom.includes(item)) {
            continue;
        } else {
            accepted.push(item);
        }
    }
    return accepted;
};

// Do not edit below this line
module.exports = removeFromArray;
