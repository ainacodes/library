function Book(title, author, totalPages, currentPage) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.currentPage = currentPage;
}

function addBookToLibrary() {
  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const totalPages = document.getElementById('total-pages').value;
  const currentPage = document.getElementById('current-page').value;

  const book = new Book(bookTitle, bookAuthor, totalPages, currentPage);
  displayBook(book);
}

function displayBook(book) {
  const containerBook = document.getElementById('container-book');

  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  const totalPagesElem = document.createElement('p');
  const currentPageElem = document.createElement('p');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  totalPagesElem.textContent = book.totalPages;
  currentPageElem.textContent = book.currentPage;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(totalPagesElem);
  bookCard.appendChild(currentPageElem);

  containerBook.appendChild(bookCard);
}

function resetForm() {
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
  document.getElementById('total-pages').value = '';
  document.getElementById('current-page').value = '';
}

const addBookButton = document.getElementById('add-book-button');
const saveButton = document.getElementById('save-button');
const cancelButton = document.getElementById('cancel-button');

addBookButton.addEventListener('click', () => {
  document.getElementById('book-form').style.display = 'block';
  resetForm();
});

cancelButton.addEventListener('click', () => {
  document.getElementById('book-form').style.display = 'none';
});

saveButton.addEventListener('click', (event) => {
  addBookToLibrary();
  document.getElementById('book-form').style.display = 'none';
});
