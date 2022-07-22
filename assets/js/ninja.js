 // MY API KEY AND THE URL
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
	}
};

fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));