export default function domBooksFill (bookObj, Store) {
	var book = document.createElement('div');
 	var parentElem = document.getElementById('wrapperbooks');
	parentElem.appendChild(book);
	book.className = 'books';
	book.setAttribute('id', bookObj.id);
	
	var cov = document.createElement('div');
	book.appendChild(cov);
	cov.className = 'cover';
	cov.style.background = 'url(' + bookObj.image_url + ') top center/cover';

	var nameBook = document.createElement('h3');
	book.appendChild(nameBook);
	nameBook.className = 'name';
	nameBook.innerHTML = bookObj.title;

	var auth = document.createElement('span');
	book.appendChild(auth);
	auth.className = 'author';
	auth.innerHTML = 'by ' + bookObj.author.firstName + ' ' + bookObj.author.lastName;
	
	var starsWrapper = document.createElement('div');
	book.appendChild(starsWrapper);
	starsWrapper.className = 'rate';


	for (var i = 0; i < 5; i++) {
		var star = document.createElement('div');
		star.className = 'star';
		starsWrapper.appendChild(star);
		if (i + 1 <= bookObj.rating) {
			star.classList.add('active');
		}
	}
	var stars = starsWrapper.children;
	setStarsEventListeners (book, stars, Store)

	var info = document.createElement('span');
	book.appendChild(info);
	info.className = 'info';
	var date = new Date(bookObj.updatedAt);
	info.innerHTML = 'price:' + bookObj.cost + '$,' + '<br /> updated:' + parseDate(date);
}

import setStarsEventListeners from './../views/setStarsEventListeners.js';
import parseDate from './../utils/parseDate.js';