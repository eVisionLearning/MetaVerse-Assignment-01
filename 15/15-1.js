var persons = ["Naveed Farooqi", "Mumtaz Malik", "Sheraz Ahmed"];
document.write('<ul>');
persons.forEach(m => document.write(`<li>Assalamo.Alaikum, Mr. ${m}, you are invited at dinner on 8 Oct 2022.</li>`));
document.write('</ul>');

var personCantAttendDinner = "Sheraz Ahmed";
// removing sheraz from list 
persons = persons.filter(m => m != personCantAttendDinner);

// adding new person Kamran Abbas for invitation
persons.push("Kamran Abbas");
document.write('<br>New Invitation Message to new Persons.');
document.write('<ul>');
persons.forEach(m => document.write(`<li>Assalamo.Alaikum, Mr. ${m}, you are invited at dinner on 8 Oct 2022.</li>`));
document.write('</ul>');


