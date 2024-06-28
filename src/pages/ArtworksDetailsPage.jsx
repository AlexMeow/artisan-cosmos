import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtworkDetails from '../components/ArtworkDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// const artworks = [
//     {
//         id: 1,
//         title: 'Beautiful Landscape',
//         imageUrl: [
//             require('../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg'),
//             require('../assets/images/mabi1024x768.jpg'),
//             require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg')
//         ],
//         description: 'This is a beautiful landscape artwork.',
//         artist: {
//             id: 1,
//             name: 'John Doe',
//             imageUrl: require('../assets/images/chris.jpg'),
//             description: '雷猴啊'
//         }
//     },
//     {
//         id: 2,
//         title: 'HAHAHA',
//         imageUrl: [
//             require('../assets/images/5ijrtKutqlxcfCgE7oqORJ.png'),
//         ],
//         description: 'This is a beautiful landscape artwork.',
//         artist: {
//             id: 1,
//             name: 'John Doe',
//             imageUrl: require('../assets/images/chris.jpg'),
//             description: '雷猴啊'
//         }
//     },
//     // 其他作品
// ];


const ArtworkDetailsPage = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/works/get-all-works");
                const data = await res.json();
                setArtworks(data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };
    
        fetchArtworks();
    }, []);


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