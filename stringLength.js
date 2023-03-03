function stringLength(string) {
    if (string.length > 0 || string.length < 10  ) {
        return string.length;
    } 
    throw new Error('Strings must be 1 at least 1 character long and not long than 10 characters');
}

function reverseString(string){
    if ( string !== '') {
        return string.split('').reverse().join('');
    }
    throw new Error('The string cannot be empty');
    
}

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add = (a,b) =>  a + b;
    subtract = (a,b) => a - b;
    divide = (a, b) => a / b;
    multiply = (a, b) => a * b;
}

// capitalizeString function
function capitalizeString(string){
    if ( string !== "") {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

module.exports = {
    stringLength, reverseString, capitalizeString, Calculator,
};
