/*
 * GET contact listening
 */

var Mail = require('../mail.js');

exports.index = function(req, res) {
  res.renderPjax("contact", {
    title: "Contact Me"
  });
};

exports.mail = function(req, res) {

  // Create an object to store req.body
  var options = Object.create(req.body);

  // Create a mail instance
  var mail = new Mail(options);

  var callback = function(err, _res) {
    // Catch exceptions 
    if (err) {
      _res.send(err);
      return;
    }

/*    // response.statusHandler only applies to 'direct' transport
    _res.statusHandler.once("failed", function(data) {
      console.log(
        "Permanently failed delivering message to %s with the following response: %s",
        data.domain, data.response);
    });

    _res.statusHandler.once("requeue", function(data) {
      console.log("Temporarily failed delivering message to %s", data.domain);
    });

    _res.statusHandler.once("sent", function(data) {
      console.log("Message was accepted by %s", data.domain);
    });*/

    // Feedback message to front-end
    res.json(_res.message);
  };

  mail.send(callback);
};


