import React, { useState } from 'react';

const Home = () => {
    const [state, setState] = useState(0);
    const artir = () => {
        setState(prev => prev + 1);
    }

    const azalt = () => {
        setState(prev => prev - 1);
    }

    return (
        <div style={{ padding: "10px" }}>
            {/* <input name='isim' placeholder='Lütfen bir isim giriniz.' /> */}
            <button onClick={azalt}>-</button>
            <span>{state}</span>
            <button onClick={artir}>+</button>
        </div>
    )
}

export default Home;