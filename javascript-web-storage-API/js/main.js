// Web Storage API

// Not part of the DOM - refers to the Window API
// Avaliable to JS via the global variable: window

// We do not have to type Window. It is implied:

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Augusto",
    hobbies: ["eat", "sleep", "code"],    
    logName: function() {
        console.log(this.name);
    }
}

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData);
