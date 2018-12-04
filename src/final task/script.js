var id = 0;

function Book (cover, nam, author, rate, views, addYear, price) {
	this.cover = cover;
	this.nam = nam;
	this.author = author;
	this.rate = rate;
	this.views = views;
	this.addYear = addYear;
	this.price = price;
	this.id = id;
	var that = this;
	id += 1;

	var book = document.createElement('div');
	
 	var parentElem = document.getElementById('wrapperbooks');
	parentElem.appendChild(book);
	book.className = 'books';
	book.classList.add('b' + that.id);

	var cov = document.createElement('div');
	book.appendChild(cov);
	cov.className = 'cover';
	cov.style.background = 'url(' + cover + ') top left/cover';
	cov.addEventListener('click', function(){
		that.views += 1;
		info.innerHTML = 'views: ' + that.views + ' price:' + that.price + '$' + ' updated:' + that.addYear;
	});

	var nameBook = document.createElement('h3');
	book.appendChild(nameBook);
	nameBook.className = 'name';
	nameBook.innerHTML = nam;

	var auth = document.createElement('span');
	book.appendChild(auth);
	auth.className = 'author';
	auth.innerHTML = 'by ' + author;
	
	var starsWrapper = document.createElement('div');
	book.appendChild(starsWrapper);
	starsWrapper.className = 'rate';

	for (var i = 0; i < 5; i++) {
		var star = document.createElement('div');
		star.className = 'star';
		star.classList.add('b' + books.length);
		starsWrapper.appendChild(star);
		star.addEventListener('click', 
			function (event) {
				var target = event.target;
				Book.prototype.rateRefresh(that, target, starsWrapper);
			}
		);
		if (i + 1 <= rate) {
			star.classList.add('active');
		}
	}

	star = document.querySelectorAll('.star.b' + books.length);

	starsWrapper.addEventListener('click', 
		function (event) {
			var target = event.target;
			if (target.classList.contains('star')) {
		      	for (i = 0; i < 5; i++){
					if (target === star[i]) {
				  		var count = i;
				  		break;				  		
				  	}
				}
				for (i = 0; i < 5; i++) {
				  	if (i <= count) {
				  		star[i].classList.remove('oncursor');
				  		star[i].classList.add('active');
				  	} else {
				  		star[i].classList.remove('active', 'oncursor');
				  	}
				}
			}
		}
	);

	starsWrapper.addEventListener('mouseover', 
		function (event) {
			
			var target = event.target;
			if (target.classList.contains('star')) {
			    for (var i = 0; i < 5; i++){
					if (target === star[i]) {
				  		var n = i;
				  	}
				}
				for (i = 0; i < 5; i++) {
				  	if (i <= n) {
				  		star[i].classList.add('oncursor');
				  	} else {
				  		star[i].classList.remove('oncursor');
				  	}
				}
			}
		}
	);

	starsWrapper.addEventListener('mouseout', function() {
			for (var i = 0; i < 5; i++) {
			  	star[i].classList.remove('oncursor');
			}
		}
	);

	var info = document.createElement('span');
	book.appendChild(info);
	info.className = 'views';
	info.innerHTML = 'views: ' + that.views + '  price:' + that.price + '$' + ' updated:' + that.addYear;
}

Book.prototype.rateRefresh = function (obj, target, starsWrapper) {
	for (var j = 0; j < 5; j++) {
		if (starsWrapper.childNodes[j] === target) {
			obj.rate = j + 1;
			break;
		}
	}
};

var books = [];

var book1 = new Book('https://images-na.ssl-images-amazon.com/images/I/51TYJDHEJSL._AC_UL320_SR248,320_.jpg',
		'Jewels of Nizam', 'Geeta Devi', 3, 20, 2011, 19.5);
books.push(book1);
var book2 = new Book('https://b.zmtcdn.com/data/pictures/6/4000236/65f5b0154f1824897086b882a7060f8a_featured_v2.jpg',
		'Cakes & Bakes', 'Sanjeev Kapoor', 1, 4303, 2013, 22.3);
books.push(book2);
var book3 = new Book('https://images-na.ssl-images-amazon.com/images/I/51FqIlv4TaL._SX258_BO1,204,203,200_.jpg',
		'Jamies Kitchen', 'Jamie Oliver', 5, 3054, 2018, 70.1);
books.push(book3);
var book4 = new Book('https://www.freebiefindingmom.com/wp-content/uploads/2015/07/Cheap-meals-for-large-families-pin.jpg',
		'Inexpensive Family Meals', 'Simon Holst', 3, 3000, 2013, 110);
