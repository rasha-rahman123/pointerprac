import { useEffect, useState } from "react";
import { Box } from "rebass";

export const InstruMod = ({ showUrl }) => {
  const [change, setChange] = useState(false);
  const [show, setShown] = useState(false)

  useEffect(() => {
    !showUrl && show === false && setChange(true) && setShown(true)
  }, [showUrl]);

  useEffect(() => {
      const timeout = change && setTimeout(() => {
        setChange(false)
      }, 10000)
    change && timeout
  }, [change]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "75vw",
        mx: "auto",
        height: "20vh",
        border: "10px solid black",
        backgroundColor: "navajowhite",
        fontSize: "2.4rem",
        color: "black",
        fontWeight: 800,
        opacity: change ? 0.8 : 0,
        visibility: change ? 'visible' : 'hidden',
        bottom: 30,
        zIndex: 20,
        transition: "opacity 2s ease-in-out",
        ":hover": {
            opacity: 0.2
        }
      }}
    >
      press 'spacebar' to switch between edit (black dot cursor) or practice
      (white dot cursor) mode
    </Box>
  );
};
