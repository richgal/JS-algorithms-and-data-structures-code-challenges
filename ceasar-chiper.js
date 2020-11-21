let result = [];
const stringArray = [];

const letterSet = {
        A : 'N',
        N : 'A',
        B : 'O',
        O : 'B',
        C : 'P',
        P : 'C',
        D : 'Q',
        Q : 'D',
        E : 'R',
        R : 'E',
        F : 'S',
        S : 'F',
        G : 'T',
        T : 'G',
        H : 'U',
        U : 'H',
        I : 'V',
        V : 'I',
        J : 'W',
        W : 'J',
        K : 'X',
        X : 'K',
        L : 'Y',
        Y : 'L',
        M : 'Z',
        Z : 'M',
    }


const rot13 = (str) => {


    for (let i = 0; i < str.length; i++) {
        if ( letterSet[str[i]] ) {
            result.push(letterSet[str[i]]);
        } else {
            result.push(str[i]);
        }   
    }
    
    result = result.join('');
    console.log(result);
    
    return result;
}

rot13("SERR PBQR PNZC");
  