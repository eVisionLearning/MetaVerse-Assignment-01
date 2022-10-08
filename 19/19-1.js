var persons = ["Naveed Farooqi", "Mumtaz Malik", "Sheraz Ahmed"];
var indexOfPersonCantAttendDinner = persons.indexOf('Sheraz Ahemd');
persons[indexOfPersonCantAttendDinner] = "Kamran Abbas";
persons.unshift('Jamal Khan');
persons.splice(persons.length / 2, 0, 'Usman Khalid');
persons.push('Ahmed Bilal');

document.write(`We are inviting ${persons.length} people at dinner.`);