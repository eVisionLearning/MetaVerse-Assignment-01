var persons = ["Naveed Farooqi", "Mumtaz Malik", "Sheraz Ahmed"];
document.write('<ul>');
persons.forEach(m => document.write(`<li>Assalamo.Alaikum, Mr. ${m}, you are invited at dinner on 8 Oct 2022.</li>`));
document.write('</ul>');

var indexOfPersonCantAttendDinner = persons.indexOf('Sheraz Ahemd');

document.write(`<p>Mr. ${persons[indexOfPersonCantAttendDinner]} refuse to join dinner due to unavailability.</p> <br>`);
persons[indexOfPersonCantAttendDinner] = "Kamran Abbas";

// 2nd Time Inviting
document.write('<p>2nd Invitation Message</p>');

document.write('<ul>');
persons.forEach(m => document.write(`<li>Assalamo.Alaikum, Mr. ${m}, you are invited at dinner on 8 Oct 2022.</li>`));
document.write('</ul>');

document.write(`<p>Alhamdolillah, I found a bigger dinner table.</p>`);
// adding one new guest to starting of the list/array
persons.unshift('Jamal Khan');
//or using concat
//persons = ['Jamal Khan'].concat(persons);

// adding person in middle of array
persons.splice(persons.length / 2, 0, 'Usman Khalid');

// adding person at end of array
persons.append('Ahmed Bilal');

document.write('Last Invitation Message');
document.write('<ul>');
persons.forEach(m => document.write(`<li>Assalamo.Alaikum, Mr. ${m}, you are invited at dinner on 8 Oct 2022.</li>`));
document.write('</ul>');