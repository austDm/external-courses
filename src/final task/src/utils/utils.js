function id () {
	let x = 1000;
	return (array, clas) => {
		array.forEach(
			(element) => {
				element.id = clas + x++;
			}
		);
	}
}
const setIdArrayElements = id();

function parseDate (date) {
	return date.toLocaleString ("en-US", 
		{	year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		}
	)
}

function sendDBRequest(myInit, handler){
	const xhr = new XMLHttpRequest();
	const method = myInit.method.toUpperCase()
	xhr.onreadystatechange = function() {
		
		if (this.readyState != 4) return;

		if (this.status != 200) {
			console.log( 'ошибка: ' + (this.status ? this.statusText : 'повторите позже') );
			return;
		};
		if (this.readyState === 4) handler(xhr);
	}
		
	if (method === 'GET') {
		xhr.open(method, myInit.url);
		xhr.send();

	} else if (method === 'POST') {
		xhr.open(method, myInit.url);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(myInit.body);
	};
}