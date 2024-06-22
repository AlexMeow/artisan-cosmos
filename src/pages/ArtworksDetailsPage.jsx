import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtworkDetails from '../components/ArtworkDetails';
import { useParams } from 'react-router-dom';

const artworks = [
    {
        id: 1,
        title: 'Beautiful Landscape',
        imageUrl: require('../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg'),
        description: 'This is a beautiful landscape artwork.',
        artist: {
            id: 1,
            name: 'John Doe',
            imageUrl: require('../assets/images/chris.jpg'),
            description: '雷猴啊'
        }
    },
    // 其他作品
];

const ArtworkDetailsPage = () => {
    let { id } = useParams();
    let artwork = artworks.find(a => a.id == id);
    return (
        <div>
            <Navbar />
            {artwork ? (<ArtworkDetails artwork={artwork} />) : (
                <div className="container">
                    <div className="page-content d-flex justify-content-center"><h2>Oops! Artwork not found :(</h2></div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default ArtworkDetailsPage;