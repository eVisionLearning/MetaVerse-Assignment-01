var friends = ["Kamran Abbas","Mudassir","Mohsin Zia","Mohsin Ali", "Zaffar Iqbal", "Naveed Farooqi"];

// using inline foreach loop
friends.forEach(m => console.info(m));
// or using for loop and displaying in ordered list
document.write('<ol>');
for (var i = 0; i < friends.length; i++) {
    document.write(`<li>${friends[i]}</li>`);
}
document.write('</ol>');