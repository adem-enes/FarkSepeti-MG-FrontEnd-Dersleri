import React, { createContext, useState } from 'react'
import C1 from "./contexthell/C1";

const StateContext = createContext();

const Context = () => {
    const [state, setState] = useState("");
    const updateState = (e) => {
        setState(e.target.value);
    }

    return (
        <StateContext.Provider value={state}>
            <div>
                {state}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"
                        id="floatingInput" placeholder="State" value={state}
                        onChange={updateState} />
                    <label htmlFor="floatingInput">State</label>
                </div>
                <C1 />
            </div>
        </StateContext.Provider>
    )
}

export default Context;