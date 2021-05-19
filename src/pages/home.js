import React, { useState } from "react";
import Button from "../components/button";
import Label from "../components/label";
import Nav from "../components/nav";
import Sound from "../components/sound";
import Slice from "../layouts/slice";
import Block from "../layouts/block";
import "../assets/sass/home.scss";

const Home = () => {
  const [labels, setLabels] = useState([
    { id: 1, label: "Laughing" },
    { id: 2, label: "Crying" },
    { id: 3, label: "Shouting" },
    { id: 4, label: "Celebrating" },
    { id: 5, label: "Funny" },
    { id: 6, label: "Misc." },
  ]);
  const [selectedPerson, setSelectedPerson] = useState("Dave Ramsey");
  const [selectedSound, setSelectedSound] = useState("");

  return (
    <>
      <header>
        <div class='headingWrapper bg-darkBlue'>
          <h1 class='color-White'>Ramsey Sounds</h1>
        </div>
      </header>
      <main>
        <Slice
          hDir='Center'
          vDir='Center'
          classes='Selected-title bg-mediumGray'
        >
          <h2 class='color-lightBlue'>{selectedPerson}</h2>
        </Slice>
        <Slice
          h='lg'
          hDir='Center'
          vDir='Center'
          classes='bg-darkBlue margin-top--md margin-bottom--md'
        >
          {labels.map((label) => (
            <Button
              setSelectedSound={setSelectedSound}
              selected={selectedSound}
              sound={label.label}
              key={label.id}
            >
              <Sound />
              <Label label={label.label} />
            </Button>
          ))}
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
      <div class='icon-credit'>
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
