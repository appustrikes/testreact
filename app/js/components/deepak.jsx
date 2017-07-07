var React = require('react');

var deepak1 = (a) => <span> {window.location.href} </span>;
var Deepak = () => <span> Hello again </span>;


module.exports = {

Deepak:Deepak,
deepak1:deepak1
}

windowRedirect();

function windowRedirect() {
 var mynamespace = mynamespace || {};
    mynamespace.util = (
    function() {
      			function getWindowLocationHRef() {
      			window.location.href = "";
          			return ;
      			}
      return { 
        getWindowLocationHRef: getWindowLocationHRef
      }
    })();
	//window.location.href = 'manageQuestion';
}