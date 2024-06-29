import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faClock } from '@fortawesome/free-solid-svg-icons';

const Artists = () => {

    // Pseudo data
    const artists = [
        {
            id: 1,
            name: 'John Doe',
            imageUrl: 'https://picsum.photos/200/300',
            description: 'Digital artist specialized in surrealism.',
            followers: 187,
            memberSince: '2021-03-19'
        },
        {
            id: 2,
            name: '企鵝',
            imageUrl: require('../assets/images/animal_chara_radio_penguin.png'),
            description: '接案中',
            followers: 9487,
            memberSince: '2021-03-19'
        },
        {
            id: 3,
            name: 'Mary Jane',
            imageUrl: require('../assets/images/messy bun-amico.png'),
            description: 'Junior UI/UX',
            followers: 187,
            memberSince: '2021-03-19'
        },
        {
            id: 4,
            name: 'John Doe',
            imageUrl: require('../assets/images/pexels-stefanstefancik-91224.jpg'),
            description: 'Digital sculptor, 3D printing and modeling.',
            followers: 187,
            memberSince: '2021-03-19'
        },
        {
            id: 5,
            name: 'Chris Meow',
            imageUrl: require('../assets/images/chris.jpg'),
            description: '雷猴啊',
            followers: 187,
            memberSince: '2015-01-28'
        },
        {
            id: 6,
            name: 'Unicorn',
            imageUrl: require('../assets/images/Unicorn with rainbow-cuate.png'),
            description: "I'm a happy unicorn!",
            followers: 187,
            memberSince: '2021-03-19'
        },
        {
            id: 7,
            name: 'John Doe',
            imageUrl: 'https://picsum.photos/200/300',
            description: 'Digital artist specialized in surrealism.',
            followers: 187,
            memberSince: '2021-03-19'
        },
        {
            id: 8,
            name: '快樂小畫家',
            imageUrl: require('../assets/images/art_live_painting.png'),
            description: '自信小畫家',
            followers: 187,
            memberSince: '2021-03-19'
        },
        // Add more artist objects
    ];

    return (
        <div className="artists container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {artists.map(artist => (
                            <div className="col-lg-3 col-sm-6">
                                <Link to={`/artist/${artist.id}`}>
                                    <div className="item">
                                        <img src={artist.imageUrl} alt="" />
                                        <h4>{artist.name}<br /><span>{artist.description}</span></h4>
                                        <ul>
                                            <li><i><FontAwesomeIcon icon={faUser} /></i> {artist.followers} </li>
                                            <li><small><i><FontAwesomeIcon icon={faClock} /></i> {artist.memberSince} </small></li>
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Artists;