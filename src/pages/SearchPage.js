import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";   // ✅ Keep this

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const navigate = useNavigate();

  const category = query.get("category");
  const searchTerm = query.get("query");

  // Mock example results
  const results = [
    { id: 1, title: "Example Project 1" },
    { id: 2, title: "Example Project 2" },
    { id: 3, title: "Example Project 3" },
  ];

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="search-page">
      <h2>
        {category
          ? `Browsing category: ${category}`
          : searchTerm
          ? `Search results for: "${searchTerm}"`
          : "Browse all services"}
      </h2>

      <div className="results-grid">
        {results.map((res) => (
          <div
            key={res.id}
            className="result-card"
            onClick={() => handleClick(res.id)}
          >
            {res.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
