import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import { Link } from 'react-router-dom';

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

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="heading-section">
                <h4><em>Latest</em> Artworks</h4>
            </div>
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
        </div>
    );
};

export default Gallery;