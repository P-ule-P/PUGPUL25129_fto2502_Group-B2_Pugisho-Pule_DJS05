import React from "react";
import Search from "./Search";

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
