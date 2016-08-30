// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
function hasItem (arr, item) {
  if (arr.indexOf(item) !== -1) {
    return true
  } else {
    return false
  }
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getItemAtIndex (arr, idx) {
  if (arr[idx]) {
    return arr[idx]
  } else {
    return new Error()
  }
}

// replaceItemAtIndex should replace the element at `idx` with `item`
function replaceItemAtIndex (arr, idx, item) {
  if (arr[idx] !== -1) {
    arr[idx] = item
  }
}

// insertItemAtIndex should insert `item` at `idx` without overwriting
// any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
  arr.push(idx, "item")
}

// deleteItemAtIndex should remove the element at `idx` (the array
// should get shorter).
function deleteItemAtIndex (arr, idx) {
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
}

// keys should return an array of the object's property names (keys)
// For example, given {foo: 1, bar: 2} it would return ['foo', 'bar']
function keys (obj) {
}

// values should return an array of the object's own values
// For example, given { foo: 1, bar: 2} it would return [1, 2]
function values (obj) {
}

// zipObject should take two arrays and build them into an object.
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2}
function zipObject (keys, values) {
}

// unzipObject should return an array of arrays, each one a pair
function unzipObject(obj) {
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [ { a: 1 }, { b: 2, c: 3 } ] and { b: 2 }
// it will return:
//   { b: 2, c: 3 }
function findOneByProperty (arr, search) {
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {
}

module.exports = {
  hasItem : hasItem,
  getItemAtIndex : getItemAtIndex,
  replaceItemAtIndex: replaceItemAtIndex,
  insertItemAtIndex: insertItemAtIndex,
  deleteItemAtIndex: deleteItemAtIndex,
  deleteItem: deleteItem,
  keys: keys,
  values: values,
  zipObject: zipObject,
  unzipObject: unzipObject,
  findOneByProperty: findOneByProperty,
  findAll: findAll
}
