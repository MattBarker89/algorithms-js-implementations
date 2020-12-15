// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, 
// print "FizzBuzz" instead of the number.

// loop starting at 1 so we dont print zero and >= to make sure we include 100
for (let i = 1; i <= 100; i++) {
  // check both evalutations first as they are the most specfic
  // visible by 3 and 5 with no remainder
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizBuz')
    // else if divisble by 3 only
  } else if (i % 3 === 0) {
    console.log('Fiz')
    // else if divisible by 5 only
  } else if (i % 5 === 0) {
    console.log('Buz')
  } else {
    // else log i
    console.log(i)
  }
}