var name = 'Abdul Majeed';
var jobTitle = 'Developer & IT Trainer';
var age = 36;
var friends = ['Adnan', 'Kamran', 'Usman', 'Naveed', 'Mumtaz'];

if(name != 'Hasnain'){
    console.log(`My name is not ${name}  using !=`);
}

if (age > 30) {
    console.log('My age is greater than 30  using > ');
}

if(jobTitle != 'Doctor'){
        console.log(`Job Title not equal to ${jobTitle}`);
}

if(name.toUpperCase() == 'ABDUL MAJEED'){
        console.log(`My name is ${name} using ==`);
}

if(friends.includes('Kamran')){
        console.log('Kamran is my friend using include in array');
}

if (!friends.includes('Saleem')) {
    console.log('Saleem is not my friend using !include in array');
}

if ('Kamran' in friends) {
    console.log('Kamran is my friend using obj in array');
}

if (!('Saleem' in friends)) {
    console.log('Saleem is not my friend using ! obj in array');
}

if (friends.indexOf('Kamran') > 0) {
    console.log('Kamran is my friend using indexOf > -1');
}

if (friends.indexOf('Saleem') == -1) {
    console.log('Saleem is not my friend using indexOf == -1');
}

if(age <= 40){
        console.log('Age is less or equal to 40 using <=');
}

if(age <=40 && age >= 30){
        console.log('Age is less than or equal to 40 but greater than or eqal to 30 using <= & >=');
}

if(age == 30 || age == 36){
        console.log('Age is 30 or 36 using == and ||');
}