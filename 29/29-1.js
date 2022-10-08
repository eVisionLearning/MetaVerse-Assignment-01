var favorite_fruits = [];
favorite_fruits.push('Apple');
favorite_fruits.push('Cantaloupe');
favorite_fruits.push('Grape');

if(favorite_fruits.filter(m => m == "Apple").length){
    console.log('You really like Apple!');
}

if(favorite_fruits.indexOf('Cantaloupe') > 0){
    console.log('You really like Cantaloupe!');
}

if('Grape' in favorite_fruits){
    console.log('You really like Grape!<br>');
}

if('Peech' in favorite_fruits){
    console.log('You really like Peech!');
}
