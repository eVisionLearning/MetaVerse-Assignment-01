var users = ['Abdul', 'Majeed', 'Admin', 'Daniyal', 'Naveed'];

// will not execute because users array is not empty
if (users.length == 0) {
    document.write('We need to find some users');
}

// removing all users form the list
users.length = 0;

if(users.length == 0){
    document.write('We need to find some users');
}