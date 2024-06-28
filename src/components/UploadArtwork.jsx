import React, { useState } from 'react';

const UploadArtwork = () => {
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

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        setWorkData({
            ...workData,
            imgUrls: urls
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwt');
        try {
            const response = await fetch('http://localhost:8080/api/works/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(workData)
            });
            const result = await response.json();
            console.log(result);
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
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default UploadArtwork;
