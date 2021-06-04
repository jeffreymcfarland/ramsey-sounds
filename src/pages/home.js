import React, { useState, useEffect } from "react";
import Button from "../components/button";
import Label from "../components/label";
import Nav from "../components/nav";
import Sound from "../components/sound";
import Slice from "../layouts/slice";
import Block from "../layouts/block";
import "../assets/sass/home.scss";

import daveLaugh from "../assets/audio/Dave-Laughing.mp3";

const Home = () => {
  const [labels, setLabels] = useState([
    {
      person: "Dave Ramsey",
      name: "daveRamsey",
      sounds: [
        { id: 1, label: "Laughing", sound: daveLaugh },
        { id: 2, label: "Crying" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
    {
      person: "Rachel Cruze",
      name: "rachelCruze",
      sounds: [
        { id: 1, label: "Laughing" },
        { id: 2, label: "Sad" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
    {
      person: "Ken Coleman",
      name: "kenColeman",
      sounds: [
        { id: 1, label: "Laughing" },
        { id: 2, label: "Crying" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
    {
      person: "Christy Wright",
      name: "christyWright",
      sounds: [
        { id: 1, label: "Laughing" },
        { id: 2, label: "Crying" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
    {
      person: "Anthony ONeal",
      name: "anthonyOneal",
      sounds: [
        { id: 1, label: "Laughing" },
        { id: 2, label: "Crying" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
    {
      person: "Dr. John Delony",
      name: "drJohnDelony",
      sounds: [
        { id: 1, label: "Laughing" },
        { id: 2, label: "Crying" },
        { id: 3, label: "Shouting" },
        { id: 4, label: "Celebrating" },
        { id: 5, label: "Funny" },
        { id: 6, label: "Misc." },
      ],
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState("Dave Ramsey");
  const [selectedSound, setSelectedSound] = useState("");

  useEffect(() => {
    // const context = new AudioContext();

    // const contextResumePlayback = () => {
    //   context.resume().then(() => {
    //     console.log("Playback resumed successfully");
    //   });
    // };

    // document
    //   .querySelector("button")
    //   .addEventListener("click", contextResumePlayback);

    document.querySelector("body").addEventListener("click", () => {
      setSelectedSound("");
    });
  });

  return (
    <>
      <header>
        <Slice hDir='Center' vDir='Center' classes='bg-White masthead'>
          <div className='mastheadWrapper margin-top--md'>
            <img
              src='https://cdn.ramseysolutions.net/media/rscom/logos/masthead-logo-ramsey.svg'
              alt='logo'
            />
          </div>
          <div className='headingWrapper'>
            <h1 className='color-darkBlue'>Ramsey Sounds</h1>
          </div>
        </Slice>
      </header>
      <main>
        <Slice
          hDir='Center'
          vDir='Center'
          classes='Selected-title bg-alternateYellow'
        >
          <h2 className='color-darkBlue'>{selectedPerson}</h2>
        </Slice>
        <Slice
          h='lg'
          hDir='Center'
          vDir='Start'
          classes='Slice-gap bg-darkBlue margin-top--md margin-bottom--md'
        >
          {labels.map((label) =>
            label.person === selectedPerson
              ? label.sounds.map((sound) => (
                  <Button
                    setSelectedSound={setSelectedSound}
                    selected={selectedSound}
                    label={sound.label}
                    name={label.name}
                    sound={sound.sound}
                    key={sound.id}
                    id={sound.id}
                  >
                    {sound.sound ? (
                      <Sound
                        id={sound.id}
                        sound={sound.sound}
                        name={label.name}
                      />
                    ) : (
                      ""
                    )}
                    <Label label={sound.label} />
                  </Button>
                ))
              : ""
          )}
        </Slice>
      </main>
      <Slice hDir='Center' vDir='Center' classes='Sticky bg-mediumGray'>
        <Block classes='Block'>
          <Nav
            setSelectedPerson={setSelectedPerson}
            selected={selectedPerson}
          />
        </Block>
      </Slice>
      <div className='icon-credit'>
        Icons made by{" "}
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>{" "}
        from{" "}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default Home;
