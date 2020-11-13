import { useContext, useEffect, useState } from "react"
import { Box } from "rebass"
import ShowEndContext from "../contexts/ShowEndContexts"

export const Warning = ({text, commands}) => {

    const [mid, setMid] = useState(0)
    const [pop, setPop] = useState(0)
    const {warning} = useContext(ShowEndContext)

    useEffect(() => {
        const j = setTimeout(async() => {
            await warning && setMid(100)
            const k = setTimeout(() => {
                warning && setMid(0)
               
            }, 7000)
            k

        },100)
        warning && j
    }, [warning])

    useEffect(() => {
        warning && setPop(2)
    },[warning])

    return (
   
        <Box sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            minWidth: '100vw',
            minHeight: '100vh',
            background: 'linear-gradient(270deg, #002d52, #944f00, #5f005f)',
            backgroundSize: '600% 600%',
            transition: 'all 15s ease',
            backgroundPositionX: `${mid}%`,
            backgroundPositionY: '50%',
            zIndex: '50',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
              <Box sx={{
         position: 'relative',
        width: '600px',
        height: '400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: 30,
        transform: pop > 1 ? 'scale(1)' : 'scale(0)',
        transition: 'transform 200ms ease',
        opacity: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
     }}>
         <Box as="h3" width="80%" m="0 auto">
           {text}
         </Box>
         <Box as="h5" width="80%" m="-5px auto">
           {commands}
         </Box>
         <Box display="flex" justifyContent="center" flexDirection="column">
         <video width="80%" height="80%" style={{
             margin: '0 auto',
             borderRadius: 15
         }} src='http://localhost:3000/tip_1.m4v' autostart autoplay about />
         <label htmlFor="">try black & white mode for a different style of play!</label>
         </Box>
     </Box>
     </Box>
    )
}