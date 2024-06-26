import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';

const ArtworkDetails = ({ artwork }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-7">
                    <Carousel>
                        {artwork.imageUrl.map((url, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={url}
                                    alt={`${artwork.title} - ${index + 1}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h2 className="mt-3">{artwork.title}</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <img className="artist-image" src={artwork.artist.imageUrl}></img>
                        </div>
                        <div className="col-md-9">
                            <p className="text-muted">by <a href={`/artist/${artwork.artist.id}`}>{artwork.artist.name}</a></p>
                            <p>{artwork.artist.description}</p>
                        </div>
                    </div>


                    <p className="artwork-description">{artwork.description}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-outline-primary main-button">
                            <FontAwesomeIcon icon={faHeart} /> Like
                        </button>
                        <button className="btn btn-outline-secondary secondary-button">
                            <FontAwesomeIcon icon={faStar} /> Favorite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;