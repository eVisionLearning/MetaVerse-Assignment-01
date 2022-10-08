function show_magicians(data) {
    data.forEach(m => console.log(m));
}

var magicians = ['Soren Sorenson Adams', 'Arthur Hartopp', 'Jack Inglis', 'Paul Vucic'];
show_magicians(magicians);

function make_great() {
    magicians = magicians.map(m => `Great ${m}`);
}
make_great();
show_magicians(magicians);