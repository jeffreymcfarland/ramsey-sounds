import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SwipeArrows from "./swipeArrows";

const Nav = ({ setSelectedPerson, selected }) => {
  const [daveRef, daveInView, daveEntry] = useInView({
    threshold: 0.9,
  });
  const [delonyRef, delonyInView, delonyEntry] = useInView({
    threshold: 0.9,
  });
  const [other, otherInView, otherEntry] = useInView({
    threshold: 0,
  });

  const [persons, usePersons] = useState([
    {
      id: 1,
      name: "Dave Ramsey",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-dave-ramsey.jpg/120w.jpg",
      ref: daveRef,
      view: daveInView,
    },
    {
      id: 2,
      name: "Rachel Cruze",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-rachel-cruze.jpg/120w.jpg",
      ref: other,
      view: otherInView,
    },
    {
      id: 3,
      name: "Ken Coleman",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-ken-coleman.jpg/120w.jpg",
      ref: other,
      view: otherInView,
    },
    {
      id: 4,
      name: "Christy Wright",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-christy-wright.jpg/120w.jpg",
      ref: other,
      view: otherInView,
    },
    {
      id: 5,
      name: "Anthony ONeal",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-anthony-oneal.jpg/120w.jpg",
      ref: other,
      view: otherInView,
    },
    {
      id: 6,
      name: "Dr. John Delony",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-john-delony.jpg/120w.jpg",
      ref: delonyRef,
      view: delonyInView,
    },
  ]);

  const [leftArrow, setLeftArrow] = useState("false");
  const [rightArrow, setRightArrow] = useState("false");

  useEffect(() => {
    setLeftArrow(daveInView);
    setRightArrow(delonyInView);
  });

  return (
    <>
      <nav className='Nav'>
        {persons.map((person) => (
          <button
            ref={
              person.name === "Dave Ramsey"
                ? daveRef
                : person.name === "Dr. John Delony"
                ? delonyRef
                : other
            }
            data-visible={
              person.name === "Dave Ramsey"
                ? daveInView
                : person.name === "Dr. John Delony"
                ? delonyInView
                : otherInView
            }
            className={`Nav-button Nav-button--${person.name
              .replace(".", "")
              .replace(" ", "")
              .replace(" ", "")
              .toLowerCase()} ${
              person.name === selected ? "Nav-button--selected" : ""
            }`}
            onClick={() => setSelectedPerson(person.name)}
            key={person.id}
          >
            <img src={person.src} alt={person.name} />
          </button>
        ))}
      </nav>
      <SwipeArrows left={leftArrow} right={rightArrow} />
    </>
  );
};

export default Nav;
