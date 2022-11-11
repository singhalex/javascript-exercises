const findTheOldest = function(birthRecords) {
    let oldestPerson = "";
    let oldestAge = 0;
    let currentYear = new Date().getFullYear();

    for (person of birthRecords) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
        if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
            oldestPerson = person;
        }
    };

    return oldestPerson     
};

// Do not edit below this line
module.exports = findTheOldest;
