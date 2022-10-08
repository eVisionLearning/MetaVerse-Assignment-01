var friends = ["Kamran Abbas", "Mudassir", "Mohsin Zia", "Mohsin Ali", "Zaffar Iqbal", "Naveed Farooqi"];

// using inline foreach loop
friends.forEach(m => console.info(`Mr ${m}! Welcome to PIAIC`));
// or using for loop and displaying in unordered list
document.write('<ul>');
for (var i = 0; i < friends.length; i++) {
    document.write(`<li>Mr ${friends[i]}! Welcome to PIAIC</li>`);
}
document.write('</ul>');