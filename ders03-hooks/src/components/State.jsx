import React, { useState } from 'react'

const State = () => {
    const [state, setState] = useState("");

    const updateState = (e) => {
        setState(e.target.value);
    }


    const up = () => {
        setState(prev => prev + 1)
        setState(prev => prev + 1)
    }
    const down = () => {
        setState(state - 1)
    }
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control"
                    id="floatingInput" placeholder="State" value={state}
                    onChange={updateState} />
                <label htmlFor="floatingInput">State</label>
                <button className="btn btn-success">Submit</button>
                {/* <button onClick={up} className="btn btn-primary">+</button>
                <span className="p-2">{state}</span>


                <button onClick={down} className="btn btn-primary">-</button> */}
            </div>
            {/* {state} */}
        </div>
    )
}

export default State;