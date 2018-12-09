export default function sortByUpdate (array) {
	return array.slice().sort(
		function(a, b){
			if (a.updatedAt > b.updatedAt) {
				return -1;
			} else {
				return 1;
			}
		}
	);
}