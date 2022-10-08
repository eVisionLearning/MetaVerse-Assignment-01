console.log(describe_city('Islamabad', 'Pakistan'));
console.log(describe_city('Rawalpindi', 'Pakistan'));
console.log(describe_city('Lahore', 'Pakistan'));
console.log(describe_city('Makka', 'Saudi Arabia'));

function describe_city(city, country) {
    return `${city}, ${country}`;
}