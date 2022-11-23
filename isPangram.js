// Runtime O(n)

const isPangram = (str) => {
    str = str.split('');
    const letterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let pangram = true;
    for (let i = 0; i < letterArr.length; i++) {
        const ltr = letterArr[i];
        if (!str.includes(ltr)) {
            pangram = false;
        }
        if (!pangram && str.includes(ltr.toLowerCase())){
            pangram = true;
        }
        else {
            i = letterArr.length;
        }
    }
    return pangram;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

console.log(isPangram("I like cats, but not mice"));
