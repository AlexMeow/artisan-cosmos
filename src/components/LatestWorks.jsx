import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

const LatestWorks = () => {
  return (
    <div className="most-popular">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4><em>Latest</em> Works</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <img src="assets/images/popular-01.jpg" alt="" />
                  <h4>Artwork Title</h4>
                  <ul>
                    <li><i><FontAwesomeIcon icon={faThumbsUp} /></i> 123</li>
                    <li><i><FontAwesomeIcon icon={faComment} /></i> 456</li>
                  </ul>
                </div>
              </div>
              {/* Repeat similar blocks for more artworks */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
