
const songs = [
    {
        id: 12,
        displayName: 'Let the hammer fall',
        band: 'HammerFall',
        album: 'Legacy of kings',
        info: {
            length: 4,
            quality: 360,
        },
        platforms:
            [{
                name: 'spotify',
                totalListens: 200000
            },
            {
                name: 'deezer',
                totalListens: 200098
            },
            {
                name: 'apple music',
                totalListens: 500000
            },
            ]
    },
    {
        id: 13,
        displayName: 'Skyfall',
        band: 'Helloween',
        album: 'Helloween',
        info: {
            length: 7,
            quality: 720,
        },
        platforms:
        [{
            name: 'spotify',
            totalListens: 100000
        },
        {
            name: 'spotify',
            totalListens: 400000
        },
        
        ]
    }
        
            ];

 // Nested object and array destructuring  
 
 //assing the first element and declare a variable with the rename structure
 
let {
    displayName: songName,
    band: bandName,
    album: albumName,
    // info: {length: duration},
    platforms:[{
        name: platformName
    }],
} = songs[1];

console.log(bandName.concat(' '+songName).concat(' '+albumName));
console.log(platformName)
console.log()

 //FOR of Iteration and destructuring

 for(const {displayName: songName, band: bandName, info:{length: duration} } of songs) {
          console.log(`${songName} is played by ${bandName} with a song duration of ${duration} minutes`);
          
   }


   //objects passed as a function parameter
   function whichSong({displayName, band}) {
    return `The song is ${displayName} played by ${band}`;
  }

  console.log(whichSong(songs[1]));