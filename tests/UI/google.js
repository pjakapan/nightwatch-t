var host = 'https://www.google.co.th';
module.exports = {
  'some test': function (client) {
    client
      .url(host)
      .waitForElementVisible('body', 1000)
      .assert.urlContains('google')
      .pause(2000)
  },
  'some test 2': function (client) {
    client
      .assert.urlContains('google')
      .pause(1000)
      .assert.elementPresent('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
      .pause(2000)
      .end();
  }
};