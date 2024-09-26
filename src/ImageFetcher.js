import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageFetcher() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'gMFD6DxeRnp9yzjLA6xJufK9uSHzbvfk4ocPAyJcBIrtta1Dnw9PC0F9', // Replace with your Pexels API Key
          },
          params: {
            query: 'hotel room', // Query for hotel room images
            per_page: 10, // Number of images to fetch
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Hotel Room Images</h1>
      <div className="image-gallery">
        {images.map((image) => (
          <img key={image.id} src={image.src.medium} alt={image.alt} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
}

export default ImageFetcher;
