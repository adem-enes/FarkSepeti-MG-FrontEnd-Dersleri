import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [state, setState] = useState("");
    const [state2, setState2] = useState("");
    const updateState = (e) => {
        setState(e.target.value);
    }
    const updateState2 = (e) => {
        setState2(e.target.value);
    }
    useEffect(() => {
        console.log("farksepeti");

        return () => {
            console.log("kapanıyorum");
        }
    }, [])

    useEffect(() => {
        console.log("test");
    }, [state])


    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control"
                    id="floatingInput" placeholder="State" value={state}
                    onChange={updateState} />
                <label htmlFor="floatingInput">State</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control"
                    id="floatingInput" placeholder="State2" value={state2}
                    onChange={updateState2} />
                <label htmlFor="floatingInput">State</label>
            </div>
        </div>
    )
}

export default Effect;