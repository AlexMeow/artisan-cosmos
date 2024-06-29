import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArtistProfile from '../components/ArtistProfile';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

// const artists = [
//     {
//       id: 1,
//       name: 'John Doe',
//       imageUrl: 'https://picsum.photos/200/300',
//       description: 'Digital artist specialized in surrealism.',
//       followers: 187,
//       memberSince: '2021-03-19'
//     },
//     {
//         id: 2,
//         name: '企鵝',
//         imageUrl: require('../assets/images/animal_chara_radio_penguin.png'),
//         description: '接案中',
//         followers: 9487,
//         memberSince: '2021-03-19'
//       },
//       {
//         id: 3,
//         name: 'Mary Jane',
//         imageUrl: require('../assets/images/messy bun-amico.png'),
//         description: 'Junior UI/UX',
//         followers: 187,
//         memberSince: '2021-03-19'
//       },
//       {
//         id: 4,
//         name: 'John Doe',
//         imageUrl: require('../assets/images/pexels-stefanstefancik-91224.jpg'),
//         description: 'Digital sculptor, 3D printing and modeling.',
//         followers: 187,
//         memberSince: '2021-03-19'
//       },
//       {
//         id: 5,
//         name: 'Chris Meow',
//         imageUrl: require('../assets/images/chris.jpg'),
//         description: '雷猴啊',
//         followers: 187,
//         memberSince: '2015-01-28'
//       },
//       {
//         id: 6,
//         name: 'Unicorn',
//         imageUrl: require('../assets/images/Unicorn with rainbow-cuate.png'),
//         description: "I'm a happy unicorn!",
//         followers: 187,
//         memberSince: '2021-03-19'
//       },
//       {
//         id: 7,
//         name: 'John Doe',
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Digital artist specialized in surrealism.',
//         followers: 187,
//         memberSince: '2021-03-19'
//       },
//       {
//         id: 8,
//         name: '快樂小畫家',
//         imageUrl: require('../assets/images/art_live_painting.png'),
//         description: '自信小畫家',
//         followers: 187,
//         memberSince: '2021-03-19'
//       },
//     // Add more artist objects
//   ];

const ArtistProfilePage = () => {
    const [artists, setArtists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                setIsLoading(true);
                Swal.showLoading();
                const res = await fetch(`http://localhost:8080/api/artist/get-all-artists`);
                const data = await res.json();
                console.log(data);
                setArtists(data);
            } catch (error) {
                console.error('Error fetching artists:', error);
            } finally {
                setIsLoading(false);
                Swal.close();
            }
        };

        fetchArtists();
    }, []);

    let { id } = useParams();
    let artist = artists.find(a => a.id == id);
    return (
        <div>
            <Navbar />
            {
                isLoading ? (<></>) : (artist ? (<ArtistProfile artist={ artist } />) : (
                    <div className="container">
                        <div className="page-content d-flex justify-content-center"><h2>Oops! User not found :(</h2></div>
                    </div>
                ))
            }
            <Footer />
        </div>
    );
};

export default ArtistProfilePage;