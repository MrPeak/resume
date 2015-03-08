'use strict';

var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'gfeng.peak@hotmail.com',
        pass: 'gf24556129'
    }
});

module.exports = transporter;

