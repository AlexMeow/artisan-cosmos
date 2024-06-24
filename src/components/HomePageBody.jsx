import React from 'react';
// import popular01 from '..assets/images/';
import Artists from './Artists';
import Gallery from './Gallery';
import { Link, NavLink } from 'react-router-dom';

// Pseudo data
const artworks = [
    {
        id: 1,
        imageUrl: require('../assets/images/5ijrtKutqlxcfCgE7oqORJ.png'),
        title: 'Electron HBD',
        author: 'Chris Meow',
        authorAvatar: require('../assets/images/chris.jpg')
    },
    {
        id: 2,
        imageUrl: require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
        authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')

    },
    {
        id: 3,
        imageUrl: require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'John Doe',
        authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')

    },
    {
        id: 4,
        imageUrl: require('../assets/images/emre-han-akcay-xwgBzMnZLhU-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
        authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')

    },
    {
        id: 5,
        imageUrl: require('../assets/images/Fred.png'),
        title: 'Fred Portrait',
        author: 'Chris Meow',
        authorAvatar: require('../assets/images/chris.jpg')

    },
    {
        id: 6,
        imageUrl: require('../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
        authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')

    },
    {
        id: 7,
        imageUrl: require('../assets/images/MattHBD.png'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
        authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')

    },
    {
        id: 8,
        imageUrl: require('../assets/images/mabi1024x768.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
        authorAvatar: 'https://picsum.photos/200/300'

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
                        <div className="gallery-container">
                            <div className="heading-section">
                                <h4><em>Latest</em> Artworks</h4>
                            </div>
                            <Gallery artworks={artworks} />
                        </div>
                        {/* ***** Gallery End ***** */}

                        {/* ***** Most Popular Start ***** */}
                        <Artists />
                        {/* ***** Most Popular End ***** */}


                        {/* ***** Gaming Library Start ***** */}
                        {/* <div className="gaming-library">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                    <h4><em>Your Gaming</em> Library</h4>
                                </div>
                                <div className="item">
                                    <ul>
                                        <li><img src={require('../assets/images/game-01.jpg')} alt="" className="templatemo-item" /></li>
                                        <li><h4>Dota 2</h4><span>Sandbox</span></li>
                                        <li><h4>Date Added</h4><span>24/08/2036</span></li>
                                        <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                                        <li><h4>Currently</h4><span>Downloaded</span></li>
                                        <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <ul>
                                        <li><img src={require('../assets/images/game-02.jpg')} alt="" className="templatemo-item" /></li>
                                        <li><h4>Fortnite</h4><span>Sandbox</span></li>
                                        <li><h4>Date Added</h4><span>22/06/2036</span></li>
                                        <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                                        <li><h4>Currently</h4><span>Downloaded</span></li>
                                        <li><div className="main-border-button"><a href="#">Donwload</a></div></li>
                                    </ul>
                                </div>
                                <div className="item last-item">
                                    <ul>
                                        <li><img src={require('../assets/images/game-03.jpg')} alt="" className="templatemo-item" /></li>
                                        <li><h4>CS-GO</h4><span>Sandbox</span></li>
                                        <li><h4>Date Added</h4><span>21/04/2036</span></li>
                                        <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                                        <li><h4>Currently</h4><span>Downloaded</span></li>
                                        <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="main-button">
                                    <a href="profile.html">View Your Library</a>
                                </div>
                            </div>
                        </div> */}
                        {/* ***** Gaming Library End ***** */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBody;
