import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UploadArtwork = () => {
    const navigate = useNavigate();

    const [workData, setWorkData] = useState({
        name: '',
        tags: '',
        description: '',
        imgUrls: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkData({
            ...workData,
            [name]: value
        });
    };

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/jfif', 'image/tiff', 'image/svg+xml'];
        
    //     const validFiles = files.filter(file => allowedTypes.includes(file.type));
    //     const urls = validFiles.map(file => URL.createObjectURL(file));
        
    //     setWorkData({
    //         ...workData,
    //         imgUrls: urls
    //     });
    // };

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

            const response = await fetch('http://localhost:8080/api/works/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(dataToSend)
            });
            const result = await response.json();
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Yeah!",
                text: "Upload Successed!",
            });
            navigate(`/artist/${localStorage.getItem("id")}`);
        } catch (error) {
            console.error('Error uploading artwork:', error);
        }
    };

    return (
        <div className="container my-5">
            <h2>Upload New Artwork</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={workData.name}
                        onChange={handleInputChange}
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
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={workData.description}
                        onChange={handleInputChange}
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
                                    style={{ maxWidth: '100px', maxHeight: '100px', margin: '10px' }}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default UploadArtwork;