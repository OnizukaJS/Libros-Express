//https://www.codewars.com/kata/587e18b97a25e865530000d8

/*An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it. */

function anagramCounter(wordsArray) {
    let counter = 0;
    for (let i = 0; i < wordsArray.length; i++) {
        for (let j = i + 1; j < wordsArray.length; j++) {
            if (wordsArray[i].split("").sort().join("").trim() ===
                wordsArray[j].split("").sort().join("").trim()
            ) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba']));
console.log(anagramCounter(['dell', 'ledl', 'lled', 'cba']));
console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']));