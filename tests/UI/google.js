var host = 'http://www.google.com';
module.exports = {
  'some test': function (client) {
    client
      .url(host)
      .waitForElementVisible('body', 1000)
      .execute(function (newWindow) {
        window.open('https://www.w3schools.com/html/default.asp', '_blank');
      }, [host])
      .assert.urlContains('google')
      .window_handles(function (result) {
        var temp = result.value[1];
        this.switchWindow(temp);
      })
      .assert.urlContains('w3schools')
      .pause(5000)
      .window_handles(function (result) {
        var temp = result.value[0];
        this.switchWindow(temp);
      })
      .pause(5000)
       .window_handles(function (result) {
        var temp = result.value[1];
        this.switchWindow(temp);
      })
      .assert.urlContains('w3schools')
      .pause(5000)
      .end();
  }
};