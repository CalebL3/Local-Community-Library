function getTotalBooksCount(books) {
  return books.length
};

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc +1, 0);
};

function getBooksBorrowedCount(books) {
  const booksBorrowed = books.filter((book) => book.borrows[0].returned === false);
  return booksBorrowed.length
};
  
//=====helper function =======
function sorter(arr) {
  arr.sort((function(a,b) {
    return b.count - a.count;
  }));
 }
//========================
function getMostCommonGenres(books) {
  const genres = {};
  //loop through the books and see if that genre count is already made and if not then create one = 1
  books.forEach((book) => {
    genres[book.genre] ? genres[book.genre] += 1 : genres[book.genre] = 1
  });
  
  //create an array using map() so we can mutate the objects to how we want
  //then sort() the new mapped out array from most common to least common
  //the slice the top 5
  const topFiveGenres = Object.keys(genres).map((genre) => {
    return {name: genre, count: genres[genre]}
  })
  sorter(topFiveGenres)
  
  return topFiveGenres.slice(0,5)
};

function getMostPopularBooks(books) {
  //popularity = number of times a book has been borrowed
  //use map() method to mutate our books array of object into an array of objects that we want
  const newArrayOfPopularBooks = books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  }).sort((bookA, bookB) => bookB.count - bookA.count)
  //use sort() method to sort the new mutated array into most borrowed to least borrowed
  //return new array and slice() top 5 books
  return newArrayOfPopularBooks.slice(0,5)
};

function getMostPopularAuthors(books, authors) { 
  const popularResults = [];
  //filter through the books array and check if author.id === books.authorId
  const popularAuthors = books.filter((book) => {
    return authors.find((author) => author.id === book.authorId)
  });
  //loop through the popularAuthors variable
  popularAuthors.forEach((book) => {
    //check if author match
    let author = authors.find((author) => author.id === book.authorId)
    
    //push the full name and count to the result array
    popularResults.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  });
  //sort the array and slice the top 5
  const topFiveAuthors = popularResults.sort((authorA, authorB) => {
    return authorB.count - authorA.count}).slice(0,5);
  
  
 //return new top 5 array
  return topFiveAuthors
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
