var Moment = require('moment');

module.exports = {
  getTime(){
    console.log("TIMESTAMP", new Moment().format("h:mm:ss a"));
  }
}
