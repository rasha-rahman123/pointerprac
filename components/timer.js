import { useContext } from "react"
import { Box } from "rebass"
import ShowEndContext from "../contexts/ShowEndContexts"

export const Timer = ({time}) => {

    const {showEnd} = useContext(ShowEndContext)

    return (
      !showEnd &&  <Box style={{

            width: '640px',
            margin: '0 auto',
            position: 'relative',
            top: 20,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: '2px 4px 2px 4px',
            zIndex: 40,
            fontWeight: 600,
            color: 'blue',
            fontSize: '3rem',
            opacity: 0.3
        }}>
            <div style={{
                backgroundColor: 'yellow',
                padding: 5,
                borderRadius: 10
            }}>
                {time > 200 ? 'Practice Mode: Timer Will Begin When First Point Is Clicked On' : time === 0 ? `Start!!!!` : `time: ${time} sec`}
            </div>
        </Box>
    )
}