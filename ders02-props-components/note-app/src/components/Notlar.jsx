import React, { useEffect, useState } from 'react';
import { createLocalStorage, getLocalStorage } from '../utils/localStorage';
import Card from './Card/Card';
import Input from "./Input/Input";
import dummyDatas from '../dummy-data.json';

const Notlar = () => {
    const [baslik, setBaslik] = useState("");
    const [not, setNot] = useState("");
    const [notlar, setNotlar] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const yeniNotlar = [...notlar, { baslik, not }];
        setNotlar(yeniNotlar);
        createLocalStorage("notlar", yeniNotlar);
    }

    useEffect(() => {
        const localNotlar = getLocalStorage("notlar");
        localNotlar ? setNotlar(localNotlar): setNotlar(dummyDatas);
    }, []);

    const remove = (index) => {
        const guncelNotlar = [...notlar].filter((_, i) => i !== index);
        setNotlar(guncelNotlar);

        createLocalStorage("notlar", guncelNotlar);
    }

    return (
        <div className='notlar-container'>
            <h1> Notlar</h1>
            <form onSubmit={onSubmit} className="form">
                <Input label="Başlık" value={baslik} handleInput={setBaslik} />
                <Input label="Not" value={not} handleInput={setNot} />
                <div className="submitButton">
                    <input type="submit" value="Not Ekle" />
                </div>
            </form>
            <div style={{ width: "100%" }} className="notes">
                {notlar.map((n, index) => <Card not={n} key={index} index={index} remove={remove} />)}
            </div>


        </div>
    )
}

export default Notlar;