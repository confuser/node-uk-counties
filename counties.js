var england = require('./lib/countries/england')
  , northernIreland = require('./lib/countries/northern-ireland')
  , scotland = require('./lib/countries/scotland')
  , wales = require('./lib/countries/wales')
  , all = england.concat(northernIreland, scotland, wales)

all.sort()

module.exports = all

module.exports.england = england
module.exports.northernIreland = northernIreland
module.exports.scotland = scotland
module.exports.wales = wales
