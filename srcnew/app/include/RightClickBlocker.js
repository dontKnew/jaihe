'use client'
import React, { useEffect } from 'react';

const RightClickBlocker = () => {
  const message = "This function is not allowed here.";

  useEffect(() => {
    const clickIE4 = (event) => {
      if (event.button === 2) {
        alert(message);
        return false;
      }
    };

    const clickNS4 = (e) => {
      if (document.layers || (document.getElementById && !document.all)) {
        if (e.which === 2 || e.which === 3) {
          alert(message);
          return false;
        }
      }
    };

    if (document.layers) {
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown = clickNS4;
    } else if (document.all && !document.getElementById) {
      document.onmousedown = clickIE4;
    }

    document.oncontextmenu = () => {
      alert(message);
      return false;
    };

    // Cleanup event listeners when the component unmounts
    return () => {
      document.onmousedown = null;
      document.oncontextmenu = null;
    };
  }, []); // Empty dependency array means this useEffect runs once after component mount.

  return <></>; // This component doesn't render any visible content.
};

export default RightClickBlocker;
