exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let p = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < p) {
                p = array[i];
            }
        }
        return p;
    }
};

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let p = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > p) {
                p = array[i];
            }
        }
        return p;
    }
};

exports.avg = function avg(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let p = 0;
        for (let i = 0; i < array.length; i++) {
            p += array[i];
        }
        return p / array.length;
    }
};
