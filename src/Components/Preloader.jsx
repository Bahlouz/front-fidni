import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import preloader styles

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="preloader-container">
          <span className="tile-1"></span>
          <span className="tile-2"></span>
          <span className="tile-3"></span>
          <span className="tile-4"></span>
        </div>
      )}
    </>
  );
};

export default Preloader;
