import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import { Link } from 'react-router-dom';


const Gallery = ({ artworks }) => {
    return (
        <div className="gallery">
            {artworks.map((artwork) => (
                <div key={artwork.id} className="gallery-item">
                    <Link to={`/artwork/${artwork.id}`}>
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <div className="overlay">
                            <div className="text">
                                <h4>{artwork.title}</h4>
                                <p><img className="author-avatar" src={artwork.authorAvatar}></img> {artwork.author}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Gallery;