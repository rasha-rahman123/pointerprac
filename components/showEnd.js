import { useEffect, useState, useContext } from "react";
import { Box } from "rebass";
import { Router, useRouter } from "next/router";
import ShowEndContext from "../contexts/ShowEndContexts";
import { Transition } from "react-transition-group";

export const ShowEnd = ({
  showEnd,
  sameBG,
  setCurAct,
  history,
  time,
  levelRestart,
  opts,
}) => {
  const k = levelRestart;
  const j = sameBG;
  const router = useRouter();
  const a = opts.sort().join("");

  const { bNw, setWarning } = useContext(ShowEndContext);
  
  return (
(showEnd &&
     
            <div
              style={{
                position: "absolute",
                width: "100vw",
                minHeight: "100vh",
                top: 0,
                left: 0,
                background: bNw ? "black" : "none",
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
              <div
                onMouseEnter={() => setCurAct(true)}
                onMouseLeave={() => setCurAct(false)}
                style={{ cursor: "text" }}
              >
                <div> Total Time </div>

                <Box
                  sx={{
                    fontSize: "6rem",
                    lineHeight: "80%",
                    fontWeight: "bolder",
                    color: "lavenderblush",
                    textShadow: "10px 3px 1px black",
                    mb: 2,
                  }}
                >
                  {time / 1000} seconds
                </Box>
              </div>
              <div
                onMouseEnter={() => setCurAct(true)}
                onMouseLeave={() => setCurAct(false)}
                style={{ cursor: "text" }}
              >
                <div>Clicks Per Second</div>
                <Box
                  sx={{
                    fontSize: "6rem",
                    lineHeight: "80%",
                    fontWeight: "bolder",
                    color: "mistyrose",
                    textShadow: "-8px 2px 1px black",
                    mb: 2,
                  }}
                >
                  {" "}
                  {(time / 1000 / (history.length - 1)).toFixed(4)}
                </Box>
              </div>
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
                  Try Again (R)
                </Box>
                <Box
                  onMouseEnter={() => setCurAct(true)}
                  onMouseLeave={() => setCurAct(false)}
                  onClick={j}
                  sx={{
                    zIndex: 14,
                    ":hover": {
                      color: "thistle",
                      cursor: "pointer",
                    },
                  }}
                >
                  Change Order (F)
                </Box>
                <Box
                  onMouseEnter={() => setCurAct(true)}
                  onMouseLeave={() => setCurAct(false)}
                  onClick={() => setWarning(true)}
                  sx={{
                    ml: 20,
                    zIndex: 14,
                    ":hover": {
                      color: "palevioletred",
                      cursor: "pointer",
                    },
                  }}
                >
                  New Image (Q)
                </Box>
              </div>
              <Box
                onMouseEnter={() => setCurAct(true)}
                onMouseLeave={() => setCurAct(false)}
                onClick={() => window.location.assign("https://rasha.world")}
                sx={{
                  mt: 10,
                  display: "block",
                  transition: "all 300ms ease-in-out",
                  ":hover": {
                    backgroundColor: "white",
                    padding: 1,
                    transform: "scale(1.1)",
                    color: "black",
                    fontWeight: 600,
                    cursor: "pointer",
                  },
                }}
              >
                Created by Rasha Rahman
              </Box>
            </div>

    )
  );
};
