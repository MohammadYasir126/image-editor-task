import React, { useState } from 'react';
import { fetchImages } from '../api/pixabay';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import { useNavigate } from 'react-router-dom';

function SearchPage({ setSelectedImage }) {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return setError('Please enter a search term');
    try {
      const data = await fetchImages(query);
      setImages(data.hits || []);
      setError('');
    } catch (err) {
      setError('Failed to fetch images');
    }
  };

  const handleAddCaption = (image) => {
    setSelectedImage(image);
    navigate('/editor');
  };

  return (
    <div style={{ padding: '1rem' }}>
      
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '0.75rem',
        borderLeft: '4px solid #007bff',
        maxWidth: '300px',
        marginBottom: '1rem',
        fontSize: '14px',
        color: '#333',
      }}>
        <strong>Name:</strong> Mohammad Yasir<br />
        <strong>Email:</strong> arafatyasir126@gmail.com
      </div>

      <h2>Image Search Editor</h2>

     
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      
      {error && <p style={{ color: 'red' }}>{error}</p>}

     
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img) => (
          <ImageCard key={img.id} image={img} onAddCaption={handleAddCaption} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