books.push(book4);
var book5 = new Book('https://images-na.ssl-images-amazon.com/images/I/51z%2BXZgMFtL._SX384_BO1,204,203,200_.jpg',
		'Paleo Slow Cooking', 'Chrissy Gower', 2, 302, 2001, 5.3);
books.push(book5);
var book6 = new Book('https://www.betterreading.com.au/wp-content/uploads/2014/10/9781921382192-195x298.jpg',
		'Cook Like an Italian', 'Tobie Puttock', 3, 22, 2000, 0);
books.push(book6);
var book7 = new Book('https://images-na.ssl-images-amazon.com/images/I/51BiwDk0f3L._SX367_BO1,204,203,200_.jpg',
		'Indian Cooking', 'Geeta Devi', 3, 15, 2007, 30.2);
books.push(book7);
var book8 = new Book('https://images-na.ssl-images-amazon.com/images/I/910r6WKtPfL.jpg',
		'Jamie Does', 'Jamie Oliver', 1, 345, 2011, 0);
books.push(book8);
var book9 = new Book('https://images-na.ssl-images-amazon.com/images/I/61AkWIb6ArL._SX258_BO1,204,203,200_.jpg',
		'Jamies italy', 'Jamie Oliver', 2, 7, 2018, 90.7);
books.push(book9);
var book10 = new Book('https://images.gr-assets.com/books/1474585768l/31146564.jpg',
		'Vegetables Cookbook', 'Matthew Biggs', 5, 332, 2011, 22.3);
books.push(book10);

var menu = document.querySelector('.wrapper_menu');
var menuItems = document.querySelectorAll('.menu li');
var domBooks = document.querySelectorAll('.books');
var wrapperDomBooks = document.querySelector('#wrapperbooks');

function fill () {
	for (i = 0; i < domBooks.length; i++) {
			wrapperbooks.appendChild(domBooks[i]);
	}
}

function clear () {
	for (i = 0; i < domBooks.length; i++) {
		wrapperbooks.removeChild(domBooks[i]);
	}
}

function setMenuClass () {
	for (j = 0; j < 4; j++) {
		if (menuItems[j] === this) {
			menuItems[j].classList.add('menu_active');
			continue;
		}
		menuItems[j].classList.remove('menu_active');
	}
}

for (i = 0; i < 4; i++) {
	menuItems[i].addEventListener('click', setMenuClass);
}

function domFilter(event) {
	target = event.target;
	filter(target);
}

function filter(target) {
	if (target === menuItems[0]) {
		fill();
	}
	if (target === menuItems[1]) {
		fill();
		clear();
		books.sort(function(a, b){
			if (a.addYear > b.addYear) {
				return -1;
			} else return 1;
		});
		for (i = 0; i < books.length; i++) {
			for (j = 0; j < domBooks.length; j++){
				if(domBooks[j].classList.contains('b' + books[i].id)) {
					wrapperbooks.appendChild(domBooks[j]);
				}
			}
		}
	}
	if (target === menuItems[2]) {
		fill();
		clear();
		books.sort(function(a, b){
			if (a.views > b.views) {
				return -1;
			} else return 1;
		});
		for (i = 0; i < books.length; i++) {
			for (j = 0; j < domBooks.length; j++){
				if(domBooks[j].classList.contains('b' + books[i].id)) {
					wrapperbooks.appendChild(domBooks[j]);
				}
			}
		}
	}
	if (target === menuItems[3]) {
		fill();
		clear();
		for (i = 0; i < books.length; i++) {
			if(books[i].price === 0){
				for (j = 0; j < domBooks.length; j++){
					if(domBooks[j].classList.contains('b' + books[i].id)) {
						wrapperbooks.appendChild(domBooks[j]);
					}
				}
			}
		}
	}
}

var count = 0;
function search () {
	var arrDomBooks = document.querySelectorAll('.books');
	var nowDomBooks = document.querySelector('#wrapperbooks');	
	var sortbooks = books.slice();

	sortbooks.sort(
		function(a, b){
			if (a.nam.toLowerCase() < b.nam.toLowerCase()) {
				return -1;
			} else {
				return 1;
			}
		}
	);
	
	for (i = 0; i < domSearch.value.length; i++) {
		for (j = 0; j < sortbooks.length; j++) {
			if (sortbooks[j] !== undefined && sortbooks[j].nam[i].toLowerCase() !== domSearch.value[i].toLowerCase()) {
				delete sortbooks[j];
			}
		}
	}
	for (i = 0; i < arrDomBooks.length; i++) {
		nowDomBooks.removeChild(arrDomBooks[i]);
	}
	for (i = 0; i < sortbooks.length; i++) {
		if (sortbooks[i] !== undefined) {
			for (j = 0; j < arrDomBooks.length; j++) {
				if (arrDomBooks[j].classList.contains('b' + sortbooks[i].id)) {
					nowDomBooks.appendChild(arrDomBooks[j]);
				}
			}
		}
	}
}

