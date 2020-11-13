import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BgUpl } from "../components/bgImgUpl";
import { ShowEnd } from "../components/showEnd";
import { Timer } from "../components/timer";
import { InstruMod } from "../components/instructionModal";
import { Box } from "rebass";
import { useRouter } from "next/router";
import { useContext } from "react";
import ShowEndContext from "../contexts/ShowEndContexts";
import { Header } from "../components/header";
import { Warning } from "../components/modalWarning";
import { Transition } from "react-transition-group";

export default function Home() {
  const router = useRouter();
  const query = router.query;
  // const [x, setX] = useState(500);
  // const [y, setY] = useState(500);
  const [disable, setDisable] = useState(false);
  // const [circles, setCircles] = useState([]);
  // const [inGame, setInGame] = useState(false);
  const [upload, setUpload] = useState();
  // const [showUrl, setShowUrl] = useState(true);
  const [toggleCorrect, setToggleCorrect] = useState();
  // const [showEnd, setShowEnd] = useState(false);
  // const [history, setHistory] = useState([]);

  // const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [opts, setOpts] = useState([]);
  const [curAct, setCurAct] = useState(false);
  const { warning, setWarning } = useContext(ShowEndContext);
  const { startIt, setStartIt } = useContext(ShowEndContext);
  const { setInverted } = useContext(ShowEndContext);
  const { inverted } = useContext(ShowEndContext);
  useEffect(() => {
    query > 0 && query["opt"].includes(10)
      ? setInverted(true)
      : setInverted(false);
  }, [query]);

  const { setX } = useContext(ShowEndContext);
  const { x } = useContext(ShowEndContext);

  const { setBNW } = useContext(ShowEndContext);
  const { bNw } = useContext(ShowEndContext);

  const { y } = useContext(ShowEndContext);
  const { setY } = useContext(ShowEndContext);

  const { setTime } = useContext(ShowEndContext);
  const { time } = useContext(ShowEndContext);

  const { setCircles } = useContext(ShowEndContext);
  const { circles } = useContext(ShowEndContext);

  const { setInGame } = useContext(ShowEndContext);
  const { inGame } = useContext(ShowEndContext);

  const { setHistory } = useContext(ShowEndContext);
  const { history } = useContext(ShowEndContext);

  const { setShowEnd } = useContext(ShowEndContext);
  const { showEnd } = useContext(ShowEndContext);

  const { setShowUrl } = useContext(ShowEndContext);
  const { showUrl } = useContext(ShowEndContext);

  useEffect(() => {
    document.onmousemove = !showUrl && onMouseMove;
    document.onclick = !showUrl && onClick;
    document.onkeydown = onKeyDown;
  });

  const onMouseMove = (e) => {
    e = e || window.event;
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now());
    }, 10);

    time === -1 && clearInterval(timer);
  });

  const startTimer = (str) => {
    str === "start" && setTimerOn(true);
    str === "start" && setTime(0);
    setTimerStart(time);
  };

  const stopTimer = () => {
    setFinalTime(time - timerStart);
    setTimerOn(false);
  };
  const resetTimer = () => {
    setTime(-1);
    setTimerStart(0);
  };

  // useEffect(async () => {
  //   const p = await new Date();
  //   let j = p.getTime();

  //   let k = [...circles]
  //   let o = [...history]
  //   inGame && time < 0.1;
  //   // inGame && k.length > 0 && k[0].index === o[o.length - 1].index && time && setTime(j - time)

  // },[circles])

  useEffect(() => {
    inGame && setTime(0);
  }, [inGame]);

  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 90:
        let q = [...circles];
        !inGame &&
          e.ctrlKey &&
          setCircles(q.filter((x, i) => i < q.length - 1));
        break;
      case 82:
        showEnd && levelRestart();
        break;
      case 70:
        showEnd && sameBG();
        break;
      case 13:
        showUrl && setStartIt(true);
      case 27:
        warning && setWarning(false);
        break;
      case 81:
        showEnd && !warning && setWarning(true);
        warning && window.location.reload();
        break;
      case 32:
        let j = [...circles];
        showUrl && setStartIt(true);
        !showUrl && setHistory(j);
        !inGame &&
          !showUrl &&
          circles.length < 2 &&
          window.alert(
            `You selected less than two points, I cannot change to practice mode until you choose ${
              2 - circles.length
            } more point${circles.length < 1 ? "s" : ""}`
          );
        !showUrl && !showEnd && circles.length > 1 && setInGame(!inGame);

        break;
    }
  };

  const onClick = async (e) => {
    e = e || window.event;
    setX(e.clientX);
    setY(e.clientY);
    let q = [...circles];
    let r = [...history];
    !inGame &&
      q.push({ index: q.length, x: e.clientX - 23, y: e.clientY - 18 });
    let j =
      inGame &&
      q.length > 0 &&
      q[0].x < e.clientX &&
      q[0].x > e.clientX - 40 &&
      q[0].y < e.clientY &&
      q[0].y > e.clientY - 50
        ? true
        : false;
    inGame && q.length > 0 && q[0].index === 0 && startTimer("start");
    inGame &&
      q.length > 0 &&
      q[0].index === r[r.length - 1].index &&
      stopTimer();
    inGame && j && q.shift();
    setCircles(q);
    inGame && q.length < 1 && setShowEnd(true) && setInGame(false);
  };

  const levelRestart = async () => {
    await setShowEnd(false);
    setCurAct(false);
    await resetTimer;
    await setInGame(true);
    await setTime(null);
    let q = [...history];
    setCircles(q);
  };

  useEffect(() => {
    !bNw && query["opt"] && query["opt"].includes(1) && setBNW(true);
    bNw && setBNW(false);
  }, [router]);

  const sameBG = async () => {
    setCurAct(false);
    resetTimer;
    const delay = setTimeout(() => {
      setCircles([]);
    }, 1);
    await setInGame(false);
    await setShowEnd(false);
    await setTime(null);
    await delay;
  };
  return (
    <div
      className={styles.full}
      style={{
        fontFamily: 'Inter',
        background:
          !showUrl && upload
            ? `url('${upload}') no-repeat center center fixed`
            : bNw
            ? "black"
            : "none",
        transition: "background-image 300ms ease-in-out",
        cursor: showUrl ? "initial" : "none",
        filter: bNw && "saturate(0)",
      }}
    >
      {/* {!inGame && <Header />} */}
      {warning && (
        <Warning
          text="are you sure you wanna choose a new image?"
          commands="hit 'q' on your keyboard to continue or 'ESC' to go back"
        />
      )}

      {showEnd && (
        <ShowEnd
          opts={opts}
          setCurAct={setCurAct}
          history={history}
          time={finalTime}
          sameBG={sameBG}
          levelRestart={levelRestart}
          showEnd={showEnd}
        />
      )}
      {inGame && (
        <Timer time={!showEnd ? Math.round((time - timerStart) / 1000) : 0} />
      )}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          color: "white",
          fontWeight: "bolder",
          mx: 20,
        }}
      >
        <InstruMod showUrl={showUrl} inGame={inGame} showEnd={showEnd} />
      </Box>
      <BgUpl
        showUrl={showUrl}
        setShowUrl={setShowUrl}
        upload={upload}
        setUpload={setUpload}
        setCurAct={setCurAct}
        setCircles={setCircles}
        opts={opts}
        setOpts={setOpts}
      />
      <div
        style={{
          position: "absolute",
          top: y - (inGame ? 5 : 18),
          left: x - (inGame ? 10 : 23),
          overflow: "hidden",

          zIndex: 2,
        }}
      >
        <div
          style={{
            width: inGame ? "20px" : "50px",
            height: inGame ? "20px" : "50px",
            border: inGame ? "3px solid limegreen" : "1px solid orange",
            backgroundColor: inGame
              ? toggleCorrect
                ? "#32cd3260"
                : "#FFFFFF60"
              : "#00000060",

            borderRadius: "25px",

            transition: "all 300ms ease-in-out",
            display: showUrl || (curAct && "none"),
            visibility: showUrl && 'hidden'
          }}
        ></div>
      </div>
      {circles.length > 0 &&
        circles.map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: x.y,
              left: x.x,
              overflow: "hidden",
              transition:
                router && query["opt"].includes(5) && "all 300ms linear",
              zIndex: 0,
            }}
          >
            <div
              key={"j" + i}
              onMouseEnter={() => setToggleCorrect(true)}
              onMouseLeave={() => setToggleCorrect(false)}
              style={{
                width: circles.length - 1 === i ? "40px" : "50px",
                height: circles.length - 1 === i ? "40px" : "50px",
                backgroundColor:
                  circles.length - 1 === i
                    ? !inGame
                      ? inverted
                        ? "#070701"
                        : "ghostwhite"
                      : inverted
                      ? "#4f1f19"
                      : "powderblue"
                    : i === 0
                    ? inverted
                      ? "#002152"
                      : "navajowhite"
                    : inverted
                    ? "#4f1f19"
                    : "powderblue",
                border: i === 0 && inGame && "5px solid orange",
                borderRadius: circles.length - 1 === i ? "20px" : "25px",
                boxShadow: "outset 0 0 20px #c3c3c360",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color:
                  circles.length - 1 === i
                    ? "yellow"
                    : i === 0
                    ? "darkred"
                    : "black",
                fontWeight: 600,
                fontSize:
                  circles.length - 1 === i
                    ? "1.1rem"
                    : i === 0
                    ? "1.4rem"
                    : "1.2rem",
                zIndex: "inherit",
                transition:
                  router && query["opt"].includes(2) && "all 300ms linear",
              }}
            >
              {i === 0 && "+"}
              {i === circles.length - 1 && "-"}
            </div>
          </div>
        ))}
    </div>
  );
}
