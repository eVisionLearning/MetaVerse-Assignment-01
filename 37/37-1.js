make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Zain ul Abideen');

function make_shirt(size = 'Large', message = 'I love JavaScript') {
    if (size == 'Small') {
        console.log(`Size: SM ${message}`);
    }
    if (size == 'Medium') {
        console.log(`Size: MD ${message}`);
    }
    if (size == 'Large') {
        console.log(`Size: LG ${message}`);
    }
}