function globalSearch () {
	if (domSearch.value.length > count) {
		search();
	} else {
		var menuActive = document.querySelector('.menu_active');
		filter(menuActive);
		search ();
	}
	count = domSearch.value.length;
}

menu.addEventListener('mouseup', domFilter);

var domSearch = document.querySelector('.search');
domSearch.addEventListener('input', globalSearch);

var buttonAdd = document.querySelector('button');
buttonAdd.addEventListener('click', addBookForm);

function addBookForm() {
	var backGr = document.createElement('div');
	document.body.appendChild(backGr);
	backGr.className = 'darkness';

	var wrapperAdd = document.createElement('div');
	document.body.appendChild(wrapperAdd);
	wrapperAdd.className = 'wrapperAdd';
	
	var addForm = document.createElement('form');
	wrapperAdd.appendChild(addForm);
	addForm.id = 'newBookForm';
	addForm.setAttribute('action', '#');

	var addDiv1 = document.createElement('div');
	addDiv1.innerHTML = 'Book cover (URL): ';
	addForm.appendChild(addDiv1);

	var addInputCover = document.createElement('input');
	addForm.appendChild(addInputCover);
	addInputCover.setAttribute('type', 'url');
	addInputCover.setAttribute('required', '');
	addInputCover.setAttribute('maxlength', '100');

	var addDiv2 = document.createElement('div');
	addDiv2.innerHTML = 'Title: ';
	addForm.appendChild(addDiv2);

	var addInputTitle = document.createElement('input');
	addForm.appendChild(addInputTitle);
	addInputTitle.setAttribute('type', 'text');
	addInputTitle.setAttribute('required', '');
	addInputTitle.setAttribute('maxlength', '15');	

	var addDiv3 = document.createElement('div');
	addDiv3.innerHTML = 'Author: ';
	addForm.appendChild(addDiv3);

	var addInputAuthor = document.createElement('input');
	addForm.appendChild(addInputAuthor);
	addInputAuthor.setAttribute('type', 'text');
	addInputAuthor.setAttribute('required', '');
	addInputAuthor.setAttribute('maxlength', '15');	

	var addDiv4 = document.createElement('div');
	addDiv4.innerHTML = 'Rate (from 1 to 5): ';
	addForm.appendChild(addDiv4);

	var addInputRate = document.createElement('input');
	addForm.appendChild(addInputRate);
	addInputRate.setAttribute('type', 'text');
	addInputRate.setAttribute('pattern', '[1-5]');
	addInputRate.setAttribute('required', '');

	var addDiv5 = document.createElement('div');
	addDiv5.innerHTML = 'Price, $: ';
	addForm.appendChild(addDiv5);	

	var addInputPrice = document.createElement('input');
	addForm.appendChild(addInputPrice);
	addInputPrice.setAttribute('type', 'number');
	addInputPrice.setAttribute('required', '');
	addInputPrice.setAttribute('max', '9999');

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
			books.push(
				new Book(addInputCover.value, 
					addInputTitle.value, 
					addInputAuthor.value, 
					addInputRate.value, 
					0, 
					2018, 
					addInputPrice.value
				));

			
			domBooks = document.querySelectorAll('.books');
			wrapperDomBooks = document.querySelector('#wrapperbooks');


			var domHistory = document.querySelector('.history');
						
			var newHistory = document.createElement('li');
			domHistory.insertBefore(newHistory, domHistory.firstChild);

			newHistory.insertAdjacentHTML('afterBegin', 'You added <span>' +
				addInputTitle.value + 
				'</span>	by <span>' +
				addInputAuthor.value + 
				'</span> to your <span> Must Read Titles.</span><br> in 2018'
			);

			domHistory = document.querySelector('.history');
			var domAllHistory = document.querySelectorAll('.history li');
			
			if(domAllHistory.length === 4) {
				var last =  domAllHistory[3];
				console.log(domAllHistory);
				domHistory.removeChild(last);
			}
  				 					
			document.body.removeChild(backGr);
			document.body.removeChild(wrapperAdd);
		}
	);
}