function createWebComponent (execlib) {
  'use strict';
  var conversion = require('allex_objectarrayconversionlowlevellib');

  execlib.lib.arryToHash = conversion.arryToHash;
  execlib.lib.arryOfarrysToArryOfHashes = conversion.arryOfarrysToArryOfHashes;
  execlib.lib.hashArryToPlainArry = conversion.hashArryToPlainArry;
  execlib.lib.hashToArray = conversion.hashToArray;
  execlib.lib.arryReduce = conversion.arryReduce;
}

module.exports = createWebComponent;
