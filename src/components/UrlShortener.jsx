import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://url-shortener-be-xqje.onrender.com/api/url/shorten",
        { originalUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="urlInput">Enter URL</label>
          <input
            type="text"
            id="urlInput"
            className="form-control"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Shorten URL
        </button>
      </form>
      {shortUrl && (
        <div>
          <p>
            Shortened URL:{" "}
            <a href={`${shortUrl}`} target="_blank">
              {`${shortUrl}`}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
