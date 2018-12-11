function sendDBRequest(myInit, handler){
	var xhr = new XMLHttpRequest();
	var method = myInit.method.toUpperCase()
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