exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0
    } else
        return array.reduce((min, current) => min < current ? min : current, 0)
}

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0
    } else
        return array.reduce((max, current) => max > current ? max : current, 0)
}

exports.avg = function avg(array) {
    if (!array || array.length == 0) {
        return 0
    } else
        return array.reduce((sum, current) => sum + current, 0) / array.length;
}
