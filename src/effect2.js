import { useState, useEffect } from 'react'
function Fun(){
    const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
   console.log(count);
  }, [count]); 
  useEffect(() => {
    console.log(count2);
  }, [count2]); 
  return (
    <div id='first'>
      <h2>  useEffect to a particular state </h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Click</button>
      <p> calculation:{count2}</p>
      <button onClick={() => setCount2(count2*2)}>Click</button>
      
      </div>
  );
}
export default Fun