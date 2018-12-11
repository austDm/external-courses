function domCategoriesClear () {
	var wrapperDomCategories = document.querySelector('.types');
	while (wrapperDomCategories.firstChild) {
		wrapperDomCategories.removeChild(wrapperDomCategories.firstChild);
	}
}