

const assert = require("node:assert")
const main = require("../lib/main")

function test() {
  assert.equal(main() === "Hello world")
}

test()
