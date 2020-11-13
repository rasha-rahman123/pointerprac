import { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { Box } from "rebass";
import { FutureLogs } from "../components/futureLog";
import ShowEndContext from "../contexts/ShowEndContexts";
import { TheOptions } from "./options";

export const BgUpl = ({
  setUpload,
  upload,
  setCurAct,
  setCircles,
  setShowUrl,
  showUrl,
  opts,
  setOpts,
}) => {
  const doChange = (e) => {
    setCircles([]);
    setUpload(e.target.value);
  };

  const textBar = useRef();
  const doSubmit = () => {
    setCircles([]);
    setShowUrl(false);
  };

    const [hovered, setHovered] = useState();
  const { startIt } = useContext(ShowEndContext);

  useEffect(() => {
    startIt && doSubmit();
  }, [startIt]);


  return (
    showUrl && (
      <form onSubmit={doSubmit}>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vw",
            display: "flex",
            flexDirection: "column",
            color: "navajowhite",
            textAlign: "center",
          }}
        >
          <Transition in={true} timeout={0} appear>
            {(status) => (
              <div
                style={{
                  positon: "fixed",
                  top: 100,
                  right: 100,
                  color: "skyblue",
                  fontSize: "5rem",
                  margin: 20,
                  opacity: status === "entered" ? 1 : 0,
                  transform:
                    status === "entered"
                      ? "scale(1) translateY(0) skew(0deg, 0deg)"
                      : "scale(0) translateY(-200vh) skew(90deg, 0deg)",
                  transition:
                    "transform 500ms cubic-bezier(0, 0.61, 0.78, 0.99), opacity 500ms cubic-bezier(0.18, 0.39, 0.32, 0.28)",
                }}
              >
                practice point
              </div>
            )}
          </Transition>
          <Transition in={true} timeout={500} appear>
            {(status) => (
              <div
                style={{
                  positon: "fixed",
                  color: "skyblue",
                  fontSize: "1rem",
                  width: "400px",
                  borderRadius: 10,
                  margin: "0 auto",
                  opacity: status === "entered" ? 1 : 0,
                  transform:
                    status === "entered" ? "translateY(0)" : "translateY(-5vw)",
                  transition:
                    "transform 100ms ease-in-out, opacity 100ms ease-in-out",
                }}
              >
                a mouse accuracy tool
                <Box
                  onMouseEnter={() => setCurAct(true)}
                  onMouseLeave={() => setCurAct(false)}
                  onClick={() => window.location.assign("https://rasha.world")}
                  sx={{
                    mt: 10,
                    display: "block",
                    transition: "all 100ms ease-in-out",
                    ":hover": {
                      background:
                        "linear-gradient(270deg, #002d52, #944f00, #5f005f)",
                      backgroundSize: "600% 600%",
                      padding: 1,
                      transform: "scale(1.1)",
                      fontWeight: 450,
                      cursor: "pointer",
                    },
                  }}
                >
                  Created by Rasha Rahman
                </Box>
              </div>
            )}
          </Transition>
          <Transition in={true} timeout={700} appear>
            {(status) => (
              <div
                style={{
                  opacity: status === "entered" ? 1 : 0,
                  transform:
                    status === "entered" ? "translateX(0)" : "translateX(5vw)",
                  transition:
                    "transform 100ms cubic-bezier(0.33, 0.53, 0.71, 1.13), opacity 100ms ease-in-out",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "auto",

                    backgroundColor: "#FFFFF60",
                    color: "blue",
                    zIndex: 10,
                    marginBottom: 10,
                  }}
                >
                  <label
                    style={{
                      fontSize: "3rem",
                      color: "yellow",
                      margin: "200px 0 200px 0",
                    }}
                  >
                    {" "}
                    background url:{" "}
                  </label>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    value={upload}
                    ref={textBar}
                    style={{
                      border: "3px solid yellow",
                      background: "none",
                      fontSize: "1.4rem",
                      color: "white",
                    }}
                    onChange={(e) => doChange(e)}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                      background: "linear-gradient(90deg,#FFFFFF00,#002d52)",
                      backgroundSize: '600% 600%',
                      backgroundPositionX: hovered ? '100%' : '0%',
                      backgroundPositionY: '50%',
                      border: hovered ? "3px solid lightblue" : "3px solid yellow",
                      borderRadius: 3,
                      color: hovered ? "lightblue" : "yellow",
                      cursor: 'pointer',
                      boxShadow: "none",
                      transform: hovered ? 'scale(1.05)' : 'scale(1.0)',
                      transition: 'all 1s ease-in-out'
                    }}
                    value="Start Practicing"
                  />
                </div>
              </div>
            )}
          </Transition>
          <Transition in={true} timeout={500} appear>
            {(status) => (
              <div
                style={{
                  opacity: status === "entered" ? 1 : 0,
                  transform:
                    status === "entered" ? "translateY(0)" : "translateY(-5vw)",
                  transition:
                    "transform 100ms ease-in-out, opacity 100ms ease-in-out",
                }}
              >
                <div>
                  <TheOptions opts={opts} setOpts={setOpts} />
                </div>
                <FutureLogs />
              </div>
            )}
          </Transition>
        </div>
      </form>
    )
  );
};
