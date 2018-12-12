var __DBBooks = [];
var __DBFilters = [];
var __DBCategories = []
var historyStore = [];
var Store = {};

Store.addedBooks = [];

var buttonAdd = document.querySelector('button');
buttonAdd.addEventListener('click', addBookForm);

booksUpdate ('https://rsu-library-api.herokuapp.com/books');
filtersUpdate ('https://rsu-library-api.herokuapp.com/filters');
categoriesUpdate ('https://rsu-library-api.herokuapp.com/categories');