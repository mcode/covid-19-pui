import React from 'react';
import tocbot from 'tocbot';

function Navigation() {
  return <div className="toc"></div>;
}

function updateTOC() {
  // Initialize Tocbot
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.tocHeading',
    headingSelector: 'h1'
  });
}

function cleanUpTOC() {
  tocbot.destroy();
}

export default Navigation;
export { updateTOC, cleanUpTOC };
