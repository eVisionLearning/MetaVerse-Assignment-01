var places = ['Makka', 'Madina', 'Palestine', 'UAE', 'Afghanistan', 'Turkmenistan', 'Uzbekistan', 'Kazakhstan'];

document.write('Original Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
document.write('Alphabets order: asc<br>');
[...places].sort().forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
document.write('Original Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
document.write('Alphabetically order: desc<br>');
[...places].sort().reverse().forEach(m => document.write(`${m}<br>`))
document.write('<hr/>');
document.write('Original Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
// reversing array
places.reverse();
document.write('Reverse Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
// reversing again to get orignal/initial order
places.reverse();
document.write('Orignal/Initial Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
// sorting array alphabetically
places.sort();
document.write('Orignal Arry with Alphabetically Order<br>');
places.forEach(m => document.write(`${m}<br>`));
document.write('<hr/>');
// reversing order (aphabetically desc)
places.reverse();
document.write('Alphabetically Order: desc<br>');
places.forEach(m => document.write(`${m}<br>`));