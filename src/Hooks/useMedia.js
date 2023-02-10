import React from "react";

export function useMedia(media) {
  const [match, setMatch] = React.useState(null);

  function matchMedia() {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  }
  window.addEventListener("resize", matchMedia);

  return match;
}

