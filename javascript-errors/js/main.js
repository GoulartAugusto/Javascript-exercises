// Javascript errors and Errors Handling



// ReferenceError: is the more common Error



// SyntaxError: the javascript will catch this error when
// as we are building our code and it won't go ahead and
// valueate the script further so we catch this when create the code.



// TypeError: Commonly occours when we try to rename
// a const with another value.



// Complex example of error

"use strict";
const makeError = () => {
    let i = 1;
    while (i <=5) {
        try {
            if (i % 2 !==0) {
                throw new Error("Odd number!");
            }
            console.log("Even number!");
        } catch (err) {
            console.log(err.stack);
        } finally {
            console.log("...finally");
            i++
        }
    }
};
makeError();

// finally: will execute no matter what where has
// an error or not



// catch: will only execute if there is an error,
// and if there is an error in the try block any code
// following that error will not execute. Any code that 
// remains in the try block will not execute if an
// error happens before ir reach that code.



// That is how try catch and finally work.