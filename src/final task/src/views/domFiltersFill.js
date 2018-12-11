function domFiltersFill (filterObj) {
    var filter = document.createElement('li');
 	var parentElem = document.querySelector('.menu');
    
    parentElem.appendChild(filter);
	filter.innerHTML = filterObj.title;
	if (filterObj.active) filter.className = 'menu_active';
}