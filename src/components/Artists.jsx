import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const Artists = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [artists, setArtist] = useState(null);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                setIsLoading(true);
                Swal.showLoading();
                const res = await fetch("http://localhost:8080/api/artists/get-all-artists");
                const data = await res.json();
                setArtist(data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            } finally {
                setIsLoading(false);
                Swal.close();
            }
        };

        fetchArtists();
    }, []);

    return (
        <div className="artists container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        {!isLoading && (
                            artists ? (
                                artists.map(artist => (
                                    <div className="col-lg-3 col-sm-6">
                                        <Link to={`/artist/${artist.id}`}>
                                            <div className="item">
                                                <img src={artist.avatarUrl} alt="" />
                                                <h4>{artist.name}<br /><span>{artist.jobTitle}</span></h4>
                                                <ul>
                                                    <li><i><FontAwesomeIcon icon={faUser} /></i> {artist.followers.length} </li>
                                                    <li><small><i><FontAwesomeIcon icon={faClock} /></i> {new Date(artist.createdDate).toLocaleString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })} </small></li>
                                                </ul>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (<></>)
                        )

                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Artists;