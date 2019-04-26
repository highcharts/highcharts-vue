import H from 'highcharts'

function doCopy (copy, original, copyArray) {
  // Callback function to iterate on array or object elements
  function callback (value, key) {
    // Copy the contents of objects
    if (H.isObject(value, !copyArray) &&
      !H.isClass(value) &&
      !H.isDOMElement(value)
    ) {
      copy[key] = doCopy(copy[key] || H.isArray(value) ? [] : {}, value, copyArray)
    } else {
      // Primitives are copied over directly
      copy[key] = original[key]
    }
  }

  if (H.isArray(original)) {
    original.forEach(callback)
  } else {
    H.objectEach(original, callback)
  }
  return copy
}

const copyObject = function (obj, copyArray) {
  return doCopy({}, obj, copyArray)
}

export { copyObject }
