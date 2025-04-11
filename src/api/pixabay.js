const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

export async function fetchImages(query) {
  const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
  if (!res.ok) throw new Error('API Error');
  return res.json();
}