import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {  // Make sure category is passed in as a prop
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Show loading while fetching
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0dcce8a2bf424520af5d2a7abbfc7bf4`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setArticles(data.articles || []);  // Safely set articles or an empty array
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);  // Stop loading after fetching
      }
    };

    fetchNews();
  }, [category]);  // Re-fetch news whenever category changes

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span> in <span className="badge bg-info">{category}</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="news-container">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage || 'placeholder_image_url'}
                url={news.url}
              />
            ))
          ) : (
            <p className="text-center">No news articles available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;