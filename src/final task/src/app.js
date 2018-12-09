var __DBBooks = [];
var __DBFilters = [];
var __DBCategories = []
var historyStore = [];
var Store = {};

Store.addedBooks = [];

import addBookForm from './views/addBookForm.js';
import booksUpdate from './controllers/booksUpdate.js';
import categoriesUpdate from './controllers/categoriesUpdate.js';
import filtersUpdate from './controllers/filtersUpdate.js';

var buttonAdd = document.querySelector('button');
buttonAdd.addEventListener('click', () => addBookForm(Store, historyStore));

booksUpdate ('https://rsu-library-api.herokuapp.com/books', __DBBooks, Store, historyStore);
filtersUpdate ('https://rsu-library-api.herokuapp.com/filters', __DBFilters, Store);
categoriesUpdate ('https://rsu-library-api.herokuapp.com/categories', __DBCategories, Store);