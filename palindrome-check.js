function palindrome(str) {
    const paragraph = str;
    const regex = /[\W_]/g;
    let result = [];
    let lowPara = paragraph.toLowerCase();
    for (let i = 0; i < lowPara.length; i++) {
        if ( !lowPara[i].match(regex) ) {
            result.push(lowPara[i]);        
        }    
    }

    let result2 = result.join('');
    let result2Rev = result.reverse().join('');

    let boli = result2 === result2Rev;
        return boli;
  }



 /* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into the same case 
(lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", 
and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

1. lowercase
2. remove special characters
3. concatinate

*/