import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import AddCaptionPage from './pages/AddCaptionPage';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage setSelectedImage={setSelectedImage} />} />
        <Route path="/editor" element={<AddCaptionPage selectedImage={selectedImage} />} />
      </Routes>
    </Router>
  );
}

export default App;
