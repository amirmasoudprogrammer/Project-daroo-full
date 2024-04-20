import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "../Pages/HomePages.jsx";
import StartWeb from "../Pages/StartWeb.jsx";
import {dataCards, dataMenu ,dataMenuPaging} from "../ImgData/DataCard.js";





const Router = () => {

    return (
        <>

            <Routes>
                <Route path="/" element={<StartWeb data={dataCards}/>}/>
                <Route path="/HomePage" element={<HomePages data={dataMenu} dataMenuPaging={dataMenuPaging}/>}/>

            </Routes>

        </>
    );
};

export default Router;