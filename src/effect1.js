import { useState, useEffect } from 'react'

const Effect1 = () => {
    const [timer1, setTimer1] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTimer1(timer1 + 1)
            console.log(timer1);
        }, 1000);
    },[]);      
    return(
    <div id="first">
        <h2>Runs only on the first render</h2>
        <h1>Timer{timer1}</h1>
    </div>
    );
}
export default Effect1