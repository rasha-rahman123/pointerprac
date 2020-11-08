export const Timer = ({time}) => {
    return (
        <div style={{
            width: '100vw',
            position: 'relative',
            top: 0,
            backgroundColor: '#FFFFFF80',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
            fontWeight: 600,
            color: 'blue'
        }}>
            <div style={{
                backgroundColor: 'yellow'
            }}>
                {time > 100 ? 'Practice Mode: Timer Will Begin When First Point Is Clicked On' : time === 0 ? `Practice Point` : `Time Elapsed: ${time}`}
            </div>
        </div>
    )
}