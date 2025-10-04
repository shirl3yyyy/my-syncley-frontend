import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchPage.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const navigate = useNavigate();

  const initialCategory = query.get("category") || "";
  const initialQuery = query.get("query") || "";

  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/search", {
          params: { category, query: searchTerm },
        });
        setResults(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load results");
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [category, searchTerm]);

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}&category=${category}`);
  };

  return (
    <div className="search-page">
      <h2 className="search-title">
        {category
          ? `Category: ${category}`
          : searchTerm
          ? `Results for "${searchTerm}"`
          : "Browse All Projects"}
      </h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && results.length === 0 && <p>No results found.</p>}

      <div className="results-grid">
        {results.map((res) => (
          <div
            key={res._id}
            className="result-card"
            onClick={() => handleClick(res._id)}
          >
            <img
              src={res.image || "https://via.placeholder.com/400x200?text=No+Image"}
              alt={res.title}
              className="result-image"
            />
            <h3 className="result-title">{res.title}</h3>
            <p className="result-desc">
              {res.description?.slice(0, 80)}...
            </p>
            <div className="result-meta">
              <span className="price">
                {res.price ? `KES ${res.price}` : "Price not set"}
              </span>
              <span className="rating">
                ⭐ {res.rating !== undefined ? res.rating.toFixed(1) : "—"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
