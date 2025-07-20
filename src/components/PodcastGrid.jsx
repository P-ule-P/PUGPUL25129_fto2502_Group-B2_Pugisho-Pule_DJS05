import React from "react";
import { PodcastCard } from "./PodcastCard";

export default function PodcastGrid({ podcasts, genres }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </section>
  );
}
