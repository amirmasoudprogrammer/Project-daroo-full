import React, {useState} from 'react';
import HeadrAndFooter from "../Layout/HeadrAndFooter.jsx";
import {Route, Routes} from "react-router-dom";
import Drug_exchange from "../Pages/Drug_exchange.jsx";
import {dataMenu} from "../ImgData/DataCard.js";


const RouterT = () => {
    const [name, setName] = useState("")


    return (
        <HeadrAndFooter name={name}>
            <Routes>
                <Route path="/HomePage/:id" element={<Drug_exchange setName={setName} DataPageing={DataPageing}/>}/>
            </Routes>
        </HeadrAndFooter>
    );
};

const DataPageing = id => {
    const result = dataMenu.find((item) => item.id === id)
    return result
}


export default RouterT;