function sortByTitles (array) {
	return array.slice().sort(
		function(a, b){
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1;
			} else {
				return 1;
			}
		}
	);
}