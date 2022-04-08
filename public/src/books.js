function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id);
  return findAuthor
};

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id);
  return findBook
};

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const notBorrowedCurrently = books.filter((book) => book.borrows[0].returned === true);
  return [borrowed, notBorrowedCurrently];
};

function getBorrowersForBook(book, accounts) {
  let borrowList = [];
  
  //shorten book.borrows
	let borrows = book.borrows;
  
  //for each borrow -
	borrows.forEach((borrow) => {
      
      //look for each account -
		accounts.forEach((account) => {
          
          //if that account id matches
			if(account.id === borrow.id){
              
              //and if the account and borrow value match
				account.returned = borrow.returned;
              //push the account to the borrow list
				borrowList.push(account);
              
			}
		});
	});
	return borrowList.slice(0,10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
