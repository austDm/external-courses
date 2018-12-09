export default function domFiltersClear () {
	var wrapperDomFilters = document.querySelector('.menu');
    
    while (wrapperDomFilters.firstChild) {
		wrapperDomFilters.removeChild(wrapperDomFilters.firstChild);
	}
}