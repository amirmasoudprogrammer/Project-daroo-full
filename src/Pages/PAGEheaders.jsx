import React,{useState} from 'react';
import Drug_exchange from "./Drug_exchange.jsx";
import {dataMenu} from "../ImgData/DataCard.js";
import Header from "../Layout/Header.jsx";
import Footer from "../Layout/FOOTER.jsx";
import {Outlet} from "react-router-dom"



const PagEheaders = () => {
    const [name, setName] = useState("")
    return (
        <>
            <h1>ssss</h1>
            <Header name={name}/>
            <Drug_exchange setName={setName} DataPageing={DataPageing}/>
            <Footer/>
            <Outlet/>
        </>
    );
};
const DataPageing = (id) => {
    const result = dataMenu.find((item) => item.id === id)
    return result
}

export default PagEheaders;