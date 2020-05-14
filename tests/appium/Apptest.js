describe('SCOPEFYPSENTIMENTBOT', () => {
    // Adding time out to make sure the app is load prior to test is run
    beforeEach(() => {
        $("~app-root").waitForDisplayed(11000, false)
    });
    
    it('Login', () => {
      $('~login').$('~emailField').setValue("123@123.com");
      $('~login').$('~passwordField').setValue("passwd");
      // $(~'login').$('~loginButton').click();
      // expect(element.getText()).toBe('Welcome to React Native!')
      expect({}).toBe({})
    });
});