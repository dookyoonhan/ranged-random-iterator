/**
 * Created by dk on 2018-11-07.
 */

var iterate = function (start, end, groupSize) {    // start/end index, how many elems in a single group

  var cursor = start                              // starting index
//  var len = end - start + 1
//  var currentGroup = ( start / groupSize ) | 0  // group number where current cursor is on. starts from 0.

  var indexList = []                              // make Index Array
  for (var i=0; i<=end; i++) {
    indexList.push(i)
  }

  return function () {
    if (cursor === end+1) return null           // if iterated all, return null (end!)

    var num = groupSize - cursor % groupSize    // how many nums in the current group
    if ( Math.floor(cursor/groupSize) == Math.floor(end/groupSize) )
        num = end % groupSize - cursor % groupSize + 1

    var i = Math.floor(Math.random() * num)     // index

    var picked = indexList[cursor + i]          // selection

    var tmp = indexList[cursor]                 // first elem in the scope
    indexList[cursor] = picked                  // first index = picked one
    indexList[cursor + i] = tmp                 // picked one index = first index element
    cursor++

    return picked
  }
}

module.exports = iterate;