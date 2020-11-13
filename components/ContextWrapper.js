import ShowEndContext from '../contexts/ShowEndContexts'
import { useState} from 'react'

export const ContextWrapper = ({children}) => {
    const [x, setX] = useState(500);
  const [y, setY] = useState(500);
  const [disable, setDisable] = useState(false);
  const [circles, setCircles] = useState([]);
  const [inGame, setInGame] = useState(false);
  const [upload, setUpload] = useState();
  const [showUrl, setShowUrl] = useState(true);
  const [toggleCorrect, setToggleCorrect] = useState();
  const [showEnd, setShowEnd] = useState(false);
  const [history, setHistory] = useState([]);
  const [inverted, setInverted] = useState(false);
  const [bNw, setBNW] = useState(false);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [opts, setOpts] = useState([]);
  const [curAct, setCurAct] = useState(false);
  const [warning, setWarning] = useState(false)
  const [startIt,setStartIt] = useState(false)

  return (
      <ShowEndContext.Provider value={{x,y,disable,circles,inGame,upload,showUrl,toggleCorrect,showEnd,history,time,timerOn,timerStart,finalTime,opts,curAct,inverted, bNw, warning, startIt, setX, setY, setDisable, setCircles, setInGame, setUpload, setShowUrl, setToggleCorrect, setShowEnd, setHistory, setTime, setTimerOn, setTimerStart, setFinalTime, setOpts,setCurAct,setInverted, setBNW, setWarning, setStartIt}}>
          {children}
      </ShowEndContext.Provider>
  )
}