var app = require('./components/router.jsx');

console.log('app starting');

var reactMountPoint = document.createElement('div');
reactMountPoint.id = 'app';
reactMountPoint.className ='container-fluid';

document.body.insertBefore(reactMountPoint,document.body.firstChild);

app.start();
