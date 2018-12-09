export default function domHistoryClear () {
	var domHistory = document.querySelector('.history');
	while (domHistory.firstChild) {
		domHistory.removeChild(domHistory.firstChild);
	}
}