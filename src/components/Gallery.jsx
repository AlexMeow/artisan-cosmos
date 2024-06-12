import React from 'react';

// Pseudo data
const artworks = [
    {
        id: 1,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 2,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    // Add more artwork objects
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="heading-section">
                <h4><em>Latest</em> Artworks</h4>
            </div>
            <div className="gallery">
                {artworks.map((artwork) => (
                    <div key={artwork.id} className="gallery-item">
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <div className="overlay">
                            <div className="text">
                                <h4>{artwork.title}</h4>
                                <p>{artwork.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;