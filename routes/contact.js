/*
 * GET contact listening
 */

var transporter = require('../Mail.js');

exports.index = function(req, res) {
  res.renderPjax("contact", {
    title: "Contact Me"
  });
};

exports.mail = function(req, res) {

  // Create an object to store req.body
  var options = Object.create(req.body);

  var message = {

    // sender info
    from: '我的简历<gfeng.peak@hotmail.com>',

    // Comma separated list of recipients
    to: '569052161@qq.com',

    // Subject of the message
    subject: '猎头' + options.name + '来访<' + options.address + '>', //

    headers: {
        'X-Laziness-level': 1000
    },

    // plaintext body
    text: options.text,
  };

  transporter.sendMail(message, function(error, info) {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        res.status(503);
        return;
    }

    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    res.json({
      status: 'success'
    });
  });
};


