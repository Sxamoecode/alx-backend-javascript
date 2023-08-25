const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking for rounded number`, function() {
      const res = calculateNumber("SUM", 1, 3);
      assert.strictEqual(res, 4);
    });
    it(`checking for rounded number`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(res, -1);
    });
    it(`checking for rounded number`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(res, 2);
    });
    it(`checking for rounded number`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(res, 2);
    });
    it(`checking for rounded number`, function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(res, "Error");
    });
    it(`checking for rounded number`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(res, 0.2);
    });
});
