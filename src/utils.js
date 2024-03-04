import H from 'highcharts';

const copyObject = function (original, copyArray) {
    // Initialize the copy based on the original's type
    const copy = H.isArray(original) ? [] : {};

    // Callback function to iterate on array or object elements
    function callback(value, key) {
        // Copy the contents of objects
        if (
            H.isObject(value, !copyArray) &&
            !H.isClass(value) &&
            !H.isDOMElement(value)
        ) {
            copy[key] = copyObject(value, copyArray); // recursive call
        } else {
            // Primitives are copied over directly
            copy[key] = value;
        }
    }

    if (H.isArray(original)) {
        original.forEach((item, index) => callback(item, index));
    } else {
        H.objectEach(original, callback);
    }

    return copy;
};

export { copyObject };
