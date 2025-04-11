import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = ({ query, setQuery, onSearch }) => (
  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for images..."
      style={{
        width: '200px',
        padding: '6px 10px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px 0 0 4px',
        outline: 'none',
      }}
    />
    <button
      onClick={onSearch}
      style={{
        padding: '6px 12px',
        fontSize: '14px',
        border: '1px solid #007bff',
        borderLeft: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
      }}
    >
      <FaSearch />
    </button>
  </div>
);

export default SearchBar;
