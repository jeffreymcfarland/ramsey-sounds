import React, { useEffect } from "react";

const Sound = ({ sound, id, name }) => {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", () => {
      const player = document.getElementById(`${name}-player-${id}`);
      if (player != null) {
        player.pause();
        player.currentTime = 0;
      }
    });
  });

  return (
    <audio id={`${name}-player-${id}`}>
      <source src={sound} type='audio/mpeg' />
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
};

export default Sound;
