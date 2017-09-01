module.exports = {
  '@tags': ['W3school'],
  'Case 1 input': function (browser) {
    browser
      .url('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered')
      .waitForElementVisible('body', 3000)
      .assert.title('Tryit Editor v3.5')
      .frame(null)
      .frame(0)
      .pause(1000)
      .assert.elementPresent("body > ul > li:nth-child(3)")
      .end();
  }
};