function palindromo(str) {
    let cleanedStr = str.replace(/\W/g, "");

    return cleanedStr === cleanedStr.split('').reverse().join('');
}

let saluto = 'ciao a tutti';
let frase = 'ero a dirottar trattori da ore';

console.log(palindromo(saluto));
console.log(palindromo(frase));



