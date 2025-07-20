import React from "react";
import { formatTimeAgo } from "../utils/time";
import { mapGenreIdsToNames } from "../utils/genreUtils";
import { useNavigate } from "react-router-dom";

/**
 * PodcastCard component displays a summary preview of a single podcast.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.podcast - The podcast data object.
 * @param {number} props.podcast.id - Unique ID of the podcast.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - Image URL of the podcast.
 * @param {number} props.podcast.seasons - Number of seasons in the podcast.
 * @param {number[]} props.podcast.genres - List of genre IDs associated with the podcast.
 * @param {number} props.podcast.updated - Last updated timestamp.
 * @param {Array} props.genres - Full genre list used to resolve genre names.
 *
 * @returns {JSX.Element} The rendered podcast card component.
 */
export const PodcastCard = ({ podcast, genres }) => {
  const navigate = useNavigate();
  const genreNames = mapGenreIdsToNames(podcast.genres, genres);

  return (
    <div className="card" onClick={() => navigate(`/show/${podcast.id}`)}>
      <img src={podcast.image} alt="Podcast" className="podcast-cover" />
      <h2 className="title">{podcast.title}</h2>
      <p className="seasons">
        {podcast.seasons} season{podcast.seasons !== 1 ? "s" : ""}
      </p>
      <div className="genres">
        {genreNames.map((name) => (
          <span key={name} className="genre">
            {name}
          </span>
        ))}
      </div>
      <p className="last-updated">Updated {formatTimeAgo(podcast.updated)}</p>
    </div>
  );
};
