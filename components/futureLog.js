import { Box } from "rebass"

export const FutureLogs = () => {
    return (
        <Box color={'white'} sx={{
            color: 'white',
            mt: 10,
            zIndex: '20',
            transition: 'all 300ms ease-in-out',
            opacity: 0.6,
            ":hover": {
                opacity: 1
            }
        }}>
           <h3>Future Updates:</h3>
    <h5>{['add customizable options (ex. order v no order)', 'better design ux', 'more accurate mouse click to sphere', 'shareable maps', 'customize color/scale of points', 'pause,reset during practice','record clicks for instant playback'].map((x,o) => <li key={o}>{x}</li>)}</h5>
            </Box>
    )
}