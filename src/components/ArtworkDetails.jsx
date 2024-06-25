import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const ArtworkDetails = ({ artwork }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img src={artwork.imageUrl} alt={artwork.title} className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <h2 className="mt-3">{artwork.title}</h2>
                    <div className="row">
                        <div className="col-md-3">
                            {/* TBD: move inline style into .css file */}
                            <img style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }} src={artwork.artist.imageUrl}></img>
                        </div>
                        <div className="col-md-9">
                            <p className="text-muted">by <a href={`/artist/${artwork.artist.id}`}>{artwork.artist.name}</a></p>
                            <p>{artwork.artist.description}</p>
                        </div>
                    </div>

                    {/* TBD: move inline style into .css file */}
                    <p style={{margin: "1rem 0 1rem 0"}}>{artwork.description}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-outline-primary main-button">
                            <FontAwesomeIcon icon={faHeart} /> Like
                        </button>
                        <button className="btn btn-outline-secondary secondary-button">
                            <FontAwesomeIcon icon={faStar} /> Favorite
                        </button>
                    </div>
                    <hr />
                    {/* <div>
            <h5>Artist Information</h5>
            <img style={{borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover"}} src={artwork.artist.imageUrl}></img><span>Name: {artwork.artist.name}</span>
            <a href={`/artist/${artwork.artist.id}`} className="btn btn-primary">View Artist Profile</a>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;