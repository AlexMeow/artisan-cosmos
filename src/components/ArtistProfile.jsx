import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { faUserPlus, faUpload, faPencil, faGear, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const ArtistProfile = ({ artist }) => {
    const mdParser = new MarkdownIt();

    const [artworks, setArtworks] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentArtist, setCurrentArtist] = useState(artist);
    const [isEditingBio, setIsEditingBio] = useState(false);

    // Triggered when props 'artist' changes.
    useEffect(() => {
        setCurrentArtist(artist);
        // setBioContent(artist.bio);
    }, [artist]);

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

    // console.log(artist);

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check if the file is larger than 2MB.
            if (file.size > 2097152) {
                Swal.fire('Error', 'File size exceeds 2MB.', 'error');
                return;
            }

            // Convert image to base64.
            const reader = new FileReader();
            reader.readAsDataURL(file);
            // onload 會在成功讀取文件時觸發
            reader.onload = async () => {
                const base64Image = reader.result;

                try {
                    const token = localStorage.getItem("jwt");
                    const res = await fetch(`http://localhost:8080/api/users/update/${currentUserId}/avatar`, {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ avatar: base64Image })
                    });
                    if (!res.ok) {
                        throw new Error("Failed to upload avatar");
                    }
                    const data = await res.json();
                    Swal.fire('Success', 'Avatar updated successfully', 'success');
                    // Update  current shown avatar
                    setCurrentArtist({
                        ...currentArtist,
                        avatarUrl: base64Image
                    })
                } catch (error) {
                    console.error('Error uploading avatar:', error);
                    Swal.fire('Error', 'Failed to upload avatar', 'error');
                }
            };
            reader.onerror = error => {
                console.error('Error converting file:', error);
                Swal.fire('Error', 'Failed to read the file', 'error');
            };
        }
    };

    const handleBioEditToggle = () => {
        setIsEditingBio(!isEditingBio);
    };

    const handleBioSave = async () => {
        try {
            const token = localStorage.getItem("jwt");
            const res = await fetch(`http://localhost:8080/api/users/update/${currentUserId}/bio`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ bio: currentArtist.bio })
            });
            if (!res.ok) {
                throw new Error("Failed to update bio");
            }
            const data = await res.json();
            Swal.fire('Success', 'Bio updated successfully', 'success');
            // setCurrentArtist({
            //     ...currentArtist,
            //     bio: data.bio
            // });
            setIsEditingBio(false);
        } catch (error) {
            console.error('Error updating bio:', error);
            Swal.fire('Error', 'Failed to update bio', 'error');
        }
    };

    const handleEditorChange = ({ html, text }) => {
        setCurrentArtist({
            ...currentArtist,
            bio: text
        })
        // setBioContent(text);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    {
                        currentUserId === currentArtist.id ? (
                            <div className="user-avatar-container">
                                <img
                                    src={currentArtist.avatarUrl}
                                    className="user-avatar rounded-circle"
                                    alt="Artist Photo"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => document.getElementById('avatarUpload').click()}
                                />
                                <div className="upload-overlay" onClick={() => document.getElementById('avatarUpload').click()}>
                                    Upload Avatar
                                </div>
                                <input
                                    type="file"
                                    id="avatarUpload"
                                    style={{ display: 'none' }}
                                    onChange={handleAvatarUpload}
                                    accept="image/*"
                                />
                            </div>
                        ) : (
                            <img
                                src={currentArtist.avatarUrl}
                                className="user-avatar rounded-circle"
                                alt="Artist Photo"
                            />
                        )
                    }
                </div>
                <div className="col-md-9">
                    <h1>{currentArtist.name}</h1>
                    <h5>{currentArtist.jobTitle}</h5>
                    {
                        currentUserId === currentArtist.id ?
                            isEditingBio ? (
                                <div>
                                    <MdEditor
                                        value={currentArtist.bio}
                                        renderHTML={(text) => mdParser.render(text)}
                                        onChange={handleEditorChange}
                                    />
                                    <button className="btn btn-danger mt-3" onClick={handleBioEditToggle}>
                                        <FontAwesomeIcon icon={faTimes} /> Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className="markdown-content" dangerouslySetInnerHTML={{ __html: mdParser.render(currentArtist.bio) }} />
                            ) : (<div className="markdown-content" dangerouslySetInnerHTML={{ __html: mdParser.render(currentArtist.bio) }} />)
                    }

                    {
                        currentUserId === currentArtist.id ?
                            (<div className="d-flex align-items-center mt-3">
                                <button className="btn btn-outline-primary main-button" onClick={isEditingBio ? handleBioSave : handleBioEditToggle}>
                                    <FontAwesomeIcon icon={faPencil} /> {isEditingBio ? 'Save Bio' : 'Edit Bio'}
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
                currentUserId === currentArtist.id ?
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