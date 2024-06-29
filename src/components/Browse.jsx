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
            title: 'Electron HBD',
            author: 'Chris Meow',
            authorAvatar: require('../assets/images/chris.jpg')
        },
        {
            id: 2,
            imgUrls: [require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg')],
            title: 'Artwork Title 1',
            author: 'Author Name 1',
            authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')
        },
        {
            id: 3,
            imgUrls: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
            title: 'Artwork Title 1',
            author: 'John Doe',
            authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
        },
        {
            id: 4,
            imgUrls: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
            title: 'Artwork Title 1',
            author: 'John Doe',
            authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
        },
        {
            id: 5,
            imgUrls: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
            title: 'Artwork Title 1',
            author: 'John Doe',
            authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
        },
        {
            id: 6,
            imgUrls: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
            title: 'Artwork Title 1',
            author: 'John Doe',
            authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
        },
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