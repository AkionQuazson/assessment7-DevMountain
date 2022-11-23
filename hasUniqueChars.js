// Runtime O(n^2)

const hasUniqueChars = (str) => {
    const strToArray = str.split('');
    for (let i = 0; i < strToArray.length; i++) {
        for (let j = i + 1; j < strToArray.length; j++) {
            if (strToArray[i] === strToArray[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Supercalifragile"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));