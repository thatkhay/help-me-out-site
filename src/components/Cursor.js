import React, { useState } from "react";
import Assistant from "./Assistant";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import animation from '../img/animation.gif';
import KuwaitiDinar from '../img/kwd.jpg';
import BahrainiDinar from '../img/bahraini-dinar.jpg';
import OmaniRial from '../img/omani-rial.webp';
import JordanianDinar from '../img/jordanian-dinar.jpg';
import BritishPound from '../img/pounds.jpg';
import SwissFranc from '../img/swizz-franc.jpg';
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
    {
      name: "Jordanian dinar (JOD)",
      explanation: "Jordanian dinar (JOD) Stable, low inflation, pegged to USD.",
      image: JordanianDinar,
      moreExplanation: "Stable country with low inflation and a pegged currency to the US dollar, making its currency a good option for businesses and individuals looking for a stable currency."
    },
    {
      name: "British pound (GBP)",
      explanation: "British pound (GBP) Strong economy, low inflation, floating.",
      image: BritishPound,
      moreExplanation: "Strong economy with low inflation and a floating currency, making it a popular currency for international trade and investment."
    },
    {
      name: "Swiss franc (CHF)",
      explanation: " Swiss franc (CHF) Safe haven, stable, low inflation.",
      image: SwissFranc,
      moreExplanation: "Safe haven currency with a stable economy and low inflation, making it a popular choice for investors during times of uncertainty."
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
    "click on buttons for more info."
  );

  return (
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
          style={{ width: "40%", height: "40%", marginRight: "-1rem" }}
        />
        <Assistant explanation={moreExplanation} />
      </div>
      <Grid container spacing={8} style={{ marginLeft: "-10rem" }}>
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
                  {currency.explanation}
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
    </div>
  );
};

export default Cursor;
