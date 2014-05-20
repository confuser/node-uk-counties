var counties = require('../counties')

require('should')

describe('Counties', function () {

  it('should return counties for England', function () {
    counties.england.length.should.equal(39)
  })

  it('should return counties for Northern Ireland', function () {
    counties.northernIreland.length.should.equal(6)
  })

  it('should return counties for Scotland', function () {
    counties.scotland.length.should.equal(34)
  })

  it('should return counties for Wales', function () {
    counties.wales.length.should.equal(13)
  })

  it('should return all counties', function () {
    counties.length.should.equal(92)
  })

})
