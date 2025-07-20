import React from "react";

export default function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search podcasts..."
      className="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
