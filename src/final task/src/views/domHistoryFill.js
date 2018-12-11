function domHistoryFill (historyObj) {
	var domHistory = document.querySelector('.history');
	var newHistory = document.createElement('li');
	
	domHistory.insertBefore(newHistory, domHistory.firstChild);
	var date = new Date(historyObj.book.updatedAt);
	newHistory.insertAdjacentHTML('afterBegin', 'You added <span>' +
		historyObj.book.title + 
		'</span>	by <span>' +
		historyObj.book.author.firstName + ' ' + historyObj.book.author.lastName + 
		'</span> to your <span> Must Read Titles.</span><br> in ' + parseDate(date)
	);

	domHistory = document.querySelector('.history');
	var domAllHistory = document.querySelectorAll('.history li');
	if(domAllHistory.length === 4) {
		domHistory.removeChild(domAllHistory[3]);
	}
}