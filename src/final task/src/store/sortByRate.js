export default function sortByRate (array) {
	return array.slice().sort(
		function(a, b){
			if (a.rating > b.rating) {
				return -1;
			} else {
				return 1;
			}
		}
	);
}