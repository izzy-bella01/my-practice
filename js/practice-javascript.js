"use stirct";


// 01-22-2022

    // Problem 1
    // Simple, remove the spaces from the string, then return the resultant string.

    var string = "Hello My Name Is Bella"

    console.log(string.replace(/\s/g, ''));

    // Problem 2
    //Write a function findNeedle() that takes an array full of junk but containing one "needle"
    //
    // After your function finds the needle it should return a message (as a string) that says:
    //
    // "found the needle at position " plus the index it found the needle, so:
    var junkArr = ['hay', 'hay', 'hay', 'junk', 'needle', 'junk'];

    function findNeedle() {
        if(junkArr.includes('needle')) {
            return ('found needle at position ' + junkArr.indexOf('needle'));
        } else {
            return false;
        }
    }

    console.log(findNeedle());;
