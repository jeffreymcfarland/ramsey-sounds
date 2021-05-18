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
    { id: 2, label: "Label" },
    { id: 3, label: "Label" },
    { id: 4, label: "Label" },
    { id: 5, label: "Label" },
    { id: 6, label: "Label" },
  ]);
  const [selectedPerson, setSelectedPerson] = useState("Dave Ramsey");

  return (
    <>
      <header>
        <div class='headingWrapper bg-lightGray'>
          <h1 class='color-darkBlue'>Ramsey Sounds</h1>
        </div>
      </header>
      <main>
        <Slice h='lg' hDir='Center' vDir='Center' classes='bg-darkBlue'>
          {labels.map((label) => (
            <Button key={label.id}>
              <Sound />
              <Label label={label.label} />
            </Button>
          ))}
        </Slice>
        <Slice hDir='Center' vDir='Center' classes='bg-lightBlue'>
          <h2 class='color-White'>{selectedPerson}</h2>
        </Slice>
        <Sound />
      </main>
      <footer>
        <Slice hDir='Center' vDir='Center'>
          <Block classes='Block'>
            <Nav
              setSelectedPerson={setSelectedPerson}
              selected={selectedPerson}
            />
          </Block>
        </Slice>
      </footer>
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
