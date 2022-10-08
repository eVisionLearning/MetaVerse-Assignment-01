var animals = ['Buffalo', 'Goat', 'Cow'];

for (var i = 0; i < animals.length; i++) {
    console.log(`${animals[i]}`);
}

for (let i = 0; i < animals.length; i++) {

    if (animals[i] == 'Cow') {
        console.log(`${animals[i]} is a pet animal, with mostly black or white color.`);
    } else if (animals[i] == 'Goat') {
        console.log(`${animals[i]} is a pet animal, with healty milk giving animal.`);
    } else {
        console.log(`${animals[i]} is a pet animal, It is used to get milk for adults and childs.`);
    }
}

console.log('Write common in these animals?');
console.log('All mentioned are great pet and milk giving animals');