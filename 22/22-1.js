var cities = [];
cities.push({ name: 'Rawalpindi', class: 'ASP.net 6.x' });
cities.push({ name: 'Islamabad', Class: 'Metaverse' });
cities.push({ name: 'Lahore', class: 'AI' });

// With Index error (out of index)
console.log('Index will be out of array, error will be thrown and next code will not execute.')
console.log('Last course is being held in city: ', cities[cities.length].name)

// Error Correction, Maximum Array index will = array length - 1
// as length starts from 1 and array index starts from zero
console.log('Last course is being held in city: ', cities[cities.length - 1].name)