path = require("path")
chai = require("chai")
jsdom = require("jsdom").JSDOM
sinon = require("sinon")
Promise = require("bluebird")
sinonChai = require("sinon-chai")
sinonPromise = require("sinon-as-promised")(Promise)

chai
.use(sinonChai)

## src = /Users/foo/cypress/packages/driver/src
global.src = path.resolve("src")
global.expect = chai.expect

## create jsdom and setup browser globals
global.window = new jsdom('').window
global.document = window.document

beforeEach ->
  @sandbox = sinon.sandbox.create()

afterEach ->
  @sandbox.restore()
