describe('dollar word homepage', function() {
  it('buzzy is added to the dollar words', function() {
    browser.get('app/index.html');

    element(by.model('word')).sendKeys('buzzy');
    expect(element(by.binding('wordValue')).getText()).toEqual('$1.00');
    expect(element.all(by.repeater('word in bank')).count()).toEqual(1);
    expect(element(by.repeater('word in bank').row(0).column("{{ word }}")).getText()).toEqual("buzzy");
  });

   it('text turns green for dollar words', function() {
    browser.get('app/index.html');

    element(by.model('word')).sendKeys('buzzy');
    expect(element(by.binding('wordValue')).getCssValue("color")).toEqual("rgba(138, 181, 13, 1)");
  });
});