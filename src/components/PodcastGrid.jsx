import React from "react";
import { PodcastCard } from "./PodcastCard";

/**
 * PodcastGrid component displays a grid layout of podcast cards.
 *
 * @component
 * @param {Object} props
 * @param {Array} props.podcasts - Array of podcast objects to display.
 * @param {Array} props.genres - Array of all genre objects used to resolve genre names.
 *
 * @returns {JSX.Element} The rendered podcast grid component.
 */
export default function PodcastGrid({ podcasts, genres }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </section>
  );
}
