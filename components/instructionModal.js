import { useEffect, useState } from "react";
import { Box } from "rebass";

export const InstruMod = ({ showUrl, inGame, showEnd }) => {
  const [change, setChange] = useState(false);
  const [show, setShown] = useState(false)

  useEffect(() => {
    !showUrl && show === false && setChange(true) && setShown(true)
  }, [showUrl, inGame]);

  useEffect(() => {
    const timeout = change && setTimeout(() => {
      setChange(false)
    }, 15000)
  change && timeout
}, [change]);

  return (
    <Box
      sx={{
        height: "20vh",
        fontSize: "1.4rem",
        padding: 20,
        fontWeight: 800,
        opacity: change ? 0.8 : 0,
        visibility: change ? 'visible' : 'hidden',
        alignItems: 'left',
        textAlign: 'left',
        zIndex: 20,
        transition: "opacity 2s ease-in-out",
        ":hover": {
            opacity: 0.2
        }
      }}
    >
      {(!showEnd && !showUrl ) ? inGame ? 'PRACTICE MODE' : 'EDIT MODE' : ''}
      <span style={{
          display: 'block',
          fontSize: '0.8rem',
          opacity: 0.6
      }}>{!showEnd && !showUrl && `('spacebar' to change)`}</span>
    </Box>
  );
};
