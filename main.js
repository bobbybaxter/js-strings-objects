const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
    //do some stuff
    // under 21 'drink some water'
    // over 21 under 65 'have a beer'
    // over 65 'take a nap'
    if (num < 21) {
        return `drink some water <br>`;
    } else if (num < 65) {
        return `have a beer <br>`;
    } else {
        return `take a nap <br>`;
    }
}

printToDom('div1', iAmThursty(19));
printToDom('div1', iAmThursty(30));
printToDom('div1', iAmThursty(79));

// Bonus = printToDom function





console.log (1 === '1');  // false
// console.log (1 == '1'); // true - don't use because it's unsafe
console.log (1 !== '2');  // true

console.log('cats'.length); // how many characters in a string

const quote = 'winter is coming';
console.log(quote.indexOf('is'));