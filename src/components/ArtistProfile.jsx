import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { faUserPlus, faUpload, faPencil, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ArtistProfile = ({ artist }) => {

    // TBD: 從後端拉過來的artwork裡面用.find()篩選
    // artworks.find(artwork => artwork.arthurId === artist.id)
    // 現在先用假資料代替
    // const artworks = [
    //     {
    //         id: 1,
    //         imageUrl: [require('../assets/images/5ijrtKutqlxcfCgE7oqORJ.png')],
    //         title: 'Electron HBD',
    //         author: 'Chris Meow',
    //         authorAvatar: require('../assets/images/chris.jpg')
    //     },
    //     {
    //         id: 2,
    //         imageUrl: [require('../assets/images/francesco-ZxNKxnR32Ng-unsplash.jpg')],
    //         title: 'Artwork Title 1',
    //         author: 'Author Name 1',
    //         authorAvatar: require('../assets/images/animal_chara_radio_penguin.png')
    //     },
    //     {
    //         id: 3,
    //         imageUrl: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
    //         title: 'Artwork Title 1',
    //         author: 'John Doe',
    //         authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
    //     },
    //     {
    //         id: 4,
    //         imageUrl: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
    //         title: 'Artwork Title 1',
    //         author: 'John Doe',
    //         authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
    //     },
    //     {
    //         id: 5,
    //         imageUrl: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
    //         title: 'Artwork Title 1',
    //         author: 'John Doe',
    //         authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
    //     },
    //     {
    //         id: 6,
    //         imageUrl: [require('../assets/images/steve-johnson-e5LdlAMpkEw-unsplash.jpg')],
    //         title: 'Artwork Title 1',
    //         author: 'John Doe',
    //         authorAvatar: require('../assets/images/pexels-stefanstefancik-91224.jpg')
    //     },
    // ];

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/works/author/${artist.id}`);
                const data = await res.json();
                setArtworks(data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        fetchArtworks();
    }, [artist.id]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <img src={artist.imageUrl} className="user-avatar rounded-circle" alt="Artist Photo" />
                </div>
                <div className="col-md-9">
                    <h1>{artist.name}</h1>
                    <p>{artist.description}</p>

                    {
                        artist.id == localStorage.getItem("id") ?
                            (<div className="d-flex align-items-center mt-3">
                                <button className="btn btn-outline-primary main-button">
                                    <FontAwesomeIcon icon={faPencil} /> Edit Bio
                                </button>
                                <button className="btn btn-outline-primary main-button ms-4">
                                    <FontAwesomeIcon icon={faGear} /> Settings
                                </button>

                            </div>) :
                            (<div className="d-flex align-items-center mt-3">
                                <button className="btn btn-outline-primary main-button">
                                    <FontAwesomeIcon icon={faUserPlus} /> Follow
                                </button>
                                {/* TBD */}
                                <img className="btn" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: "60px", width: "217px", marginLeft: "1rem" }} />

                            </div>)
                    }



                </div>
            </div>
            <hr className="my-4" />
            <h2>Artwork Gallery</h2>
            {
                artist.id == localStorage.getItem("id") ?
                    (<Link to={"/upload"}>
                        <button className="btn btn-outline-primary main-button mt-4 mb-4">
                            <FontAwesomeIcon icon={faUpload} /> Upload New Artwork
                        </button>
                    </Link>) :
                    (<></>)
            }
            <Gallery artworks={artworks} />
        </div>
    );
}

export default ArtistProfile;