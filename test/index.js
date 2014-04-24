var test = require("tape")

var mercuryPerf = require("../index")

test("mercuryPerf is a function", function (assert) {
    assert.equal(typeof mercuryPerf, "function")
    assert.end()
})
