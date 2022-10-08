var dictionaries = [];
dictionaries[0] = make_album('Atif Aslam', 'Coke Studio');
dictionaries[1] = make_album('Junaid Jamshaid', 'Dil ki baat');
dictionaries[2] = make_album('Abrar Ul Haq', 'Sar Utha K');
dictionaries[3] = make_album('Nusrat Fateh Ali Khan', 'Magic Touch', 10);

console.log(`Artist : ${dictionaries[0].artistName}, Album : ${dictionaries[0].albumName}`);
console.log(`Artist : ${dictionaries[1].artistName}, Album : ${dictionaries[1].albumName}`);
console.log(`Artist : ${dictionaries[2].artistName}, Album : ${dictionaries[2].albumName}`);
console.log(`Artist : ${dictionaries[3].artistName}, Album : ${dictionaries[3].albumName}, Tracks : ${dictionaries[3].noOfTracks}<br>`);

function make_album(artist_name, album_name, no_of_tracks) {
    return { artist_name, album_name, no_of_tracks };
} 