"use strict"

var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('Add nodes', () => {
    beforeAll(done => {
      driver.get('http://localhost/blossom/').then(done);
    });

    afterAll(done => {
      driver.quit().then(done);
    });

    it('should appear in grid when added', done => {
      driver.findElement(By.id('addNodeInput')).sendKeys('First Node Name');
      driver.findElement(By.id('addNodeSubmit')).click();
      driver.findElement(By.id('inputGrid')).then(el => {
        driver.wait(until.elementTextContains(el, 'First Node Name'), 1000).then(done, err => {fail(err)});
      });
    });
});
