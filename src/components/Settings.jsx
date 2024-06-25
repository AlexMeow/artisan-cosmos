import React, { useState } from 'react';

const MemberCenter = () => {
  const [isBMACEnabled, setIsBMACEnabled] = useState(false);

  const handleBMACChange = () => {
    setIsBMACEnabled(!isBMACEnabled);
  };

  return (
    <div className="container mt-5">
      <h2>Member Center</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="artistName" className="form-label">Artist Name</label>
          <input type="text" className="form-control" id="artistName" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Biography</label>
          <textarea className="form-control" id="bio" rows="3" placeholder="Write a brief biography"></textarea>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="enableBMAC" checked={isBMACEnabled} onChange={handleBMACChange} />
          <label className="form-check-label" htmlFor="enableBMAC">Enable Buy Me a Coffee</label>
        </div>
        <div className="mb-3">
          <label htmlFor="bmacLink" className="form-label">Buy Me a Coffee Link</label>
          <input type="text" className="form-control" id="bmacLink" placeholder="Enter your Buy Me a Coffee link" disabled={!isBMACEnabled} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default MemberCenter;