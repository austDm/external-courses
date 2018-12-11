Book.sortFreeBooks  = function (array) {
	var sortedArr = [];
	array.slice().forEach(
		function (element) {
			if (element.cost === 0) sortedArr.push(element);
		}
	)
	return sortedArr;
}