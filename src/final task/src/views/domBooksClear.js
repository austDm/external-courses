export default function domBooksClear () {
	var wrapperDomBooks = document.querySelector('#wrapperbooks');
	while (wrapperDomBooks.firstChild) {
		wrapperDomBooks.removeChild(wrapperDomBooks.firstChild);
	}
}