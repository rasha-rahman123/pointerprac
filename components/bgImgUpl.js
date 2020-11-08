import { useState } from "react"
import { Box } from "rebass"
import { FutureLogs } from "./futurelog"

export const BgUpl = ({setUpload, upload, setCurAct, setCircles, setShowUrl, showUrl}) => {

    const doChange = (e) => {
        setCircles([])
        setUpload(e.target.value)
    }

    const doSubmit = () => {
        setCircles([])
        setShowUrl(false)
    }

   
return (
 showUrl &&<form onSubmit={doSubmit}><div style={{
      position: 'absolute',
      width: '100vw',
      height: '100vw',
      backgroundColor: 'black',
      display: "flex",
      flexDirection: 'column',

      textAlign: 'center'

  }}>


      <div style={{
          positon: 'fixed',
        top: 100,
        right: 100,
        color: 'skyblue',
        fontSize: '5rem',
        margin: 20
      }}>
          practice point
      </div>
      <div style={{
          positon: 'fixed',
        top: 100,
        right: 100,
        color: 'skyblue',
        fontSize: '1rem',
      }}>
          a mouse accuracy tool
          <Box
        onMouseEnter={() => setCurAct(true)}
        onMouseLeave={() => setCurAct(false)} 
        onClick={() => window.location.assign('https://rasha.world')}
          sx={{
            mt: 10,
            display: 'block',
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
      <div 
    
    style={{
        position: 'relative',
        height: 'auto',

        backgroundColor: '#FFFFF60',
        color: 'blue',
        zIndex: 10
    }}>
   <label style={{
     fontSize: '3rem',
     color: 'yellow',
     margin: '200px 0 20px 0'
 }}> background url: </label>
    
       
    </div> 
 <div >
 <input type="text" value={upload}  onChange={(e) => doChange(e)} />
 </div>
 <div>
    <input type="submit" value="Submit" /> 
 </div>
 <FutureLogs />
  </div></form>
)
}