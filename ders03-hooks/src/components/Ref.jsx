import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [state, setState] = useState("");
    const inputRef = useRef(null);
    const updateState = (e) => {
        setState(e.target.value);
    }

    useEffect(() => {
        // console.log(inputRef);

        inputRef.current.value = "Farksepeti";
    }, [])


    return (
        <div>
            <div className="form-floating mb-3">
                <input ref={inputRef} type="text" className="form-control"
                    id="floatingInput" placeholder="State" value={state}
                    onChange={updateState} />
                <label htmlFor="floatingInput">State</label>

            </div>
        </div>
    )
}

export default Ref;