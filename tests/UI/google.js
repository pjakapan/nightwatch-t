var host = 'http://www.google.com';
module.exports = {
  'some test': function (client) {
    client
      .url(host)
      .waitForElementVisible('body', 1000)   
      .assert.urlContains('google')
      .pause(2000)
      .end();
  }
};