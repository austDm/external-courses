function categoriesUpdate(url){
	var handler = function(request){
		__DBCategories = JSON.parse(request.responseText);
		Store.allCategories = __DBCategories.slice();
				
		Store.allCategories.forEach(function(category) {
	 		domCategoriesFill(category);
		});
	}
	sendDBRequest(
		{	method: 'GET',
			url: url
		}, handler)
}