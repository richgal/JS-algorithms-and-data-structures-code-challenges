function convertToRoman(num) {
    let romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    let romansTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
    let romansHundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']
    let stringNum = String(num);
    let result = [];
    const numArray = [];

    for (let i = 0; i < stringNum.length; i++) {
        
        numArray.push(stringNum[i]);
    }

    const revNumArr = numArray.reverse();

    console.log(revNumArr);

    for (let i = 0; i < revNumArr.length; i++) {
        if ( i === 0 ) {
            result.push(romans[revNumArr[i]-1])
        } else if ( i === 1 ) {
            result.push(romansTens[revNumArr[i]-1])
        } else if ( i === 2 ) {
            result.push(romansHundreds[revNumArr[i]-1])
        } else {
            result.push('M'.repeat(Number(revNumArr[i])));
        }
    }

    result = result.reverse();
    result = result.join("");


    console.log(result);
 return result;
}

convertToRoman(798);
