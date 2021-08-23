exports.min = function min(array) {
    let min = 0;
    if (array && array.length > 0) {
        min = Math.min.apply(Math, array);
        return min;
    }

    return min;
};

exports.max = function max(array) {
    let max = 0;
    if (array && array.length > 0) {
        max = Math.max.apply(Math, array);
        return max;
    }

    return max;
};

exports.avg = function avg(array) {
    let avg = 0;
    let total = 0;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        avg = total / array.length;
    }

    return avg;
};
