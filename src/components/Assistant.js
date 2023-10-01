// Assistant.js
import React, { useState } from 'react';



function Assistant({ explanation }) {
  return (
    <div className="assistant">
      {explanation && (
        <div className="assistant-hover-icon">
          <span>
           
          </span>
        </div>
      )}
      <div className="assistant-content" style={{marginTop: '-7rem', marginRight: '-2rem', border : '2px dotted white', borderRadius: '.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', padding: '.5rem .5rem 1rem .5rem'}}>
        <p  style={{color: 'white', height: "1rem", width: '10rem', fontWeight: 400, fontSize: '.8rem' }}>{explanation}</p>
      </div>
    </div>
  );
}

export default Assistant;
