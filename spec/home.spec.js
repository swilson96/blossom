"use strict"

var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('Home page', () => {
    beforeAll(done => {
      driver.get('http://localhost/blossom/').then(done);
    });

    afterAll(done => {
      driver.quit().then(done);
    });

    it('should have title', done => {
      driver.getTitle().then(function(title) {
        expect(title).toBe('blossom');
        done();
      });
    });

    it('should have heading', done => {
      driver.findElement(By.tagName('h1')).getText().then(heading => {
        expect(heading).toBe('I AM BLOSSOM');
        done();
      });
    });
});
