function id () {
	var x = 1000;
	return function (array, clas) {
		array.forEach(
			function(element){
				element.id = clas + x++;
			}
		);
	}
}

var setIdArrayElements = id();