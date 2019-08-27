import React, {useState} from 'react'
import {animated, useSpring} from 'react-spring'

const Chat = () => {
    const [open, setOpen] = useState(false);
    const style = useSpring({
        borderRadius: open ? '5px' : '50%',
        transform: open ? 'translate(-10vw, -40vh) scale(3, 5) ': 'translate(0vh, 0vh) scale(1, 1)',
        position: "fixed"
    })
    return (
        <animated.div id='chat' style={style} onClick={() => setOpen(!open)} />
    )
}

export default Chat;