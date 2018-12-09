export default function addBookForm(Store, historyStore) {
	var backGr = document.createElement('div');
	document.body.appendChild(backGr);
	backGr.className = 'darkness';

	var wrapperAdd = document.createElement('div');
	document.body.appendChild(wrapperAdd);
	wrapperAdd.className = 'wrapperAdd';
	
	var addForm = document.createElement('form');
	wrapperAdd.appendChild(addForm);
	addForm.id = 'newBookForm';

	var addDiv1 = document.createElement('div');
	addDiv1.innerHTML = 'Author\'s firstname: ';
	addForm.appendChild(addDiv1);

	var addInputAuthorFName = document.createElement('input');
	addForm.appendChild(addInputAuthorFName);
	addInputAuthorFName.setAttribute('type', 'text');
	addInputAuthorFName.setAttribute('required', '');
	addInputAuthorFName.setAttribute('maxlength', '15');	

	var addDiv2 = document.createElement('div');
	addDiv2.innerHTML = 'Author\'s lastname: ';
	addForm.appendChild(addDiv2);

	var addInputAuthorLName = document.createElement('input');
	addForm.appendChild(addInputAuthorLName);
	addInputAuthorLName.setAttribute('type', 'text');
	addInputAuthorLName.setAttribute('required', '');
	addInputAuthorLName.setAttribute('maxlength', '15');	

	var addDiv3 = document.createElement('div');
	addDiv3.innerHTML = 'Categories (use commas): ';
	addForm.appendChild(addDiv3);

	var addInputCategories = document.createElement('input');
	addForm.appendChild(addInputCategories);
	addInputCategories.setAttribute('type', 'text');
	addInputCategories.setAttribute('required', '');
	addInputCategories.setAttribute('maxlength', '25');

	var addDiv4 = document.createElement('div');
	addDiv4.innerHTML = 'Price, $: ';
	addForm.appendChild(addDiv4);	

	var addInputPrice = document.createElement('input');
	addForm.appendChild(addInputPrice);
	addInputPrice.setAttribute('type', 'number');
	addInputPrice.setAttribute('required', '');
	addInputPrice.setAttribute('max', '9999');


	var addDiv5 = document.createElement('div');
	addDiv5.innerHTML = 'Book cover (URL): ';
	addForm.appendChild(addDiv5);

	var addInputCover = document.createElement('input');
	addForm.appendChild(addInputCover);
	addInputCover.setAttribute('type', 'url');
	addInputCover.setAttribute('required', '');
	addInputCover.setAttribute('maxlength', '100');

	var addDiv6 = document.createElement('div');
	addDiv6.innerHTML = 'Rate (from 1 to 5): ';
	addForm.appendChild(addDiv6);

	var addInputRate = document.createElement('input');
	addForm.appendChild(addInputRate);
	addInputRate.setAttribute('type', 'text');
	addInputRate.setAttribute('pattern', '[1-5]');
	addInputRate.setAttribute('required', '');

	var addDiv7 = document.createElement('div');
	addDiv7.innerHTML = 'Title: ';
	addForm.appendChild(addDiv7);

	var addInputTitle = document.createElement('input');
	addForm.appendChild(addInputTitle);
	addInputTitle.setAttribute('type', 'text');
	addInputTitle.setAttribute('required', '');
	addInputTitle.setAttribute('maxlength', '15');	

	var addResetButton = document.createElement('input');
	addForm.appendChild(addResetButton);
	addResetButton.setAttribute('type', 'reset');
	addResetButton.setAttribute('value', 'Reset fields');

	var addSubmitButton = document.createElement('input');
	addForm.appendChild(addSubmitButton);
	addSubmitButton.setAttribute('type', 'submit');
	addSubmitButton.setAttribute('value', 'Add Book');



	backGr.addEventListener('click', function (){
		document.body.removeChild(this);
		document.body.removeChild(wrapperAdd);
	});


	addForm.addEventListener('submit', 
		function(){
			var newBook = new Book(
					addInputAuthorFName.value,
					addInputAuthorLName.value, 
					addInputCategories.value.split(','),
					+addInputPrice.value,
					addInputCover.value,
					addInputRate.value,
					addInputTitle.value
				)
			Store.addedBooks.push(newBook);
			domBooksFill (newBook, Store);
			Store.allBooks.push(Store.addedBooks[Store.addedBooks.length - 1]);
			setIdArrayElements(Store.allBooks, 'book');
			Store.sortedRecentBooks = sortByUpdate(Store.allBooks);
			Store.sortedPopularBooks = sortByRate(Store.allBooks);
			Store.sortedFreeBooks = sortFreeBooks(Store.allBooks);
			document.body.removeChild(backGr);
			document.body.removeChild(wrapperAdd);
			var history = new History(newBook);
			domHistoryFill (history);
			historyUpdate (history, historyStore);
		}
	);
}

import Book from './../models/book.js';
import History from './../models/history.js';
import domBooksFill from './../views/domBooksFill.js';
import domHistoryFill from './../views/domHistoryFill.js';
import setIdArrayElements from './../utils/setIdArrayElements.js';
import sortByRate from './../store/sortByRate.js';
import sortByUpdate from './../store/sortByUpdate.js';
import sortFreeBooks from './../store/sortFreeBooks.js';
import historyUpdate from './../controllers/historyUpdate.js';