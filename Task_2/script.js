let sentence = prompt("Enter a sentence:");

const findLargestWord = () => {
    let words = sentence.split(" ");
    let largestWord = words[0];
        
    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    
    return largestWord;
}

alert(findLargestWord());