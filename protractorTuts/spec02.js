describe('Protractor Demo App', () => {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('dobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', () =>{
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('hsould add one and two', () => {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', () => {
        // Fill this in.
        expect(latestResult.getText()).toEqual('10');
    });

    it('should read the value from an input', () => {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
});
