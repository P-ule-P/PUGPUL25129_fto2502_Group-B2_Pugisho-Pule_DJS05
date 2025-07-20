import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchShowById } from "../utils/api";
import { formatTimeAgo } from "../utils/time";
import { mapGenreIdsToNames } from "../utils/genreUtils";
import { genres } from "../data/genres";

export default function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchShowById(id);
        setShow(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleGoBack = () => navigate(-1);

  if (loading) return <p className="status">Loading show details...</p>;
  if (error) return <p className="status error">Error: {error}</p>;
  if (!show) return <p className="status">Show not found.</p>;

  const genreNames = genres
    .filter((g) => g.shows.includes(show.id.toString()))
    .map((g) => g.title);
  const currentSeason = show.seasons[selectedSeasonIndex];
  const totalEpisodes = show.seasons.reduce(
    (sum, s) => sum + s.episodes.length,
    0
  );

  return (
    <div className="show-detail">
      <header className="header">
        <div className="left-section">
          <button className="back-icon" onClick={handleGoBack}>
            ←
          </button>
          <h1 className="header-title">
            <img
              src="/assets/logo.png"
              alt="Podcast Logo"
              className="podcast-logo"
            />
            PodcastApp
          </h1>
        </div>

        <div className="right-section">
          <img src="/assets/search.png" alt="Search" className="search-icon" />
          <img src="/assets/user.png" alt="Profile" className="profile-icon" />
        </div>
      </header>

      <div className="show-summary">
        <img src={show.image} alt={show.title} className="detail-cover" />
        <div className="show-metadata">
          <h2>{show.title}</h2>
          <p className="colorGrey">{show.description}</p>

          <div className="genre-time-conatiner">
            <div>
              <span className="colorGrey">GENRES</span> <br></br>
              <div className="genre-tags">
                {genreNames.map((g) => (
                  <span key={g}>{g}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="colorGrey">LAST UPDATED</span> <br></br>
              <p>{new Date(show.updated).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="total-seasons-episodes">
            <p>
              <span className="colorGrey">TOTAL SEASONS</span> <br></br>
              {show.seasons.length} Seasons
            </p>
            <p>
              <span className="colorGrey">TOTAL EPISODES</span> <br></br>
              {totalEpisodes} Episodes
            </p>
          </div>
        </div>
      </div>

      <div className="season-select-section">
        <label htmlFor="season-select">
          <strong>Current Season:</strong>
        </label>
        <select
          id="season-select"
          value={selectedSeasonIndex}
          onChange={(e) => setSelectedSeasonIndex(Number(e.target.value))}
          className="season-dropdown"
        >
          {show.seasons.map((_, index) => (
            <option key={index} value={index}>
              Season {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="season-info">
        <div className="season-info-conatainer">
          <div>
            <img
              src={currentSeason.image}
              alt="Season"
              className="season-img"
            />{" "}
          </div>
          <div>
            <h3>{currentSeason.title}</h3>
            <p>{currentSeason.description}</p>
            <p>
              {currentSeason.episodes.length} Episodes | Released{" "}
              {new Date(show.updated).toLocaleDateString()}
            </p>
          </div>
        </div>

        <ul className="episode-list">
          {currentSeason.episodes.map((ep, index) => (
            <li key={ep.title} className="episode">
              <img
                src={currentSeason.image}
                alt="Season"
                className="episode-img"
              />
              <div>
                <p className="ep-number">Ep {index + 1}</p>
                <p className="ep-title">{ep.title || "Untitled Episode"}</p>
                <p className="ep-desc">
                  {(ep.description || "").slice(0, 120)}...
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
