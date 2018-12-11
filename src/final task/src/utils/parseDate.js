function parseDate (date) {
	return date.toLocaleString ("en-US", 
		{	year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		}
	)
}