import React from 'react';
import './Home.css';
import resume from '../../../william-krug-resume.pdf';

function Home() {
  // function pingMe() {
  //   console.log('\n\n*** Home => pingMe() ***');
  // }

  return (
    <div id="home-page">
      <div id="home-intro">
        <p class="body-text">Hello, my name is</p>
        <h1>William</h1>
        <h1>Krug</h1>
      </div>
      <div id="home-statement">
        <p class="body-text">
          A full stack software engineer that loves a good challenge and problem
          to solve.
        </p>
      </div>
      <div id="home-conversation">
        <p class="body-text">
          Let's start a conversation on{' '}
          <a
            href="https://www.linkedin.com/in/william-krug-67a86ab6/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div id="home-download">
        {/* <a href="../../../william-krug-resume.pdf" download={resume}> */}
        <a href={resume} download="william-krug-resume">
          <button
          // onClick={pingMe}
          >
            Download CV{' '}
            <span>
              <i class="bx bx-download"></i>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
