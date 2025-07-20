import React from "react";
import Search from "./Search";

/**
 * Header component that displays the app logo, title, search input, and user icon.
 *
 * @component
 * @param {Object} props
 * @param {string} props.searchTerm - The current value of the search input.
 * @param {Function} props.setSearchPodcasts - Function to update the search input state.
 * @returns {JSX.Element} The rendered Header component.
 */
export const Header = ({ searchTerm, setSearchPodcasts }) => {
  return (
    <header className="header">
      <h1 className="header-title">
        <img
          src="/assets/logo.png"
          alt="Podcast Logo"
          className="podcast-logo"
        />
        PodcastApp
      </h1>
      <div className="search-container">
        <Search value={searchTerm} onChange={setSearchPodcasts} />
        <img src="/assets/user.png" alt="User Icon" className="user-icon" />
      </div>
    </header>
  );
};
