var pizzas = ['Meat Pizza', 'Hawain Pizza', 'Veggie Pizza', 'BBQ Chicken Pizza'];

for (var i = 0; i < pizzas.length; i++) {
    console.log(`${i+1}. ${pizzas[i]}<br>`);
}

for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]}<br>`);
}

console.log('I like BBQ Chicken Pizza.');
console.log('I really Love this pizza.');
console.log('I often go to buy this pizza');