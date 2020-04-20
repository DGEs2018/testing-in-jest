const googleDatabase = [
	'cats.com',
	'souprecipes.com',
	'flowers.com',
	'animals.com',
	'catpictures.com',
	'myfavouritecats.com'
];

//maybe if somebody is looking for cats, return something similar

const googleSearch = (searchInput) => {
	const matches = googleDatabase.filter((webpage) => {
		return webpage.includes(searchInput);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cats'));
