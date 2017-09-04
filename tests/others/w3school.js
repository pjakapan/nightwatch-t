module.exports = {
  '@tags': ['W3school'],
  'Case 1 waitforbody': function (browser) {
    browser
      .url('https://www.w3schools.com/')
      .waitForElementVisible('body', 3000)
      .assert.title('W3Schools Online Web Tutorials')
      .useXpath()
      .click('//*[@id="mySidenav"]/div/a[1]')
      .assert.title('HTML Tutorial')
      .useXpath()
      .click('//*[@id="main"]/div[4]/a')
      .window_handles(function (result) {
        var temp = result.value[1];
        this.switchWindow(temp);
      })
      .frame(null)
      .frame(0)
      .click('/html/body/h1')
      .keys([browser.Keys.CONTROL, "a"])
      .pause(2000)
      .window_handles(function (result) {
        var temp = result.value[0];
        this.switchWindow(temp);
      })
      .pause(2000)
      .back()
      .pause(2000)
      .end();
  },
  'Case 2 input and frame': function (browser) {
    browser
      .url('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_text')
      .assert.title('Tryit Editor v3.5')
      .frame(null)
      .frame(0)
      .setValue('/html/body/form/input[1]', 'jakapan')
      .pause(1000)
      .setValue('/html/body/form/input[2]', 'petchann')
      .click('/html/body/form/input[3]', function (result) {
        this.assert.strictEqual(result.status, 0);
      })
      .pause(3000)
      .end();
  },
  'Case 3 input': function (browser) {
    browser
      .url('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered')
      .assert.title('Tryit Editor v3.5')
      .frame(null)
      .frame(0)
      .pause(5000)
      .assert.elementPresent("/html/body/h2")
      .end();
  }
};