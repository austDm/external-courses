function View(controller) {
	const view = {};

	const updateAllBooks = () => renderBooks(controller.getSortLibrary('titles'));

	const updateFilters = () => renderFilters(controller.getFilters());

	const updateHistory = () => renderAllHistory(controller.getHistory());

	const updateCatgories = () => renderCategories(controller.getCategories());

	const renderAllHistory = allHistory => {
		const renderHistory = historyObj => {
			domHistory = document.querySelector('.history');
			const newHistory = document.createElement('li');
			
			domHistory.insertBefore(newHistory, domHistory.firstChild);
			const date = new Date(historyObj.book.updatedAt);
			newHistory.insertAdjacentHTML('afterBegin', 'You added <span>' +
				historyObj.book.title + 
				'</span>	by <span>' +
				historyObj.book.author.firstName + ' ' + historyObj.book.author.lastName + 
				'</span> to your <span> Must Read Titles.</span><br> in ' + parseDate(date)
			);

			domHistory = document.querySelector('.history');
			const domAllHistory = document.querySelectorAll('.history li');
			if(domAllHistory.length === 4) {
				domHistory.removeChild(domAllHistory[3]);
			}
		}
		allHistory.forEach(renderHistory);
	}

	const renderCategories = categories => {
		const renderCategory = categoryObj => {
			const marker = document.createElement('div');
			const category = document.createElement('li');
		 	const parentElem = document.querySelector('.types');

			parentElem.appendChild(category);
			category.innerHTML = categoryObj.title;

		 	category.appendChild(marker);
		 	marker.style.background = categoryObj.color;
		}
		categories.forEach(renderCategory);
	}

	const renderFilters = filters => {
		const renderFilter = filterObj => {
		    const filter = document.createElement('li');
		 	const parentElem = document.querySelector('.menu');
		    
		    parentElem.appendChild(filter);
			filter.innerHTML = filterObj.title;
			if (filterObj.active) filter.className = 'menu_active';
		}
		filters.forEach(renderFilter);
		view.setFilterEventListeners();
	}

	const renderBooks = library => {
		const renderBook = bookObj => {
			const book = document.createElement('div');
		 	const parentElem = document.getElementById('wrapperbooks');
			parentElem.appendChild(book);
			book.className = 'books';
			book.setAttribute('id', bookObj.id);
			
			const cov = document.createElement('div');
			book.appendChild(cov);
			cov.className = 'cover';
			cov.style.background = 'url(' + bookObj.image_url + ') top center/cover';

			const nameBook = document.createElement('h3');
			book.appendChild(nameBook);
			nameBook.className = 'name';
			nameBook.innerHTML = bookObj.title;

			const auth = document.createElement('span');
			book.appendChild(auth);
			auth.className = 'author';
			auth.innerHTML = 'by ' + bookObj.author.firstName + ' ' + bookObj.author.lastName;
			
			const starsWrapper = document.createElement('div');
			book.appendChild(starsWrapper);
			starsWrapper.className = 'rate';


			for (let i = 0; i < 5; i++) {
				const star = document.createElement('div');
				star.className = 'star';
				starsWrapper.appendChild(star);
				if (i + 1 <= bookObj.rating) {
					star.classList.add('active');
				}
			}
			const stars = starsWrapper.children;
			view.setStarsEventListeners (book, stars, controller)

			const info = document.createElement('span');
			book.appendChild(info);
			info.className = 'info';
			const date = new Date(bookObj.updatedAt);
			info.innerHTML = 'price:' + bookObj.cost + '$,' + '<br /> updated:' + parseDate(date);
		}

		library.forEach(renderBook);
	}

	const removeBooks = () => {
		const wrapperDomBooks = document.querySelector('#wrapperbooks');
		while (wrapperDomBooks.firstChild) {
			wrapperDomBooks.removeChild(wrapperDomBooks.firstChild);
		}
	}

	view.setStarsEventListeners = (book, stars, controller) => {
		book.addEventListener('click', 
			event => {
				const target = event.target;
				if (target.classList.contains('star')) {
			      	for (let i = 0; i < 5; i++){
						if (target === stars[i]) {
					  		var count = i;
					  		break;				  		
					  	}
					}
					for (let i = 0; i < 5; i++) {
					  	if (i <= count) {
					  		stars[i].classList.remove('oncursor');
					  		stars[i].classList.add('active');
					  	} else {
					  		stars[i].classList.remove('active', 'oncursor');
					  	}
					}
					controller.getSortLibrary('titles').forEach(
						element => {
							if (element.id === book.getAttribute('id')) {
								element.rating = count + 1;
							}
						}
					);
					controller.sortLibrary('popular');
				}
			}
		);

		book.addEventListener('mouseover', 
			event => {
				const target = event.target;
				
				if (target.classList.contains('star')) {
				    for (let i = 0; i < 5; i++){
						if (target === stars[i]) {
					  		var n = i;
					  		break;
					  	}
					}
					for (let i = 0; i < 5; i++) {
					  	if (i <= n) {
					  		stars[i].classList.add('oncursor');
					  	} else {
					  		stars[i].classList.remove('oncursor');
					  	}
					}
				}
			}
		);

		book.addEventListener('mouseout', () => {
				for (let i = 0; i < 5; i++) {
				  	stars[i].classList.remove('oncursor');
				}
			}
		);
	}

	view.setFilterEventListeners = () => {
		const filters = document.querySelectorAll('.menu li');
		const wrapperFilters = document.querySelector('.menu');

		wrapperFilters.addEventListener('click', 
			event => {
				const target = event.target;
				let count = 0;
				let filterTarget = false;
				for (let i = 0, length = filters.length; i < length; i++) {
					if (filters[i] === target) {
						filterTarget = true;
						break;
					}
				}
				if (filterTarget) {
					for (let i = 0; i < filters.length; i++) {
						if (filters[i] === target) {
							filters[i].classList.add('menu_active');
							count = i + 1;
						} else {
							filters[i].classList.remove('menu_active');
						}
					}
					controller.getFilters().forEach(
						function(element) {
							if (element.id === count) {
								element.active = true;
							} else {
								element.active = false;
							}
						}
					);
				}
			}
		);

		wrapperFilters.addEventListener('click', 
			event => {
				const target = event.target;
				switch (target.innerHTML) {
					case 'All Books':
						removeBooks();
						renderBooks(controller.getSortLibrary('titles'));
						break;
					case 'Most Recent':
						removeBooks();
						renderBooks(controller.getSortLibrary('recent'));
						break;
					case 'Most Popular':
						removeBooks();
						renderBooks(controller.getSortLibrary('popular'));
						break;
					case 'Free Books':
						removeBooks();
						renderBooks(controller.getSortLibrary('free'));
						break;
				}
				const search = document.querySelector('.search');
				search.value = '';
			}
		);
	}

	view.setSearchEventListener = () => {
		const domSearch = document.querySelector('.search');
		domSearch.addEventListener('input', 
			() => {
				const domFilters = document.querySelectorAll('.menu li');
				const searchValue = domSearch.value.toLowerCase();
				let searchArray = [];
				for (var i = 0; i < domFilters.length; i++) {
					if (domFilters[i].classList.contains('menu_active')) break;
				}
				if (i === 0) {
					searchArray = controller.getSortLibrary('titles').slice();
				} else if (i === 1) {
					searchArray = controller.getSortLibrary('recent').slice();
				} else if (i === 2) {
					searchArray = controller.getSortLibrary('popular').slice();
				} else if (i === 3) {
					searchArray = controller.getSortLibrary('free').slice();
				}

				searchArray = searchArray.filter(
					book => book.title.toLowerCase().indexOf(searchValue) !== -1
				);
				removeBooks();
				renderBooks(searchArray);

				var names = document.querySelectorAll('.name');
				names.forEach(
					title => {
						const name = title.innerHTML.toLowerCase();
						const newTitleStart = title.innerHTML.slice(0, name.indexOf(searchValue));
						const newTitleEnd = title.innerHTML.slice(name.indexOf(searchValue) + domSearch.value.length);
						const middle = '<span class = "searchSymb">' + 
							title.innerHTML.slice(name.indexOf(searchValue), name.indexOf(searchValue) + 
							domSearch.value.length) + '</span>';
						title.innerHTML = newTitleStart + middle + newTitleEnd;
					}
				)
			}
		);
	}

	function renderAddBookForm() {
		const backGr = document.createElement('div');
		document.body.appendChild(backGr);
		backGr.className = 'darkness';

		const wrapperAdd = document.createElement('div');
		document.body.appendChild(wrapperAdd);
		wrapperAdd.className = 'wrapperAdd';
		
		const addForm = document.createElement('form');
		wrapperAdd.appendChild(addForm);
		addForm.id = 'newBookForm';

		const addDiv1 = document.createElement('div');
		addDiv1.innerHTML = 'Author\'s firstname: ';
		addForm.appendChild(addDiv1);

		const addInputAuthorFName = document.createElement('input');
		addForm.appendChild(addInputAuthorFName);
		addInputAuthorFName.setAttribute('type', 'text');
		addInputAuthorFName.setAttribute('required', '');
		addInputAuthorFName.setAttribute('maxlength', '15');
		addInputAuthorFName.id = 'FName';	

		const addDiv2 = document.createElement('div');
		addDiv2.innerHTML = 'Author\'s lastname: ';
		addForm.appendChild(addDiv2);

		const addInputAuthorLName = document.createElement('input');
		addForm.appendChild(addInputAuthorLName);
		addInputAuthorLName.setAttribute('type', 'text');
		addInputAuthorLName.setAttribute('required', '');
		addInputAuthorLName.setAttribute('maxlength', '15');
		addInputAuthorLName.id = 'LName';		

		const addDiv3 = document.createElement('div');
		addDiv3.innerHTML = 'Categories (use commas): ';
		addForm.appendChild(addDiv3);

		const addInputCategories = document.createElement('input');
		addForm.appendChild(addInputCategories);
		addInputCategories.setAttribute('type', 'text');
		addInputCategories.setAttribute('required', '');
		addInputCategories.setAttribute('maxlength', '25');
		addInputCategories.id = 'Category';	

		const addDiv4 = document.createElement('div');
		addDiv4.innerHTML = 'Price, $: ';
		addForm.appendChild(addDiv4);	

		const addInputPrice = document.createElement('input');
		addForm.appendChild(addInputPrice);
		addInputPrice.setAttribute('type', 'number');
		addInputPrice.setAttribute('required', '');
		addInputPrice.setAttribute('max', '9999');
		addInputPrice.id = 'Price';	

		const addDiv5 = document.createElement('div');
		addDiv5.innerHTML = 'Book cover (URL): ';
		addForm.appendChild(addDiv5);

		const addInputCover = document.createElement('input');
		addForm.appendChild(addInputCover);
		addInputCover.setAttribute('type', 'url');
		addInputCover.setAttribute('required', '');
		addInputCover.setAttribute('maxlength', '100');
		addInputCover.id = 'Cover';

		const addDiv6 = document.createElement('div');
		addDiv6.innerHTML = 'Rate (from 1 to 5): ';
		addForm.appendChild(addDiv6);

		const addInputRate = document.createElement('input');
		addForm.appendChild(addInputRate);
		addInputRate.setAttribute('type', 'text');
		addInputRate.setAttribute('pattern', '[1-5]');
		addInputRate.setAttribute('required', '');
		addInputRate.id = 'Rate';

		const addDiv7 = document.createElement('div');
		addDiv7.innerHTML = 'Title: ';
		addForm.appendChild(addDiv7);

		const addInputTitle = document.createElement('input');
		addForm.appendChild(addInputTitle);
		addInputTitle.setAttribute('type', 'text');
		addInputTitle.setAttribute('required', '');
		addInputTitle.setAttribute('maxlength', '15');	
		addInputTitle.id = 'Title';

		const addResetButton = document.createElement('input');
		addForm.appendChild(addResetButton);
		addResetButton.setAttribute('type', 'reset');
		addResetButton.setAttribute('value', 'Reset fields');

		const addSubmitButton = document.createElement('input');
		addForm.appendChild(addSubmitButton);
		addSubmitButton.setAttribute('type', 'submit');
		addSubmitButton.setAttribute('value', 'Add Book');
	}

	view.setAddBookFormEventListener = () => {
		const buttonAdd = document.querySelector('button');
		buttonAdd.addEventListener('click', 
			() => {
				renderAddBookForm();
				const bG = document.querySelector('.darkness');
				const wrapperAdd = document.querySelector('.wrapperAdd');
				const addForm = document.querySelector('#newBookForm');
				const FName = document.querySelector('#FName');
				const LName = document.querySelector('#LName');
				const Category = document.querySelector('#Category');
				const Price = document.querySelector('#Price');
				const Cover = document.querySelector('#Cover');
				const Rate = document.querySelector('#Rate');
				const Title = document.querySelector('#Title');

				bG.addEventListener('click', () => {
					document.body.removeChild(bG);
					document.body.removeChild(wrapperAdd);
				});


				addForm.addEventListener('submit', 
					() => {
						document.body.removeChild(bG);
						document.body.removeChild(wrapperAdd);
						const Book = controller.getBookClass();
						const History = controller.getHistoryClass();
						const newBook = new Book(
							FName.value,
							LName.value, 
							Category.value.split(','),
							+Price.value,
							Cover.value,
							Rate.value,
							Title.value
						)
						controller.addToAllLibrary(newBook);
						removeBooks();
						renderBooks(controller.getSortLibrary('titles'));

						const filters = document.querySelectorAll('.menu li');
						for (let i = 0, length = filters.length; i < length; i++) {
							if (i === 0) {
								filters[i].classList.add('menu_active');
							} else {
								filters[i].classList.remove('menu_active');
							}
						}
										
						setIdArrayElements(controller.getSortLibrary('titles').slice(- 1), 'book');

						controller.sortLibrary('recent');
						controller.sortLibrary('free');
						controller.sortLibrary('popular');

						const history = new History(newBook);
						controller.addToHistory(history);
						renderAllHistory(controller.getHistory())
					}
				);
			}
		);
	}
	
	view.init = function () {
		controller.loadBooks(updateAllBooks, updateHistory);
		controller.loadFilters(updateFilters);
		controller.loadCategories(updateCatgories);
		view.setSearchEventListener();
		view.setAddBookFormEventListener();
	}

	return view;
}