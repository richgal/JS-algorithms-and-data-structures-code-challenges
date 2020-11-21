function telephoneCheck(str) {

    let checkResult = false;
    //check for unacceptable character 
    let regexNonNumber = /[A-Za-z\!\@\#\$\%\^\&\*+\=\._]/g;
    let notIncludesNonNumber = [];
    notIncludesNonNumber = str.match(regexNonNumber) ? str.match(regexNonNumber) : [];
    notIncludesNonNumber = (notIncludesNonNumber.length === 0) ? true : false;
    

    //check length 
    let regexNumber = /[0-9]/g;
    let plainPhoneNumber = str.match(regexNumber);
    let isNumberLengthCorrect = 9 < plainPhoneNumber.length ? plainPhoneNumber.length : false;
    isNumberLengthCorrect = 12 > isNumberLengthCorrect ? isNumberLengthCorrect : false;
    

    //check length country code
    let countryCodeCorrect = true;
    if (plainPhoneNumber.length === 11 && plainPhoneNumber[0] != 1 || str[0] === '-') {
      countryCodeCorrect = false;
    }

    // check correct parenthesis
    let isPerenthesisCorrect = true;
    let regexParenthesis = /[\(\)]/g;
    let regexParenthesisPattern = /\(\d{3}\)/g;
    if ( str.match(regexParenthesis) != null ) {
      if ( str.match(regexParenthesisPattern) === null || str.match(regexParenthesis).length > 2)
      isPerenthesisCorrect = false;
    }
    //console.log(str.match(regexParenthesis));

    if (notIncludesNonNumber && isNumberLengthCorrect && countryCodeCorrect && isPerenthesisCorrect) {
      checkResult = true;
    }
    console.log(checkResult);
    return checkResult;
}
  
  telephoneCheck("-1 (757) 622-7382");
  
  telephoneCheck("(555)5(55?)-5555");

  telephoneCheck("1 (555) 555-7895");