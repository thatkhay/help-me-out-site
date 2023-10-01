import React, { useState, useRef, useEffect } from "react";

const DivTranslation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);
  const e = useRef(null);

  const handlePageClick = (event) => {
    e.current = event;
    const newX = event.clientX;
    const newY = event.clientY;

    // Check if the values are finite
    if (!Number.isFinite(newX) || !Number.isFinite(newY)) {
      return;
    }

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (e.current && e.current.clientX && e.current.clientY) {
      const target = document.elementFromPoint(e.current.clientX, e.current.clientY);

      if (target !== divRef.current) {
        divRef.current.style.left = `${target.offsetLeft}px`;
        divRef.current.style.top = `${target.offsetTop}px`;
      }
    }
  }, [e.current]);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        transition: "transform 0.3s ease-in-out",
        position: "absolute",
      }}
      ref={divRef}
      onClick={handlePageClick}
    ></div>
  );
};

export default DivTranslation;
