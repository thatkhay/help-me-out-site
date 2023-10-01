import React, { useState } from "react";
import ThreeDModel from "./ThreeDImage";
import Assistant from "./Assistant";
import { Grid, Typography } from "@mui/material";

 // Import your CSS file for additional styling

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: '33rem' });
  const [backgroundColor, setBackgroundColor] = useState("grey");
 const [hoveredButtonColor, setHoveredButtonColor] = useState(null); // Track hovered button color

  const handleButtonClick = (buttonColor) => {
    setBackgroundColor(buttonColor);
  };
  const handleMouseEnter = (buttonColor) => {
    setHoveredButtonColor(buttonColor); // Update the hovered button color
  };
   const handleMouseLeave = () => {
    setHoveredButtonColor(null); // Reset when mouse leaves the button
  };
  const handleMouseDown = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Define inline styles for the buttons
  const buttonStyle = {
    padding: "10px 20px",
    color: "white",
    border: 'solid 1px white',
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    
  };

  // Define inline styles for the buttons on hover
  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
    transform: "translateY(-3px)",
  };

  return (
    
       
       
       
        
    

      <div
        style={{
          width: "100%",
         display: 'flex',
     
          backgroundColor: backgroundColor,
          padding: ' 4rem 3rem 2rem  13rem ',
          
          height: '120vh'
        }}
      ><div style={{height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <div
        id="cursor"
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: cursorPosition.x,
          top: cursorPosition.y,
           margin: ' 4rem ',
            transition: " 0.3s ease-in-out",
        }}
      > 
      <div style={{display: 'flex', alignItems: 'center',  width: '17rem', flexDirection: 'column'}}>
         <ThreeDModel />
        <div style={{marginLeft:'-2rem'}}>
            <Assistant  explanation={
              hoveredButtonColor
                ? `This button turns your background ${hoveredButtonColor}`
                : "This is an assistant that can help you with your tasks."
            } /> 
        </div>
         
         
      </div>
        
      </div>

      
        <Grid container spacing={4}>
    
      <Grid item xs={12} sm={6} md={8}>
        <Typography variant="body1" style={{fontWeight: 700 , fontSize: '1.5rem', marginBottom: '2rem'}}>
          Once upon a time, there was a cursor that could change the background color of its world.
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={6} md={8} >
        <Typography variant="body1" style={{fontWeight: 400 , fontSize: '1rem', marginBottom: '2rem', color: "white", textTransform: 'italic'}}>
          The cursor had two buttons: blue and red . Each button would change the background color to its corresponding color.
        </Typography>
      </Grid>
    
      <Grid item xs={12} sm={6} md={8} style={{display: 'flex', alignItems: 'center', justifyContent: "space-around", width: '60rem'}}>
        <Typography variant="body1" style={{fontWeight: 400 , fontSize: '1rem', marginBottom: '5rem', border: '2px dotted white', padding: '2rem', width: '50%', height: '10rem'}}>
          One day, the cursor was bored. It decided to experiment with its buttons. The cursor clicked the blue button and the world turned blue. The cursor liked the blue color, but it wanted to see what other colors looked like.
         <button
          className="color-button blue"
          onMouseDown={() => handleButtonClick("blue")}
          onMouseEnter={handleMouseDown}
           onMouseOver={() => handleMouseEnter("blue")} // Update the hovered button color
          onMouseLeave={handleMouseLeave} 
          style={{
            padding: "10px 20px",
    color: "white",
   border: 'solid 1px white',
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    backgroundColor: "blue",
  
   
          }}
        >
          Blue
        </button>
        </Typography>
        <Typography variant="body1" style={{fontWeight: 400 , fontSize: '1rem', marginBottom: '5rem',  border: '2px dotted white', padding: '2rem', width: '50%',height: '10rem'}}>
          The cursor clicked the red button and the world turned red. The cursor liked the red color.
         <button
          className="color-button red"
          onMouseDown={() => handleButtonClick("red")}
          onMouseEnter={handleMouseDown}
          onMouseOver={() => handleMouseEnter("red")}
          onMouseLeave={handleMouseLeave}
           style={{
            padding: "10px 20px",
    color: "white",
    border: 'solid 1px white',
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    backgroundColor: "red",
 
          }}
        >
          Red
        </button>
        </Typography>
        
       
      </Grid>
    </Grid>
        {/* Content of your page goes here */}
      </div>
    </div>
  );
};

export default Cursor;
