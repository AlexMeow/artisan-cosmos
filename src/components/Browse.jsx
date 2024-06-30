import React from "react";
import Gallery from "./Gallery";
import { faUserPlus, faUpload, faPencil, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Browse = () => {

    // TBD: 從後端拉過來的artwork裡面用.find()篩選
    // artworks.find(artwork => artwork.arthurId === artist.id)
    // 現在先用假資料代替
    const artworks = [
        {
            id: 1,
            imgUrls: [require('../assets/images/5ijrtKutqlxcfCgE7oqORJ.png')],
            name: 'Electron HBD',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/chris.jpg')
            }
        },
        {
            id: 2,
            imgUrls: [require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/chris.jpg')
            }
    
        },
        {
            id: 3,
            imgUrls: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/chris.jpg')
            }
    
        },
        {
            id: 4,
            imgUrls: [require('../assets/images/emre-han-akcay-xwgBzMnZLhU-unsplash.jpg')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/animal_chara_radio_penguin.png')
            }
    
        },
        {
            id: 5,
            imgUrls: [require('../assets/images/Fred.png')],
            name: 'Fred Portrait',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/animal_chara_radio_penguin.png')
            }
    
        },
        {
            id: 6,
            imgUrls: [require('../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/animal_chara_radio_penguin.png')
            }
    
        },
        {
            id: 7,
            imgUrls: [require('../assets/images/MattHBD.png')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/animal_chara_radio_penguin.png')
            }
    
        },
        {
            id: 8,
            imgUrls: [require('../assets/images/mabi1024x768.jpg')],
            name: 'Artwork name 1',
            artist: {
                "id": 2,
                "name": "Chris Meow",
                "jobTitle": "UI/UX designer",
                "bio": "# I'm WWW\nHello!000",
                "createdDate": "2024-06-29T13:38:23.000+00:00",
                "uploadWorks": null,
                "followers": null,
                "following": null,
                "avatarUrl": require('../assets/images/animal_chara_radio_penguin.png')
            }
    
        }
        // Add more artwork objects
    ];
    

    return (
        <div className="container mt-5">
            <hr />
            <h2>Artwork Gallery</h2>
            <Gallery artworks={artworks} />
        </div>
    );
}

export default Browse;