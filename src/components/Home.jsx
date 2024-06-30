import React from 'react';
// import popular01 from '..assets/images/';
import Artists from './Artists';
import Gallery from './Gallery';
import { Link, NavLink } from 'react-router-dom';

// Pseudo data
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

const HomePageBody = () => {
    return (
        <div className="container">
            <div classNameName="row">
                <div className="col-lg-12">
                    <div className="page-content">

                        {/* ***** Banner Start ***** */}
                        <div className="main-banner">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="header-text">
                                        <h6>Welcome To Artisan Cosmos</h6>
                                        <h4><em>Discover</em> Amazing Artworks And <br></br>Talented Artists</h4>
                                        <Link to="/browse" className="main-button">
                                            Browse Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ***** Banner End ***** */}

                        {/* ***** Gallery Start ***** */}
                        {/* 之後會用props傳圖片的資訊進去，固定放八張 */}
                        <div className="general-container">
                            <div className="heading-section">
                                <h4><em>Latest</em> Artworks</h4>
                            </div>
                            <Gallery artworks={artworks} />
                        </div>
                        {/* ***** Gallery End ***** */}

                        {/* ***** Artists Start ***** */}
                        <div className="general-container">
                            <div className="heading-section">
                                <h4><em>Recommended</em> Artists</h4>
                            </div>
                            <Artists />
                            <div className="col-lg-12 d-flex justify-content-center">
                                <Link to="/artists" className="main-button">
                                    Discover More Artists
                                </Link>
                            </div>
                        </div>
                        {/* ***** Artists End ***** */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBody;
