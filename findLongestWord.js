// Runtime O(n)

const findLongestWord = (arr) => {
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}

console.log(findLongestWord(["hi", "hello"]));