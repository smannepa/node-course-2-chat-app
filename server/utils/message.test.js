var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var text = 'Some message';
    var from = 'Chamu';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'test';
    var latitude = 1;
    var longitude = 2;
    var url = 'https://www.google.com/maps?q=1,2';
    var location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
});
