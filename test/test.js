let assert =  require('chai').assert;
let first = require('../app');

describe("First", function(){
    it('first should return hello world', function(){
        assert.equal(first(), "Hello World")
    });
});
