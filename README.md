# JS Strings and Objects
One-page locally hosted basic playground to practice Javascript strings and objects.

### Under the hood
- `const printToDom` assigns our selected text to our selected DOM element
- `const iAmThursty` is a function to experiment with conditional statements
- we have two `console.log()` functions to display the difference between `===` and `!==`
- we have another `console.log()` function to test the `.length` method
- next with `const quote` we've assigned a string to a variable, then logged to the console the `.indexOf()` 'is'.
- with `const bucketOCats` we've created an object then logged items within the object using dot notation, then bracket notation
- with `let hitchhikers_guide` we've created an object then logged to the console an item nested deep within it
- and in our last section we've created an object with `let employee`, answered the commented out questions, then printed the answers to the dom with `printToDom`

### Results
- the first three lines are the printed responses when testing our `iAmThursty()` function
- the last four lines are the printed responses to the commented out questions regarding the `employee` object.

## Screenshots
![image of pies website](https://raw.githubusercontent.com/bobbybaxter/js-strings-objects/master/img/js-strings-objects-screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/js-strings-objects
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the js-strings-objects/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`