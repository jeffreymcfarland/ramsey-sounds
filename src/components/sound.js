import * as React from "react";
import { Howl, Howler } from "howler";

import daveLaugh from "../assets/audio/Dave-Laughing.mp3";

const sound = new Howl({
  src: [daveLaugh],
  volume: 0.1,
});

const play = () => {
  sound.on("play", function () {
    sound.play();
  });
};

const Sound = () => {
  return <div onClick={play()}></div>;
};

export default Sound;
