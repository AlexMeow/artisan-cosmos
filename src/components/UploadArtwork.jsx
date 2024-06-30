import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { jwtDecode } from 'jwt-decode';

const UploadArtwork = () => {
    const navigate = useNavigate();
    const mdParser = new MarkdownIt();

    const [workData, setWorkData] = useState({
        name: '',
        tags: '',
        description: '',
        imgUrls: []
    });

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Current time in seconds

                // Check if token is expired
                if (decodedToken.exp < currentTime) {
                    Swal.fire({
                        icon: "warning",
                        title: "Session Expired",
                        text: "Your session has expired. Please log in again.",
                    });
                    localStorage.removeItem("jwt");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Invalid token:", error);
                Swal.fire({
                    icon: "warning",
                    title: "Invalid Token",
                    text: "Invalid token detected. Please log in again.",
                });
                localStorage.removeItem("jwt");
                navigate("/login");
            }
        } else {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please log in first!",
            });
            navigate("/login");
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkData({
            ...workData,
            [name]: value
        });
    };

    const handleEditorChange = ({ html, text }) => {
        setWorkData({
            ...workData,
            description: text
        })
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const promises = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        });

        Promise.all(promises).then(base64Files => {
            setWorkData({
                ...workData,
                imgUrls: base64Files
            });
        }).catch(error => console.error('Error converting files:', error));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwt');
        try {
            // Split tags by white space.
            const tagsArray = workData.tags.split(' ').filter(tag => tag.trim() !== '');

            const dataToSend = {
                ...workData,
                tags: tagsArray
            };

            console.log(dataToSend);

            const res = await fetch('http://localhost:8080/api/works/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dataToSend)
            });
            const message = await res.text();
            if (res.ok) {
                console.log(message);
                Swal.fire({
                    icon: "success",
                    title: "Yeah!",
                    text: "Upload Successed!",
                });
                setTimeout(() => {
                    navigate(`/artist/${jwtDecode(localStorage.getItem("jwt")).id}`);
                }, 2000)
            } else if (res.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your token is invalid >:(",
                });
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: message,
                });
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        } catch (error) {
            console.error('Error uploading artwork:', error);
        }
    };

    return (
        <div className="container my-5">
            <h2>Upload New Artwork</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={workData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tags"
                        name="tags"
                        value={workData.tags}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <MdEditor
                        className="form-control"
                        id="description"
                        name="description"
                        value={workData.description}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                        placeholder="Write some description with markdown format..."
                        style={{ height: "200px" }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imgUrls">Images</label>
                    <input
                        type="file"
                        className="form-control"
                        id="imgUrls"
                        name="imgUrls"
                        multiple
                        accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/jfif,image/tiff,image/svg+xml"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="form-group">
                    {workData.imgUrls.length > 0 && (
                        <div className="image-previews">
                            {workData.imgUrls.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Preview ${index}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
                <button type="button" className="btn btn-secondary ms-3" onClick={() => {navigate(`/artist/${jwtDecode(localStorage.getItem("jwt")).id}`);
}}>Cancel</button>
            </form>
        </div>
    );
};

export default UploadArtwork;