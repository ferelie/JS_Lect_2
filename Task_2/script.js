let sentence = prompt("Enter a sentence:");

let words = sentence.split(" ");
let largestWord = words[0];

for (let word of words) {
    if (word.length > largestWord.length) {
        largestWord = word;
    }
}

alert("The longest word in the sentence is: " + largestWord);
