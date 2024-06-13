import React from 'react';

// Pseudo data
const artworks = [
    {
        id: 1,
        imageUrl: require('../assets/images/5ijrtKutqlxcfCgE7oqORJ.png'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 2,
        imageUrl: require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 3,
        imageUrl: require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 4,
        imageUrl: require('../assets/images/emre-han-akcay-xwgBzMnZLhU-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 5,
        imageUrl: require('../assets/images/Fred.png'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 6,
        imageUrl: require('../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 7,
        imageUrl: require('../assets/images/MattHBD.png'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    },
    {
        id: 8,
        imageUrl: require('../assets/images/mabi1024x768.jpg'),
        title: 'Artwork Title 1',
        author: 'Author Name 1',
    }
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