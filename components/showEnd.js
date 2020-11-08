import { useState } from "react";
import { Box } from "rebass";

export const ShowEnd = ({
  showEnd,
  sameBG,
  setCurAct,
  history,
  time,
  levelRestart,
}) => {
  const k = levelRestart;
  const j = sameBG;

  return (
    showEnd && (
      <div
        style={{
          position: "absolute",
          width: "100vw",
          minHeight: "100vh",
          top: 0,
          left: 0,
          backgroundColor: "black",
          color: "white",
          display: "flex",
          padding: 75,
          fontSize: "2rem",
          justifyContent: "flex-end",

          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div onMouseEnter={() => setCurAct(true)}
            onMouseLeave={() => setCurAct(false)} >Total Time: {time / 1000} seconds</div>
        <div onMouseEnter={() => setCurAct(true)}
            onMouseLeave={() => setCurAct(false)} >Clicks Per Second: {time / 1000 / history.length}</div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 10,
          }}
        >
          <Box
            onMouseEnter={() => setCurAct(true)}
            onMouseLeave={() => setCurAct(false)}
            onClick={k}
            sx={{
              mr: 20,
              zIndex: 14,
              ":hover": {
                color: "springgreen",
                cursor: "pointer",
              },
            }}
          >
            Try Again
          </Box>
          <Box  onMouseEnter={() => setCurAct(true)}
            onMouseLeave={() => setCurAct(false)} onClick={j} sx={{ zIndex: 14,  ":hover": {
                color: 'thistle',
                cursor: "pointer",
              }, }}>
            Change Order
          </Box>
          <Box
             onMouseEnter={() => setCurAct(true)}
             onMouseLeave={() => setCurAct(false)} onClick={() => window.location.reload()}
            sx={{ ml: 20, zIndex: 14,  ":hover": {
                color: 'palevioletred',
                cursor: "pointer",
              }, }}
          >
            New Image
          </Box>
        </div>
        <Box
        onMouseEnter={() => setCurAct(true)}
        onMouseLeave={() => setCurAct(false)} 
        onClick={() => window.location.assign('https://rasha.world')}
          sx={{
            mt: 10,
            transition: 'all 300ms ease-in-out',
            ":hover": {
                backgroundColor: 'white',
                padding: 1,
                transform: 'scale(1.1)',
                color: 'black',
                fontWeight: 600,
                cursor: 'pointer'
            }
          }}
        >
          Created by Rasha Rahman
        </Box>
      </div>
    )
  );
};
