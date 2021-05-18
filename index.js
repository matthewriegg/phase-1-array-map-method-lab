const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (titleArray) => {titleArray.map(x => x.toTitleCase())
}


console.log(titleCased(tutorials))


// `map()` takes 2 arguments — a callback and the optional context. The callback is
// called for each value in the original array and the modified value is added to a
// new array. Its return value is a new array that is the same length as the
// original array. Using `map()` saves time while making the code simpler and more
// expressive.



// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]


// split and join

// own titleCase function
// used map

// then used map to call function i made up 