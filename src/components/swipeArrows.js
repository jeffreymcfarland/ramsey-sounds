import React from "react";

const swipeArrows = ({ left, right }) => {
  return (
    <div className='SwipeWrapper'>
      <div
        className={`Swipe Swipe-right ${
          left === false ? "Swipe--visible" : ""
        }`}
      >
        <svg
          enable-background='new 0 0 240.823 240.823'
          version='1.1'
          viewBox='0 0 240.823 240.823'
          xmlns='http://www.w3.org/2000/svg'
          className='SwipeIcon SwipeIcon-right'
        >
          <path d='m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z' />
        </svg>
      </div>
      <div
        className={`Swipe Swipe-left ${
          right === false ? "Swipe--visible" : ""
        }`}
      >
        <svg
          enable-background='new 0 0 240.823 240.823'
          version='1.1'
          viewBox='0 0 240.823 240.823'
          xmlns='http://www.w3.org/2000/svg'
          className='SwipeIcon SwipeIcon-left'
          transform='rotate(180)'
        >
          <path d='m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z' />
        </svg>
      </div>
    </div>
  );
};

export default swipeArrows;
