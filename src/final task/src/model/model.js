function Model (){
	const model = {};
	model.addedBooks = [];
	model.allHistory = [];

	model.BookSorts = {
		sortByRate: array => {
			return array.slice().sort(
				(a, b) => {
					if (a.rating > b.rating) {
						return -1;
					} else {
						return 1;
					}
				}
			);
		},

		sortByTitles: array => {
			return array.slice().sort(
				(a, b) => {
					if (a.title.toLowerCase() < b.title.toLowerCase()) {
						return -1;
					} else {
						return 1;
					}
				}
			);
		},

		sortByUpdate: array => {
			return array.slice().sort(
				(a, b) => {
					if (a.updatedAt > b.updatedAt) {
						return -1;
					} else {
						return 1;
					}
				}
			);
		},

		sortFreeBooks: array => {
			const sortedArr = [];
			array.slice().forEach(
				element => {
					if (element.cost === 0) sortedArr.push(element);
				}
			)
			return sortedArr;
		},
	}

	model.Book = class Book {
	    constructor(firstname, lastName, categories, cost, image_url, rating, title) {
		    this.author = {};
		    this.author.firstName = firstname;
		    this.author.lastName = lastName;
		    this.categories = categories;
		    this.cost = cost;
		    this.createdAt = this.updatedAt = Date.now();
		    this.image_url = image_url;
		    this.rating = rating;
		    this.title = title;
	    }
	}

	model.History = class History {
	    constructor(book) {
	        this.book = {};
	        this.date = Date.now();
	        Object.assign(this.book, book);
	    }
	}

	model.booksUrl = 'https://rsu-library-api.herokuapp.com/books';
	model.filtersUrl = 'https://rsu-library-api.herokuapp.com/filters';
	model.categoriesUrl = 'https://rsu-library-api.herokuapp.com/categories';

	return model;
}