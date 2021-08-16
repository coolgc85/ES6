const song = 
    {
        id: 12,
        displayName: 'Let the hammer fall',
        band: 'HammerFall',
        album: 'Legacy of kings',
        info: {
            length: 4,
            quality: 360,
        },
        printLineUp: function(){
            console.log("lineup....");
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
    };


    //Print lineup method/function from object literal
    song.printLineUp();

    //print a property from object literal
    console.log(song.album);