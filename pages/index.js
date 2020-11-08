import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BgUpl } from "../components/bgImgUpl";
import { ShowEnd } from "../components/showEnd";
import { Timer } from "../components/timer";
import { InstruMod } from "../components/instructionModal";

export default function Home() {
  const [x, setX] = useState(500);
  const [y, setY] = useState(500);
  const [disable, setDisable] = useState(false);
  const [circles, setCircles] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [upload, setUpload] = useState('https://cdn-www.bluestacks.com/bs-images/Among-Us_Polus-Task-Guide_EN_25.jpg');
  const [showUrl, setShowUrl] = useState(true);
  const [toggleCorrect, setToggleCorrect] = useState();
  const [showEnd, setShowEnd] = useState(false);
  const [history, setHistory] = useState([]);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  const [curAct, setCurAct] = useState(false);


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
      setTime(Date.now())
    }, 10);

    time === -1 && clearInterval(timer)
  })

  const startTimer = (str) => {

    str === 'start' && setTimerOn(true);
    str === 'start' && setTime(0)
    setTimerStart(time)
    

    
  };

  const stopTimer = () => {
    setFinalTime(time - timerStart)
    setTimerOn(false)

  };
  const resetTimer = () => {
   setTime(-1)
   setTimerStart(0)
  };



  // useEffect(async () => {
  //   const p = await new Date();
  //   let j = p.getTime();


    
  //   let k = [...circles]
  //   let o = [...history]
  //   inGame && time < 0.1;
  //   // inGame && k.length > 0 && k[0].index === o[o.length - 1].index && time && setTime(j - time) 

  // },[circles])



  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 90:
        let q = [...circles];
        e.ctrlKey && setCircles(q.filter((x, i) => i < q.length - 1));
        break;
      case 32:
        let j = [...circles];
        setHistory(j);
        setInGame(!inGame);
       
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
        inGame && q.length > 0 && q[0].index === 0 && startTimer('start')
        inGame && q.length > 0 && q[0].index === r[r.length - 1].index && stopTimer()
    inGame && j && q.shift();
    setCircles(q);
    inGame && q.length < 1 && setShowEnd(true) && setInGame(false);
  };

  const levelRestart = async () => {
    setCurAct(false)
    await resetTimer;
    await setInGame(true);
    await setTime(null);
    let q = [...history];
    setCircles(q);
    setShowEnd(false);
  };



  const sameBG = async () => {
    setCurAct(false)
    await resetTimer;
    const delay = setTimeout(() => {
      setCircles([]);
    },200)
    await setInGame(false);
    await   setShowEnd(false);
    await setTime(null);
    await delay;
  
  };
  return (
    <div
      className={styles.full}
      style={{
        background: !showUrl
          ? `url('${upload}') no-repeat center center fixed`
          : "skyblue",
          cursor: showUrl ? 'initial' : 'none'
      }}
    >
      {showEnd && <ShowEnd setCurAct={setCurAct} history={history} time={finalTime} sameBG={sameBG} levelRestart={levelRestart} showEnd={showEnd} />}
      {inGame && <Timer time={!showEnd ? Math.round((time - timerStart) / 1000) : 0} />}
      <InstruMod showUrl={showUrl} />
      <BgUpl
        showUrl={showUrl}
        setShowUrl={setShowUrl}
        upload={upload}
        setUpload={setUpload}
        setCurAct={setCurAct}
        setCircles={setCircles}
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
            border: '1px solid orange',
            backgroundColor: inGame
              ? toggleCorrect
                ? "#32cd3260"
                : "#FFFFFF60"
              : "#00000060",
            borderRadius: "25px",
          
            transition: "all 300ms ease-in-out",
            display: showUrl || curAct && "none",
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
                      ? "orange"
                      : "blue"
                    : i === 0
                    ? "purple"
                    : "blue",
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
                    ? "skyblue"
                    : "white",
                fontWeight: 600,
                fontSize:
                  circles.length - 1 === i
                    ? "1.1rem"
                    : i === 0
                    ? "1.4rem"
                    : "1.2rem",
                zIndex: "inherit",
                transition: "all 300ms ease-in-out",
              }}
            >
              {i === 0 && "+"}
            </div>
          </div>
        ))}
    </div>
  );
}
