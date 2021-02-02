import * as React from "react";
import "../assets/sass/home.scss";
import Button from "../components/button";
import Label from "../components/label";
import Nav from "../components/nav";
import Sound from "../components/sound";
import Slice from "../layouts/slice";

const Home = () => {
  return (
    <>
      <header>
        <div class='headingWrapper'>
          <h1 class='heading'>Ramsey Sounds</h1>
        </div>
      </header>
      <main>
        <Slice h='lg' hDir='Center' vDir='Center'>
          <Button />
          <Button />
        </Slice>
        <Slice h='lg' hDir='Center' vDir='Center'>
          <Button />
          <Button />
        </Slice>
        <Slice h='lg' hDir='Center' vDir='Center'>
          <Button />
          <Button />
        </Slice>
        <Label />
        <Sound />
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  );
};

export default Home;
