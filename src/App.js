import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // You can style as needed

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('technology'); // Default category
  
  const API_KEY = '6fadb1ec64cd459b9e0e227bf751fdf6'; // Replace with your actual NewsAPI key

  // Fetch news from NewsAPI
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`
      );
      setNews(response.data.articles);  // Save the articles to the state
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Fetch news whenever the category changes
  useEffect(() => {
    fetchNews();
  }, [category]);

  // Handler to change the news category
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">Personalized News Feed</h1>

      <div className="category-selector">
        <label htmlFor="category">Select News Category: </label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div className="news-container">
        {news.length === 0 ? (
          <p>No news articles available</p>
        ) : (
          news.map((article, index) => (
            <div key={index} className="news-article">
              {article.urlToImage && <img src={article.urlToImage} alt="news" className="news-image" />}
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Developer Name: <strong>Danish Raja</strong></p>
        <p>Contact: <strong>8709253041</strong></p>
        <p>Email: <a href="mailto:danishhaqqani785@gmail.com">danishhaqqani785@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/danish-raja-b3375723b" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </footer>
    </div>
  );
}

export default App;
