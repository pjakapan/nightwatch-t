var host = 'http://127.0.0.1:3000/';

module.exports = {
  'Input Empty Value': function (client) {
    client
      .url(host)
      .useXpath()
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar+123@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar+123@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar+234@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar+234@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar+test1@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar+test1@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar+regression.test.11.29.2011@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar+regression.test.11.29.2011@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foobar@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foobar@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : foo.bar@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'foo.bar@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input Email : f.o.o.b.a.r@gmail.com': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserEmail"]')
      .setValue('//*[@id="inputUserEmail"]', 'f.o.o.b.a.r@gmail.com')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input all fields : 12345': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserName"]')
      .clearValue('//*[@id="inputUserEmail"]')
      .clearValue('//*[@id="inputUserFullname"]')
      .clearValue('//*[@id="inputUserAge"]')
      .clearValue('//*[@id="inputUserLocation"]')
      .clearValue('//*[@id="inputUserGender"]')
      .setValue('//*[@id="inputUserName"]', '12345')
      .setValue('//*[@id="inputUserEmail"]', '12345')
      .setValue('//*[@id="inputUserFullname"]', '12345')
      .setValue('//*[@id="inputUserAge"]', '12345')
      .setValue('//*[@id="inputUserLocation"]', '12345')
      .setValue('//*[@id="inputUserGender"]', '12345')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input all fields : /--+-': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserName"]')
      .clearValue('//*[@id="inputUserEmail"]')
      .clearValue('//*[@id="inputUserFullname"]')
      .clearValue('//*[@id="inputUserAge"]')
      .clearValue('//*[@id="inputUserLocation"]')
      .clearValue('//*[@id="inputUserGender"]')
      .setValue('//*[@id="inputUserName"]', '/--+-')
      .setValue('//*[@id="inputUserEmail"]', '/--+-')
      .setValue('//*[@id="inputUserFullname"]', '/--+-')
      .setValue('//*[@id="inputUserAge"]', '/--+-')
      .setValue('//*[@id="inputUserLocation"]', '/--+-')
      .setValue('//*[@id="inputUserGender"]', '/--+-')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input all fields : 12354/--+-': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserName"]')
      .clearValue('//*[@id="inputUserEmail"]')
      .clearValue('//*[@id="inputUserFullname"]')
      .clearValue('//*[@id="inputUserAge"]')
      .clearValue('//*[@id="inputUserLocation"]')
      .clearValue('//*[@id="inputUserGender"]')
      .setValue('//*[@id="inputUserName"]', '12354/--+-')
      .setValue('//*[@id="inputUserEmail"]', '12354/--+-')
      .setValue('//*[@id="inputUserFullname"]', '12354/--+-')
      .setValue('//*[@id="inputUserAge"]', '12354/--+-')
      .setValue('//*[@id="inputUserLocation"]', '12354/--+-')
      .setValue('//*[@id="inputUserGender"]', '12354/--+-')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
  },
  'Input all fields : abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ': function (client) {
    client
      .useXpath()
      .clearValue('//*[@id="inputUserName"]')
      .clearValue('//*[@id="inputUserEmail"]')
      .clearValue('//*[@id="inputUserFullname"]')
      .clearValue('//*[@id="inputUserAge"]')
      .clearValue('//*[@id="inputUserLocation"]')
      .clearValue('//*[@id="inputUserGender"]')
      .setValue('//*[@id="inputUserName"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .setValue('//*[@id="inputUserEmail"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .setValue('//*[@id="inputUserFullname"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .setValue('//*[@id="inputUserAge"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .setValue('//*[@id="inputUserLocation"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .setValue('//*[@id="inputUserGender"]', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
      .pause(1000)
      .click('//*[@id="btnAddUser"]')
      .pause(1000)
      .acceptAlert()
      .pause(2000)
      .end();
  }
};