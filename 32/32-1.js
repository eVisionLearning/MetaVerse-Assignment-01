var current_users = ['admin', 'majeed', 'tariq', 'kamran', 'adnan'];
var new_users = ['kamran', 'farid', 'aslam', 'adnan'];

for (var i = 0; i < new_users.length; i++) {
    if (current_users.filter(m => m.toLowerCase() == new_users[i].toLowerCase()).length) {
        console.log(`User Name: ${new_users[i]} not available, Try new name`);
    } else {
        console.log(`User Name: ${new_users[i]} is available`);
    }
}