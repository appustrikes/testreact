// const path = require('path')
// const express = require('express')
// const fs = require('fs')
//
// module.exports = {
//   app: function () {
//     const app = express()
//     const indexPath = path.join(__dirname, 'index.html')
//     const resumePath = path.join(__dirname, 'resume.pdf')
//     const publicPath = express.static(path.join(__dirname, 'public'))
//     console.log(resumePath)
//     app.use('/public', publicPath)
//     app.get('/', function (_, res) {
//       res.sendFile(indexPath)
//     })
//     app.get('/resume', function (_, res) {
//       fs.readFile(resumePath, function(err, data) {
//         res.contentType('application/pdf');
//         res.send(data);
//       })
//     })
//     return app
//   }
// }
