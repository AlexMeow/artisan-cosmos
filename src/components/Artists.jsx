import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

const Artists = () => {
    return (<div className="most-popular">
        <div className="row">
            <div className="col-lg-12">
                <div className="heading-section">
                    <h4><em>Most Popular</em> Right Now</h4>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-01.jpg')} alt="" />
                            <h4>Fortnite<br /><span>Sandbox</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-02.jpg')} alt="" />
                            <h4>PubG<br /><span>Battle S</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-03.jpg')} alt="" />
                            <h4>Dota2<br /><span>Steam-X</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-04.jpg')} alt="" />
                            <h4>CS-GO<br /><span>Legendary</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="item inner-item">
                                        <img src={require('../assets/images/popular-05.jpg')} alt="" />
                                        <h4>Mini Craft<br /><span>Legendary</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                            <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="item">
                                        <img src={require('../assets/images/popular-06.jpg')} alt="" />
                                        <h4>Eagles Fly<br /><span>Matrix Games</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                            <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-07.jpg')} alt="" />
                            <h4>Warface<br /><span>Max 3D</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="item">
                            <img src={require('../assets/images/popular-08.jpg')} alt="" />
                            <h4>Warcraft<br /><span>Legend</span></h4>
                            <ul>
                                <li><i className="fa fa-star"><FontAwesomeIcon icon={faStar} /></i> 4.8</li>
                                <li><i className="fa fa-download"><FontAwesomeIcon icon={faDownload} /></i> 2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link to="/browse" className="main-button">
                            Discover Popular
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}

export default Artists;