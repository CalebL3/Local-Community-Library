function findAccountById(accounts, id) {
  const findAccount = accounts.find((account) => account.id === id);
  return findAccount
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1, lastName2) =>  lastName1.name.last > lastName2.name.last ? 1 : -1 );
};

function getTotalNumberOfBorrows(account, books) {
  //returns a number of times an accounts id appears in any books "borrow" array 
  let counter = 0
  //use forEach method to loop through and check Id's
  books.forEach((book) => book.borrows.forEach((isBorrowed) => 
    (account.id === isBorrowed.id) && counter++));
  return counter
};

function getBooksPossessedByAccount(account, books, authors) {
  //find what books are held
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  
  //get the details of the book including author
  let bookDetails = booksPossessed.map((detail) => ({ 
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  
  //return the whole object
  return bookDetails;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
