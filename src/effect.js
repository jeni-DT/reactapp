import React, { useState, useEffect } from 'react'

const Effect = () => {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1)
            console.log("Your timer ");
        }, 1000);
    });
    return(
    <div id="first">
        <h2>Runs on Every render</h2>
        <h1>Timer {timer}</h1>
    </div>
    );
}
export default Effect

