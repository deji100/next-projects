export const fetchCars = async () => {
	const headers = {
		'X-RapidAPI-Key': '6daf6e53camsh2aaadfbc2a38254p198774jsn124b2ad08a15',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=10', {
		headers: headers
	});

	const result = await response.json()

	return result;
}