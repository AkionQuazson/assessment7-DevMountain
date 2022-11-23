//Runtime O(n^2)

const addToZero = (arr) => {
    for (i = 0; i < arr.length; i++) { 
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }   
    }
    return false;
}

console.log(addToZero([1, 2, 3, -2]));
console.log(addToZero([28, 43, -12, 30, 4, 0, 12]));