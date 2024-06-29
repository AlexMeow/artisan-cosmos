import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import { Link } from 'react-router-dom';


const Gallery = ({ artworks }) => {
    return (
        <div className="gallery">
            {artworks.map((artwork) => (
                <div key={artwork.id} className="gallery-item">
                    <Link to={`/artwork/${artwork.id}`}>
                        <img src={artwork.imgUrls[0]} alt={artwork.name} />
                        <div className="overlay">
                            <div className="text">
                                <h4>{artwork.name}</h4>
                                <p><img className="author-avatar" src={artwork.artist.avatarUrl}></img> {artwork.artist.name}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Gallery;