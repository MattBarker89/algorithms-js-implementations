let paragraph = 'This is a bunch of words, that have various letters that repeat throughout.';

// Convert all letters to lowercase
paragraph = paragraph.toLowerCase();

// Strip out none A-Z or space characters
paragraph = paragraph.replace(/[^A-Za-z ]/g, '');

// Convert the paragraph into an array of words
const words = paragraph.split(' ');

// Declare a current top word to the first word as a placeholder
let currentTopWord = words[0];

// Declare a most repeated count to 0 so we can compare to this later
let currentMostRepeatCount = 0;

// Loop over each word, we need the word and its current index in the array
words.forEach((word, wordIndex) => {
  // Declare an map - using an object as its will work well for this 
  let map = {}

  // Convert the word into an array of letters and loop over each one
  word.split('').forEach((letter) => {
    // Set the map value for the letter to either the current value +1 or 1 // if its not in there yet
    map[letter] = map[letter] + 1 || 0 + 1;
    // If the current value is higher than the recorded highest repeat.
    // set the current top word to this one and set the current top repeat 
    // score to this one so we can see if we can beat this.
    if (map[letter] > currentMostRepeatCount) {
      currentTopWord = words[wordIndex];
      currentMostRepeatCount = map[letter];
    }
  })
});

console.log(currentTopWord);