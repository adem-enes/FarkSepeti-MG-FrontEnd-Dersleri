import React, { useEffect, useReducer, useState } from 'react';

export const urunReducer = (state, action) => {
    switch (action.type) {
        case "SET":
            return { ...state, [action.name]: action.value };
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(urunReducer, {
        username: "",
        password: ""
    });

    const updateState = (e) => dispatch({
        type: "SET",
        value: e.target.value,
        name: e.target.name
    });
    
    useEffect(() => {
      console.log(state);
    }, [state])
    

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="username"
                    id="floatingInput" placeholder="State" value={state.username}
                    onChange={updateState} />
                <label htmlFor="floatingInput">State</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="password"
                    id="floatingInput" placeholder="State2" value={state.password}
                    onChange={updateState} />
                <label htmlFor="floatingInput">State</label>
            </div>
        </div>
    )
}

export default Reducer;