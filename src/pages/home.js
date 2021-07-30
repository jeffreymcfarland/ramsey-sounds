import React, { useState, useEffect } from "react";
import Button from "../components/button";
import Label from "../components/label";
import Nav from "../components/nav";
import Sound from "../components/sound";
import Slice from "../layouts/slice";
import Block from "../layouts/block";
import AccentLine from "../components/accentLine";
import "../assets/sass/home.scss";
import { useInView } from "react-intersection-observer";

import daveLaugh from "../assets/audio/Dave-Laughing.mp3";
import thatsStupid from "../assets/audio/Thats-Stupid.mp3";
import hillBilly from "../assets/audio/Hill-Billy.mp3";
import wellDone from "../assets/audio/Well-Done.mp3";
import hardWork from "../assets/audio/Hard-Work.mp3";
import wayToGo from "../assets/audio/Way-To-Go.mp3";

const Home = () => {
  const [bottomDiv, bottomDivInView, bottomDivEntry] = useInView({
    threshold: 0.9,
  });

  const [labels, setLabels] = useState([
    {
      person: "Dave Ramsey",
      name: "daveRamsey",
      sounds: [
        { id: 1, label: "Laughing", sound: daveLaugh },
        { id: 2, label: "Well Done", sound: wellDone },
        { id: 3, label: "Way To Go", sound: wayToGo },
        { id: 4, label: "Hillbilly", sound: hillBilly },
        { id: 5, label: "That's Stupid", sound: thatsStupid },
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
      person: "Dr. John Delony",
      name: "drJohnDelony",
      sounds: [
        { id: 1, label: "Hard Work", sound: hardWork },
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
    document.querySelector("body").addEventListener("click", () => {
      setSelectedSound("");
    });
  });

  return (
    <>
      <header>
        <Slice
          hDir='Center'
          vDir='Center'
          classes='bg-White masthead margin-bottom--md'
        >
          <div className='headingWrapper'>
            <h1 className='color-Blue font-semibold'>Ramsey Sounds</h1>
          </div>
          <div className='mastheadWrapper margin-top--sm margin-bottom--md'>
            <AccentLine classes='bg-Blue margin-right--md' />
            <img
              src='https://cdn.ramseysolutions.net/cms/sites/ramseysolutions-com/favicons/favicon.ico'
              alt='logo'
            />
            <AccentLine classes='bg-Blue margin-left--md' />
          </div>
        </Slice>
      </header>
      <main>
        <Slice hDir='Center' vDir='Center' classes='Selected-title'>
          <div className='SelectedWrapper margin-bottom--sm margin-top--sm'>
            <h2 className='color-alternateYellow font-semibold padding--sm'>
              {selectedPerson}
            </h2>
          </div>
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
        <div
          class='bottom-div'
          ref={bottomDiv}
          data-visible={bottomDivInView}
        ></div>
      </main>
      <Slice
        hDir='Center'
        vDir='Center'
        classes={`Nav-slice height-xs Sticky ${
          bottomDivInView ? "noOpacity" : ""
        }`}
      >
        <Block ids='Nav-block' classes='Block'>
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
        <div>
          Icons made by{" "}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{" "}
          from{" "}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
