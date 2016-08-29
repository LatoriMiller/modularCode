var Request = require('request-promise');

module.exports = {
  getPost(postId){
    Request(postId)
      .then(function(response){
        console.log(response);
      })
  }
}
