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

    console.log(findNeedle());

// 01-24-2022

    // PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
    // INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
    // INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34


    // function sumOfStrings(string) {
    //     var stringArr = string.split('');
    //
    //     var sum = stringArr.reduce(function(total, num) {
    //         return parseFloat(total) + parseFloat(num);
    //     });
    //
    //     return sum;
    // }
    //
    // console.log(sumOfStrings("1234"));

// 01-25-2022

    // Tuesday Morning Warmup
    // Write a function that finds duplicates, or repeating numbers consecutively in a string of numbers, and returns an object that shows how many times any repeating number is shown
    // INPUT: “42992338111134”
    // EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}

    // var stringOfNum = '12334567784312';

    function stringOfNum (string) {
        var duplicate = {};
        var count = 0
        for(var i = 0; i <= string.length; i++) {

        }

    }
    stringOfNum('122334');

// 02-08-2022

    // Tuesday Morning Warmup:
    // Write a function that removes any duplicates from an array.
    // Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
    // expected output: [2,3,5,8,1,6,7,4]

    let dupArray = [2,3,4,5,5,6,8,2,4,9,4,3,1,3,8];
    let noDupArray = dupArray.reduce((previousValue, currentValue) => {
        if(!previousValue.includes(currentValue)) {
          previousValue.push(currentValue);
        }
        return previousValue;
    }, [])
    console.log(noDupArray);

// 02-09-2022

    // Wednesday Morning Warmup:
    // write a function that takes a string as argument and returns the number of vowels contained in that string.
    // The vowels are “a”, “e”, “i”, “o”, “u”.
    // input: "helicopter"
    // output: 4
    // reason: there are 4 vowels in the input word helicopter

    function howManyVowels(string) {
        let vowels = "aeiouAEIOU";
        let count = 0;
        for(let i = 0; i < string.length; i++) {
            if(vowels.indexOf(string[i]) !== -1) {
                count++
            }
        }
        return count
    }

    console.log(howManyVowels("bananas"));

