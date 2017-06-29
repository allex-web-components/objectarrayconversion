(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function _toHash (obj, field, index) {
  obj.ret[field] = obj.arry[index];
}

function arryToHash (fieldslist, arry) {
  if (!fieldslist) throw new Error('fieldslist missing');
  var ret = {}, tohashobj;
  if (!arry || !arry.length) return ret;
  tohashobj = {ret: ret, arry: arry}; 

  fieldslist.forEach (_toHash.bind(null, tohashobj));
  return ret;
}

function arryOfarrysToArryOfHashes (arry, fieldslist){
  var ret = arry.map(arryToHash.bind(null, fieldslist));
  fieldslist = null;
  return ret;
}

function _dopush (obj, key) {
  obj.ret.push (obj.hash[key]);
}

function hashToArray (fieldslist, hash) {
  var ret = [], dopushobj;
  if (!fieldslist || !fieldslist.length) return ret;
  dopushobj = {ret: ret, hash: hash};
  fieldslist.forEach (_dopush.bind(null, dopushobj));
  dopushobj.ret = null;
  dopushobj.hash = null;
  dopushobj = null;
  return ret;
}

function _toPlainArry (obj, hash) {
  Array.prototype.push.apply(obj.ret,hashToArray(obj.fieldslist, hash));
}

function hashArryToPlainArry (hasharry, fieldslist){
  var ret = [], toplainarryobj = {ret: ret, fieldslist: fieldslist};
  hasharry.forEach(_toPlainArry.bind(null, toplainarryobj));
  toplainarryobj.ret = null;
  toplainarryobj.fieldslist = null;
  toplainarryobj = null;
  return ret;
}

function extract (extractobj, index, ret_index) {
  if (index < 0 || index >= extractobj.data_arry.length) throw new Error('Out of range');
  var itm = extractobj.data_arry[index];
  if (extractobj.ret) {
    extractobj.ret[ret_index] = itm;
  }
  //TODO: dovedi ovo u red: isFunction
  if (extractobj.cb) {
    extractobj.cb(itm);
  }
}

function arryReduce (indices, arry, cb) {
  var ret = new Array(indices.length), extractobj = {ret: ret, data_arry: arry, cb: cb};
  indices.forEach (extract.bind(null, extractobj));
  extractobj.ret = null;
  extractobj.data_arry = null;
  extractobj.cb = null;
  extractobj = null;
  return ret;
};

module.exports = {
  arryToHash: arryToHash,
  arryOfarrysToArryOfHashes: arryOfarrysToArryOfHashes,
  hashArryToPlainArry: hashArryToPlainArry,
  hashToArray: hashToArray,
  arryReduce : arryReduce
}


},{}],2:[function(require,module,exports){
require('./index.js')(ALLEX);

},{"./index.js":3}],3:[function(require,module,exports){
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

},{"allex_objectarrayconversionlowlevellib":1}]},{},[2]);
