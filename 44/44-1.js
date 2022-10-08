make_sandwich(['Lettucee', 'Egg']);
make_sandwich(['Lettucce', 'Cheese']);
make_sandwich(['Spread', 'Cheese', 'Vegetables', 'Fish']);
function make_sandwich(items) {
    console.log('Sandwich order receieved with following incredients.');
    for (let index = 0; index < items.length; index++) {
        console.log(`${index + 1}. ${items[index]}`);
    }
}