import React from 'react'
var jsforce = require('jsforce');

export default class App extends React.Component {
  render () {
    var url = new URL(window.location.href 
);
var c = url.searchParams.get("a");
var conn = new jsforce.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com',
    clientId : '3MVG9i1HRpGLXp.rxVcyCJ4PlHiRS6POuHnKpfvIJ9fHXYDsI9hOsl_tEh0MXhKOUr6p2QMKpeNrwqUdBs5PJ',
    clientSecret : '6500726240055158769',
    redirectUri : 'www.google.com'
  }
});
conn.login("deepukowstubha@brave-badger-165011.com", "Test1234", function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});
console.log(c);
    return (
      <div>
        
Browser params {c} {conn.toString()}</div>
    )
  }
}
