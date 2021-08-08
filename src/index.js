
exports.min = function min(array) {

    if  (array) {
        if(array.length===0){
            return 0;
        }
        let minElement = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minElement) {
                minElement = array[i];
            }
        }
        return minElement;
    } else {
        return 0;
    }
}
exports.max = function max(array) {
    if (array){
        if(array.length===0){
            return 0;
        }
        let maxElement = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxElement) {
                maxElement = array[i];
            }
        }
        return maxElement;
    } else  {
        return 0;
    }
}
exports.avg = function avg(array) {  
    if (array){
        if(array.length===0){
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else {
        return 0;
    }
}
