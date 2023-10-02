import React, { useState } from "react";
import Assistant from "./Assistant";
import { Grid, Typography, Card, CardContent, CardMedia, AppBar, Toolbar, Container } from "@mui/material";
import animation from '../img/animation.gif';
import KuwaitiDinar from '../img/kwd.jpg';
import BahrainiDinar from '../img/bahraini-dinar.jpg';
import OmaniRial from '../img/omani-rial.webp';
import questionMark from '../img/question-mark.png';

const Cursor = () => {
  const [assistantPosition, setAssistantPosition] = useState({ x: 0, y: 0 });

  const currencies = [
    {
      name: "Kuwaiti dinar (KWD)",
      explanation: "Kuwaiti dinar (KWD) Oil-rich, pegged to USD.",
      image: KuwaitiDinar,
      moreExplanation: " Oil-rich country with a pegged currency to the US dollar, making it a stable and reliable store of value.especially in times of economic uncertainty."
    },
    {
      name: "Bahraini dinar (BHD)",
      explanation: "Bahraini dinar (BHD) Small, diversified, low inflation.",
      image: BahrainiDinar,
      moreExplanation: "Small country with a diversified economy and low inflation, making its currency attractive to investors."
    },
    {
      name: "Omani rial (OMR)",
      explanation: "Omani rial (OMR Oil-rich, pegged to a basket of currencies.",
      image: OmaniRial,
      moreExplanation: "Oil-rich country with a pegged currency to a basket of currencies, making it a relatively stable currency."
    },
    
  ];

  const handleClick = (event, moreExplanation) => {
    setAssistantPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setExplanation(moreExplanation);
  };

  const [moreExplanation, setExplanation] = useState(
    "click on the question mark icon for more info."
  );

  return (
    <Container>
      <AppBar position="static" style={{backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Toolbar>
          <Typography variant="h6">To 3 Currencies in the World </Typography>
        </Toolbar>
      </AppBar>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 3rem 2rem 13rem",
      }}
    >
      <div
        id="cursor"
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
          bottom: 0,
          left: 0,
          margin: "1rem 3rem 1rem 2rem",
          transition: "transform 0.6s ease-in-out",
        }}
      ></div>
      <div
        className="assistant"
        style={{
          position: "absolute",
          left: assistantPosition.x,
          top: assistantPosition.y,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={animation}
          alt="animation"
          style={{ width: "7rem", height: "7rem", marginRight: "-1rem" }}
        />
        <Assistant explanation={moreExplanation} />
      </div>
      
      <Grid container spacing={2} style={{ marginLeft: "-10rem" }}>
      <Grid item xs={12} style={{ marginBottom: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Currencies are the lifeblood of the global economy, allowing us to trade, invest, and protect our wealth.
        </Typography>
        <Typography variant="body1" align="center">
          They come in all shapes and sizes, with different properties that suit different needs. Understanding currencies is essential for making informed financial decisions.
        </Typography>
      </Grid>
   
      <Grid container spacing={8} >
        {currencies.map((currency, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Card sx={{ maxWidth: 345, backgroundColor: "black", color: "white" }}>
              <CardMedia
                component="img"
                height="140"
                image={currency.image}
                alt={currency.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {currency.name}
                </Typography>
                <Typography variant="body2" color="white">
                  {currency.moreExplanation}
                </Typography>
              </CardContent>
              <button
                onMouseDown={(event) => handleClick(event, currency.explanation)}
                style={{
                  borderRadius: "50%",
                  width: "1.5rem",
                  height: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={questionMark}
                  alt="question mark"
                  style={{ width: "1rem", height: "1rem" }}
                />
              </button>
            </Card>
          </Grid>
        ))}
      </Grid>
       </Grid>
    </div>
    </Container>
  );
};

export default Cursor;
