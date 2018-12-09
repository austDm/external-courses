export default function domCategoriesFill (categoryObj) {
	var marker = document.createElement('div');
	var category = document.createElement('li');
 	var parentElem = document.querySelector('.types');

	parentElem.appendChild(category);
	category.innerHTML = categoryObj.title;

 	category.appendChild(marker);
 	marker.style.background = categoryObj.color;
}