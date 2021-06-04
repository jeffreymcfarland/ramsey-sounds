import React, { useState } from "react";

const Nav = ({ setSelectedPerson, selected }) => {
  const [persons, usePersons] = useState([
    {
      id: 1,
      name: "Dave Ramsey",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-dave-ramsey.jpg/120w.jpg",
    },
    {
      id: 2,
      name: "Rachel Cruze",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-rachel-cruze.jpg/120w.jpg",
    },
    {
      id: 3,
      name: "Ken Coleman",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-ken-coleman.jpg/120w.jpg",
    },
    {
      id: 4,
      name: "Christy Wright",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-christy-wright.jpg/120w.jpg",
    },
    {
      id: 5,
      name: "Anthony ONeal",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-anthony-oneal.jpg/120w.jpg",
    },
    {
      id: 6,
      name: "Dr. John Delony",
      src:
        "https://cdn2.ramseysolutions.net/dynamic/daveramsey.com/media/personalities/headshots/personality-john-delony.jpg/120w.jpg",
    },
  ]);

  return (
    <nav className='Nav'>
      {persons.map((person) => (
        <button
          className={`Nav-button ${
            person.name === selected ? "Nav-button--selected" : ""
          }`}
          onClick={() => setSelectedPerson(person.name)}
          key={person.id}
        >
          <img src={person.src} alt={person.name} />
        </button>
      ))}
    </nav>
  );
};

export default Nav;
