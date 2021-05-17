import * as React from "react";
import "../assets/sass/home.scss";
import Button from "../components/button";
import Label from "../components/label";
import Nav from "../components/nav";
import Sound from "../components/sound";
import Slice from "../layouts/slice";

// const labels = ['Dave Laughing', 'Label', 'Label', 'Label', 'Label', 'Label']

const Home = () => {
  return (
    <>
      <header>
        <div class='headingWrapper bg-lightGray'>
          <h1 class='color-darkBlue'>Ramsey Sounds</h1>
        </div>
      </header>
      <main class={"bg-darkBlue"}>
        <Slice h='lg' hDir='Center' vDir='Center'>
          <Button>
            <Sound />
            <Label label='Dave Laughing' />
          </Button>
          <Button>
            <Sound />
            <Label label='Label' />
          </Button>
          <Button>
            <Sound />
            <Label label='Label' />
          </Button>
          <Button>
            <Sound />
            <Label label='Label' />
          </Button>
          <Button>
            <Sound />
            <Label label='Label' />
          </Button>
          <Button>
            <Sound />
            <Label label='Label' />
          </Button>
        </Slice>
        <Sound />
      </main>
      <footer>
        <Nav />
      </footer>
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
    </>
  );
};

export default Home;
