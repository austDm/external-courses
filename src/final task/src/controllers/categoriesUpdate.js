export default function categoriesUpdate(url, __DBCategories, Store){
	var handler = function(request){
		__DBCategories = JSON.parse(request.responseText);
		Store.allCategories = __DBCategories.slice();
				
		Store.allCategories.forEach(function(category) {
	 		domCategoriesFill(category);
		});
	}
	SendDBRequest('GET', url, '', handler)
}


import domCategoriesFill from './../views/domCategoriesFill.js';
import SendDBRequest from './../utils/SendDBRequest.js';