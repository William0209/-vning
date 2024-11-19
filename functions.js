// ===== Enkla Uppgifter =====

// 1. Hälsa en person
// Skriv en arrow function som tar ett namn och returnerar en hälsning.
const greet = (name) => {
  // Exempel: greet("Anna") → "Hello, Anna!"
};

// 2. Kvadraten av ett tal
// Skriv en arrow function som tar ett tal och returnerar dess kvadrat.
const square = (num) => {
  // Exempel: square(4) → 16
};

// 3. Kontrollera om ett tal är jämnt
// Skriv en arrow function som returnerar true om talet är jämnt, annars false.
const isEven = (num) => {
  // Exempel: isEven(4) → true, isEven(7) → false
};

// ===== Medelsvåra Uppgifter =====

// 4. Summera alla tal i en array
// Skriv en arrow function som tar en array av tal och returnerar summan.
const sumArray = (numbers) => {
  // Exempel: sumArray([1, 2, 3, 4]) → 10
};

// 5. Filtrera jämna tal
// Skriv en arrow function som tar en array av tal och returnerar en ny array med endast jämna tal.
const filterEvens = (numbers) => {
  // Exempel: filterEvens([1, 2, 3, 4]) → [2, 4]
};

// 6. Omvandla en array av ord till stora bokstäver
// Skriv en arrow function som tar en array av ord och returnerar en ny array där varje ord är i stora bokstäver.
const toUpperCaseArray = (words) => {
  // Exempel: toUpperCaseArray(["hello", "world"]) → ["HELLO", "WORLD"]
};

// ===== Svåra Uppgifter =====

// 7. Räkna antalet vokaler i en sträng
// Skriv en arrow function som tar en sträng och returnerar antalet vokaler (a, e, i, o, u).
const countVowels = (str) => {
  // Exempel: countVowels("hello world") → 3
};

// 8. Hämta de första bokstäverna från en array av ord
// Skriv en arrow function som tar en array av ord och returnerar en array med den första bokstaven i varje ord.
const getFirstLetters = (words) => {
  // Exempel: getFirstLetters(["apple", "banana", "cherry"]) → ["a", "b", "c"]
};

// 9. Kontrollera om ett ord är ett palindrom
// Skriv en arrow function som tar ett ord och returnerar true om det är ett palindrom (läses likadant baklänges).
const isPalindrome = (word) => {
  // Exempel: isPalindrome("radar") → true, isPalindrome("hello") → false
};

// 10. Sortera en array av objekt efter en egenskap
// Skriv en arrow function som tar en array av objekt och en egenskap och returnerar en ny array sorterad efter den egenskapen.
const sortByProperty = (array, property) => {
  // Exempel: sortByProperty([{ age: 30 }, { age: 20 }, { age: 40 }], "age") → [{ age: 20 }, { age: 30 }, { age: 40 }]
};
