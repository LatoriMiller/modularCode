// Exercise 2: using Packages
var Moment = require ('moment');
var Request = require ('request-promise');

function displayResponse(response) {
  console.log("JSON reponse:", response, new Moment().format("h:mm:ss a"));
}
setInterval(function(){
  Request('http://jsonplaceholder.typicode.com/posts/1')
    .then(displayResponse)
}, 3000)


// console.log("Working!");
// Request('http://jsonplaceholder.typicode.com/posts/1')
//   .then(function(response){
//       console.log("JSON repsonse:", response);
//       console.log(Moment().format("h:mm:ss a"));
//     }
//   )

// DIRECTIONS:
// Install the 'request-promise' package
// Install the 'moment' package
// Examine the directory structures and effects on package.json
// Delete node_modules folder and run npm install again
// Create an index.js file and update package.json so that npm start will run it
// Require the 'request' and 'moment' modules in your application.
// Use 'request-promise' to get data from http://jsonplaceholder.typicode.com/posts/1. Log the response
// Use 'moment' to output a timestamp for when response arrives using the format h:mm:ss a.
// Have your application fetch data every 3 seconds.
