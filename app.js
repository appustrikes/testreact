const config = require('./webpack.config');
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');
const port = (process.env.PORT || 3000);
const resumePath = path.join(__dirname, 'resume.pdf');
const request = require('request');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'panhtran249@gmail.com',
    pass: 'Mimishkin135'
  }
});

const server = new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  disableHostCheck: true,
  hot: true,
  setup: function(app) {
    app.get('/resume', (req, res) => {
      fs.readFile(resumePath, (err, data) => {
        res.contentType('application/pdf');
        res.send(data);
      });
    });

    app.get('/instagram', (req, res) => {
      request.get('https://www.instagram.com/anya_tran/?__a=1', (err, response, body) => {
        res.send(body);
      });
    });

    app.get('/email', (req, res) => {
      console.log(req);
      const mailOptions = {
        to : req.query.email,
        subject : req.query.name + ": " + req.query.subject,
        text : req.query.message
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        } else {
          console.log('Message %s sent: %s', info.messageId, info.response);
        }
      });
    });
  }
});
server.listen(port, function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log(`Listening at http://localhost:${port}`)
});
