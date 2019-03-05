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





const catName = () => {
    return 'killer';
}


const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep',
    }
};

// dot notation
console.log(bucketOCats.cat2);
console.log(bucketOCats.cat4.water);

// bracket notation
console.log(bucketOCats['cat2']);




let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life) // 42

// test1
let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

// Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}.`);
const answer1 = `Our company's lawyer is ${employee.name}. <br>`;

// Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`Jeff was hired on ${employee.hire_date}.`);
const answer2 = `Jeff was hired on ${employee.hire_date}. <br>`;

// Add a new key, vacation_days, and its value, 20, to employee. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
employee.vacation_days = 20;
console.log(employee.vacation_days);
console.log(employee['vacation_days']);  // no difference
const answer3 = `Jeff has ${employee.vacation_days} vacation days. <br>`;

let eom = "employee_of_the_month";
// Use the variable above to add a new property to employee. Set its value to false. Should you use dot or bracket notation?
employee[eom] = false;  // must use bracket notation to get the variable

const eomAnswer = () => {
    if (employee.eom === false) {
        return 'is not';
    } else {
        return 'is';
    }
};
const answer4 = `Is Jeff the employee of the month? ` + employee.eom;

// checks that all of my keys were added to the object
console.log(employee);


printToDom('div1', 'Answer 1: ');
printToDom('div1', answer1);
printToDom('div1', 'Answer 2: ');
printToDom('div1', answer2);
printToDom('div1', 'Answer 3: ');
printToDom('div1', answer3);
printToDom('div1', 'Answer 4: ');
printToDom('div1', answer4);