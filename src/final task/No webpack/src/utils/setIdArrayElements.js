function setIdArrayElements(array, clas) {
	var count = 1000;
	array.forEach(
		function(element){
			element.id = clas + count++;
		}
	);
}