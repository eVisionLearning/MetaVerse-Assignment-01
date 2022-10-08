make_shirt('Small', 'Zain ul Abideen');
make_shirt('Medium', 'Hasnain');
make_shirt('Large', 'Abdul Majeed');

function make_shirt(size, message) {
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