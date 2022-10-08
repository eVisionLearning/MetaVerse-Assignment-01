console.log(describe_city('Islamabad'));
console.log(describe_city('Rawalpindi'));
console.log(describe_city('Lahore'));
console.log(describe_city('Makka', 'Saudi Arabia'));

function describe_city(city, country = 'Pakistan') {
    return `${city} is in ${country}`;
}