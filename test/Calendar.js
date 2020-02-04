assert = require("assert");
Calendar = require("../Calendar.js").Calendar


describe("A calculator", function () {
        var result = new Calendar();

        describe("calender", function () {
            it("should return something", function () {
              let results =
              (result.availableTimes([
                [
                  360, 450
                ],
                [
                  500, 775
                ],
                [
                  1190, 1300
                ]
              ],
              [
                [
                  660, 780
                ]
              ],
                300,
                1200,
                35))
                assert.equal(0,0);
            });
        });
});
