import React from 'react';
// import popular01 from '..assets/images/';
import Artists from './Artists';
import Gallery from './Gallery';

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
                                        <h4><em>Discover</em> Amazing Artworks from Talented Artists</h4>
                                        <div className="main-button">
                                            <a href="browse.html">Browse Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ***** Banner End ***** */}
                        
                        {/* ***** Gallery Start ***** */}
                        <Gallery />
                        {/* ***** Gallery End ***** */}

                        {/* ***** Most Popular Start ***** */}
                        <Artists />
                        {/* ***** Most Popular End ***** */}


                        {/* ***** Gaming Library Start ***** */}
                        <div className="gaming-library">
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
                        </div>
                        {/* ***** Gaming Library End ***** */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBody;
