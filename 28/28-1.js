var age = 36;

if (age < 2) {
    document.write('Person is Baby');
} else if (age >= 2 && age < 4) {
    document.write('Person is Toddler');
} else if (age >= 4 && age < 13) {
    document.write('Person is Kid');
} else if (age >= 13 && age < 20) {
    document.write('Person is Teenager');
} else if (age >= 20 && age < 65) {
    document.write('Person is an Adult');
} else if (age >= 65) {
    document.write('Person is Elder');
}