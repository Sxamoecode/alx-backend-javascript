const assert = require('assert');
const { it, describe } = require('mocha')
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it(`checking for rounded number`, function() {
    const res = calculateNumber(6, 7);
    assert.strictEqual(res, 13);
  });
  it(`checking for rounded number`, function() {
    const res = calculateNumber(4.4, 5.2);
    assert.strictEqual(res, 9);
  });
  it(`checking for rounded number`, function() {
    const res = calculateNumber(1.6, 2.7);
    assert.strictEqual(res, 5);
  });
  it(`checking for rounded number`, function() {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it(`checking for rounded number`, function() {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });
  it(`checking for rounded number`, function() {
    const res = calculateNumber(-2.4, -2.3);
    assert.strictEqual(res, -4);
  });
});
