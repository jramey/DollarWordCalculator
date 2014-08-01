describe('dollar word homepage', function() {
  it('poston should have value of $.99', function() {
    browser.get('app/index.html');

    element(by.model('word')).sendKeys('poston');
    expect(element(by.binding('wordValue')).getText()).toEqual('$.99');

    expect(true).toEqual(true);
  });

  // add other tests

  
});