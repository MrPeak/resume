/* 
 * @author      Mrpeak
 * @description Send email for myself
 * @depdence 'nodemailer'  http://www.nodemailer.com/
 */

var mail = require('nodemailer');

module.exports = Mail;

/*
 * @constructor
 * @param {Object} options
 * @param {String} options.from   
 * @param {String} options.to   
 * @param {String} options.subject   
 * @param {String} options.text  
 * @param {String} options.html   
 * @param {String} [options.attachments]   
 */
function Mail(options) {

  this.name = options.name; 
  this.addr = options.address;
  this.from = '我的简历系统IONE<847114929@qq.com>';
  this.to = options.to || 'gfeng.peak@gmail.com';
  this.subject = "Hey, you handsome guy! I'm " + this.name + ", I'v seen your resume ~" + "\n" + "My email address is " + this.addr ;
  this.text = options.text || 'Holy shit, you lied to me ... ';
  // this.html = options.message || '<p>Hello world</p>';
  this.attachments = options.attachments;

  this.smtpTransport = mail.createTransport('SMTP', {
    auth: {
      user: '847114929@qq.com',
      pass: 'gf24556129'
    }
  });

  this.options = {
    addr: this.address,
    from: this.from,
    to: this.to,
    subject: this.subject,
    text: this.text,
    // html: this.html,
    attachments: this.attachments
  };
}

/**
 * @description email send method
 * @function
 * @param {Function} callback
 */
Mail.prototype.send = function(callback) {
  return this.smtpTransport.sendMail(this.options, callback);
};

/*
 * @description email close method
 * @function
 */
Mail.prototype.close = function() {
  return this.smtpTransport.close();
};
