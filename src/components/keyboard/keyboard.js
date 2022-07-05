import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { playAudio, SOUNDS } from "../../helpers/sound";

const Keyboard = () => {
  const [volume, setVolume] = useState();
  const [isPiano, setIsPiano] = React.useState(true);
  const [on, setOn] = useState(true);

  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
  };

  const handlePlaySound = (soundName) => {
    if (on) {
      playAudio(SOUNDS[`sound${soundName}`][isPiano ? "piano" : "drum"]);
    }
  };

  return (
    <Box sx={{ bgcolor: "#8d8d8d" }}>
      <Box
        sx={{
          maxWidth: 600,
          bgcolor: "#b3b3b3",
          display: "flex",

          mt: 25,
          mx: "auto",
          borderRadius: 1,
          border: "5px solid orange",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1,
            flexWrap: "wrap",
            maxWidth: 150,
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{ bgcolor: "#808080" }}
              onClick={() => handlePlaySound(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ width: 320, display: " flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row", mx: "auto" }}>
            {" "}
            <Switch
              checked={on}
              onChange={(event) => setOn(event.target.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />{" "}
          </Box>
          <Box sx={{ mx: "auto", mt: 2, width: 200 }}>
            <Box
              sx={{
                width: 100,
                height: 20,
                border: "1px solid black",
                p: 2,
                mx: "auto",
              }}
            >
              {volume}
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Slider
                aria-label="Volume"
                value={volume}
                onChange={handleChange}
              />
            </Stack>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mx: "auto" }}>
            <span>
              Drum{" "}
              <Switch
                color="default"
                checked={isPiano}
                onChange={(event) => setIsPiano(event.target.checked)}
              />
              Piano
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Keyboard;
