export default function SendDBRequest(method, url, body, handler){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		
		if (this.readyState != 4) return;

		if (this.status != 200) {
			console.log( 'ошибка: ' + (this.status ? this.statusText : 'повторите позже') );
			return;
		};
		if (this.readyState === 4) handler(xhr);
	}
		
	if (method.toUpperCase() === 'GET') {
		xhr.open(method.toUpperCase(), url);
		xhr.send();

	} else if (method.toUpperCase() === 'POST') {
		xhr.open(method.toUpperCase(), url);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(body);
	};
}