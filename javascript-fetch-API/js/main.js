// Fecth API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


// To try one part of the code and se the differents results just remove the comments mark after the underline lane



// The big reason why is used Fecth API is to request data from another server, another website


// ===========> Promises

// 3 states: Pending, Fulfiled, Rejected
// Promises will deliver async code, 
// Javascript is usually Syncroness or doing One Thing at a time


// _________________________________

/*

// =============== Promises example

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! Resolved the promise!");
    } else {
        reject("No! Rejected the promise.");
    }
});

// if I console.log(myPromise) it actually will not return the value of
// insted to get the value of the Promise we need to unite 
console.log(myPromise);
// Promises can also be chained together
myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.log(err);
})
// The way to have the return of Resolve
// insted of getting the state of the promise
// Actually got the Resolve returns from the Promise

// This is actually how a Primise work


const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
        // This is a Callback that acepts it function
    }, 3000);
});

myNextPromise
.then(value => {
    console.log(value)
});

*/




// ___________________________________




/*

// Pending Promise Example

const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users);
// it will return pedding because the promise has not resolved it still working on it

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })  
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })
    });



*/

// ___________________________________




/*

// =========== Async / Await


const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

// To use the key word "await" must be within in a async function


const anotherFunction = async () => {
    const data = await myCoolFunction();
    console.log(data);
}

anotherFunction();


*/


// ___________________________________



/*

// Workflow Function



const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();



*/




// ___________________________________




/*


// 2nd Parameter of Fetch is a object


const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const jsonJokeData = await response.json();

    console.log(jsonJokeData.joke);
}
getDadJoke();


*/




// Another way to call Fetch and API request

// 2nd Parameter of Fetch is a object

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        category: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limiotTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural "workflow" function

const proccessJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl)
    console.log("finished!")
}

proccessJokeRequest();



// ___________________________________



/*

// ===========> Callbacks

function firstFunction(parameter, callback) {
    // do stuff
    callback();
}

// AKA (Also Known As) "callback hell"
firstFunction(para, function() {
    // do stuff 
    secondFunction(para, function() {
        thirdFunciton(para, function() {
        // This type of code makes it hard to follow, maybe it can be found in legacy code before the Promises exist
        });
    });
});

*/