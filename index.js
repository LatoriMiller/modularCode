var dataAccess = require('./dataAccess');
var timeStamp = require('./timeStamp');

setInterval(function() {
	dataAccess.getPost("http://jsonplaceholder.typicode.com/posts/1");
  timeStamp.getTime();
},3000);
// Exercise 3: Modular Code
// DIRECTIONS:
// Create a DataAccess module
// Export an object with a function getPost(postId)
// Create a TimeStamp module
// Export an object with a function getTime() that returns a timestamp string in the format h:mm:ss a
// Update your index.js file to use DataAccess and TimeStamp.
