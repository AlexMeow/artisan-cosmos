import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { faUserPlus, faUpload, faPencil, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const ArtistProfile = ({ artist }) => {
    const [artworks, setArtworks] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        // 解析JWT並獲取使用者ID
        const token = localStorage.getItem("jwt");
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setCurrentUserId(decodedToken.id);
            } catch (error) {
                console.error("Invalid token:", error);
            }
        }
    }, []);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                Swal.showLoading();
                const res = await fetch(`http://localhost:8080/api/works/author/${artist.id}`);
                const data = await res.json();
                setArtworks(data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            } finally {
                Swal.close();
            }
        };

        fetchArtworks();
    }, [artist.id]);

    console.log(artist);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <img src={artist.avatarUrl} className="user-avatar rounded-circle" alt="Artist Photo" />
                </div>
                <div className="col-md-9">
                    <h1>{artist.name}</h1>
                    <p>{artist.description}</p>

                    {
                        currentUserId === artist.id ? 
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
                currentUserId === artist.id ? 
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