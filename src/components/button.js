import * as React from "react";

const Button = ({
  setSelectedSound,
  label,
  selected,
  name,
  sound,
  id,
  children,
}) => {
  return (
    <div className='Sound-buttonWrapper margin-bottom--md margin-top--md'>
      <button
        className='Sound-button'
        onClick={() => {
          setSelectedSound(label);
          if (sound !== undefined) {
            document.getElementById(`${name}-player-${id}`).play();
          }
        }}
        data-button-sound
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='93'
          height='93'
          viewBox='0 0 93 93'
          className={`button-svg margin-bottom--sm ${
            label === selected ? "selected" : ""
          }`}
        >
          <path d='M46.5 75.5c0 1.6-0.9 3.1-2.4 3.8 -0.6 0.3-1.2 0.4-1.8 0.4 -1 0-1.9-0.3-2.7-1l-23.1-19.1H4.2C1.9 59.6 0 57.7 0 55.4V38.6c0-2.3 1.9-4.2 4.2-4.2h12.3l23.1-19.1c1.3-1 3-1.3 4.5-0.6 1.5 0.7 2.4 2.2 2.4 3.8L46.5 75.5 46.5 75.5zM62.8 68.9c-0.1 0-0.2 0-0.3 0 -1.1 0-2.2-0.4-3-1.2l-0.6-0.6c-1.5-1.5-1.7-3.8-0.4-5.5 3.2-4.3 4.8-9.3 4.8-14.6 0-5.7-1.9-11.1-5.5-15.5 -1.4-1.7-1.2-4.1 0.3-5.6l0.6-0.6c0.8-0.8 2-1.3 3.2-1.2 1.2 0.1 2.3 0.6 3.1 1.5 5 6.1 7.6 13.5 7.6 21.4 0 7.4-2.3 14.4-6.7 20.2C65.1 68.2 64 68.8 62.8 68.9zM80.3 82c-0.8 0.9-1.9 1.4-3.1 1.5 -0.1 0-0.1 0-0.2 0 -1.1 0-2.2-0.4-3-1.2l-0.6-0.6c-1.6-1.5-1.7-4-0.2-5.7 6.8-8.1 10.6-18.4 10.6-29 0-11-4-21.6-11.3-29.8 -1.5-1.7-1.4-4.2 0.2-5.8l0.6-0.6c0.8-0.8 1.9-1.3 3.1-1.2 1.2 0 2.3 0.5 3 1.4 8.8 9.9 13.7 22.7 13.7 36C93 59.8 88.5 72.2 80.3 82z' />
        </svg>
        {children}
      </button>
    </div>
  );
};

export default Button;
