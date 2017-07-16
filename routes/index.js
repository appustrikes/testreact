

// only needed if calling the rest api from this file (accounts route)
var rest = rest = require('./../rest.js');

/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Salesforce.com Node.js REST Demo' })
};

/*
 * GET list of accounts - for larger apps, you may want to separate
 * code into different routes for ease of maintenance and logic. 
 * Prevents app.js from becoming huge!
 */
exports.accounts = function(req, res){
	
};
