import React, { useState } from "react";
import Assistant from "./Assistant";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import animation from "../img/animation.gif";
import KuwaitiDinar from "../img/kwd.jpg";
import BahrainiDinar from "../img/bahraini-dinar.jpg";
import OmaniRial from "../img/omani-rial.webp";
import JordanianDinar from "../img/jordanian-dinar.jpg";
import BritishPounds from "../img/pounds.jpg";
import SwizzFrac from "../img/swizz-franc.jpg";
import questionMark from "../img/question-mark.png";
import Footer from "./Footer";

const Cursor = () => {
  const [assistantPosition, setAssistantPosition] = useState({ x: 0, y: 0 });

  const currencies = [
    {
      name: "Kuwaiti dinar (KWD)",
      explanation: "Kuwaiti dinar (KWD) Oil-rich, pegged to USD.",
      image: KuwaitiDinar,
      moreExplanation:
        "Oil-rich country with a pegged currency to the US dollar, making it a stable and reliable store of value, especially in times of economic uncertainty.",
    },
    {
      name: "Bahraini dinar (BHD)",
      explanation: "Bahraini dinar (BHD) Small, diversified, low inflation.",
      image: BahrainiDinar,
      moreExplanation:
        "Small country with a diversified economy and low inflation, making its currency attractive to investors.",
    },
    {
      name: "Omani rial (OMR)",
      explanation: "Omani rial (OMR Oil-rich, pegged to a basket of currencies.",
      image: OmaniRial,
      moreExplanation:
        "Oil-rich country with a pegged currency to a basket of currencies, making it a relatively stable currency.",
    },
    {
      name: "Jordanian dinar (JOD)",
      explanation: "Stable, low inflation, pegged to USD.",
      image: JordanianDinar,
      moreExplanation:
        "Stable country with low inflation and a pegged currency to the US dollar, making its currency a good option for businesses and individuals looking for a stable currency..",
    },
    {
      name: "British pound (GBP)",
      explanation: "Strong economy, low inflation, floating.",
      image: BritishPounds,
      moreExplanation:
        " Strong economy with low inflation and a floating currency, making it a popular currency for international trade and investment..",
    },
    {
      name: "Swiss franc (CHF)",
      explanation: "Safe haven, stable, low inflation..",
      image: SwizzFrac,
      moreExplanation:
        "Safe haven currency with a stable economy and low inflation, making it a popular choice for investors during times of uncertainty..",
    },
  ];

  // Update the `handleInteraction` function to check if the `cursor-touch` class is present on the `cursor` element
const handleInteraction = (event, moreExplanation) => {
  let x, y;

  if (event.type === "touchstart" || event.type === "touchmove") {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  } else {
    x = event.clientX;
    y = event.clientY;
  }

  setAssistantPosition({
    x,
    y,
  });

  if (document.querySelector("#cursor").classList.contains("cursor-touch")) {
    setExplanation(moreExplanation);
  }
};


  const [moreExplanation, setExplanation] = useState(
    "Click on the question mark icon for more info."
  );

  return (
    <Container>
      <AppBar
        position="static"
        style={{
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Toolbar>
          <Typography variant="h6">Top 3 Currencies in the World</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Adjusted padding for mobile responsiveness
        }}
      >
        <div
 
  id="cursor"
  className="cursor-touch"
  style={{
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "black",
    opacity: 0,
    position: "fixed",
    top: assistantPosition.y - 15,
    left: assistantPosition.x - 15,
    transition: "transform 0.1s ease-in-out",
  }}
></div>


       

        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginBottom: "2rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Currencies are the lifeblood of the global economy, allowing us to trade, invest, and protect our wealth.
            </Typography>
            <Typography variant="body1" align="center">
              They come in all shapes and sizes, with different properties that suit different needs. Understanding currencies is essential for making informed financial decisions.
            </Typography>
          </Grid>

<Container>
          <Grid container spacing={2} style={{display: 'flex', alignItems: 'center', marginLeft: '.01rem'}}>
            {currencies.map((currency, index) => (
              <Grid item key={index} xs={12} sm={4} style={{display: 'flex', alignItems: 'center'}}>
                <Card
                  sx={{ maxWidth: 345, backgroundColor: "black", color: "white" }}
                >
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
                    onMouseDown={(event) =>
                      handleInteraction(event, currency.explanation)
                    }
                    onTouchStart={(event) =>
                      handleInteraction(event, currency.explanation)
                    }
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
          </Container>
        </Grid>
      </div>
      <Footer/>
       <div
           style={{
    position: "fixed",
    left: assistantPosition.x,
    top: assistantPosition.y,
    display: "flex",
    alignItems: "center",
    zIndex: 9999, 
   // Ensure it appears on top of other elements
  }}
        >
          <img
            src={animation}
            alt="animation"
            style={{ width: "7rem", height: "7rem", marginRight: "-1rem" }}
          />
          <Assistant explanation={moreExplanation} />
        </div>
    </Container>
  );
};

export default Cursor;
