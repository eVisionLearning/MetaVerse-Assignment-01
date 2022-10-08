var cars = [];
cars.push(make_car('Toyota', 'Corolla', [{ name: 'Color', value: 'Silver' }, { name: 'Power', value: '2000cc' }]));
cars.push(make_car('Honda', 'City', [{ name: 'Seating Capacity', value: '4' }, { name: 'Fuel Type', value: 'Diesel' }]));

cars.forEach(m => {
    console.log(`Manufacturer : ${m.manufacturer}, Model Name : ${m.modelName}`);
    m.specs.forEach(n => {
        console.log(`${n.name} : ${n.value}`);
    });
});

function make_car(manufacturer, modelName, specs) {
    var obj = {
        manufacturer,
        modelName,
        specs: specs
    };
    return obj;
}
