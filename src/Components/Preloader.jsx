import React,{useEffect,useState} from 'react';
import './Preloader.css'; // Import preloader styles

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading delay (replace with actual data fetching logic)
        const timer = setTimeout(() => {
          setIsLoading(false); // Set loading to false after delay
        }, 2000);
    
        return () => clearTimeout(timer); // Cleanup timer on component unmount
      }, []);
  return (
    <div className="preloader-container">
      <div className="preloader"></div>
    </div>
  );
};

export default Preloader;
