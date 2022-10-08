function show_magicians(data) {
    data.forEach(m => console.log(m));
}

function make_great() {
    return magicians.map(m => `Great ${m}`);
}

var magicians = ['Soren Sorenson Adams', 'Arthur Hartopp', 'Jack Inglis', 'Paul Vucic'];
var greatMagicians = make_great();

console.log('Orignal Name');
show_magicians(magicians);
console.log('Name with Great.');
show_magicians(greatMagicians);