// Big O of 0(1)

// Hash function used to get an index to place items into the table
const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey  % size 
}

// Hashtable class definition, the size is the number of buckets used
// those buckets get filled with an es6 Map() 
class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  // Add an item into the table 
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }
  // Remove an item from the table
  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }
  // Lookup an item with its key
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const paragraph = 'There is a dog called spot. He is a good dog, spot has many spots, some may say more than any other dog. We love dogs. Dogs are great. Such a great dog

// set all characters to lower chase, then remove all none A-Z
const paragraphWithoutPunction =
  paragraph.toLowerCase().replace('/[^A-Za-z]/g', ' ');

// split on the space to get an array of words
const words =
  paragraphWithoutPunction.split(' ');

// instantiate a new hashtable
let hashTable = new HashTable();

// set the most frequent word default to the first word
let currentMostFrequentWord = words[0];

// loop over each word
words.forEach((word) => {
  
  // get the number of times the word has been used already, if not in the table init to zero
  const value = hashTable.search(word) || 0
  
  // update / insert into the table with + 1
  hashTable.insert(word, value + 1);
  
  // if this new current value is greater  than the currently recorded most frequent word, swap it to the new one.
  if (hashTable.search(word) > hashTable.search(currentMostFrequentWord)) {
    currentMostFrequentWord = word;
  };
  
})