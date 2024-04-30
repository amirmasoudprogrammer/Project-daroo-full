import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "../Pages/HomePages.jsx";
import StartWeb from "../Pages/StartWeb.jsx";
import {dataCards, dataMenu, dataMenuPaging} from "../ImgData/DataCard.js";
import PageinON from "../Layout/PageinON";
import Drug_exchange from "../Pages/Drug_exchange.jsx";
import DarooDetails from "../Pages/DarooDetails.jsx";
import Daroo_Registration from "../Pages/Daroo_Registration";
import Medical from "../Pages/Medical.jsx";


const Router = () => {
    const [name, setName] = useState("")


    return (
        <>

            <Routes>
                <Route  path="/" element={<StartWeb data={dataCards}/>}/>
                <Route index path="/homepage" element={<HomePages data={dataMenu} dataMenuPaging={dataMenuPaging}/>}/>
                <Route path="/homepage/drug_exchange" element={<PageinON name={name}/>}>
                    <Route path="/homepage/drug_exchange/" element={<Drug_exchange setName={setName}/>}/>
                    <Route path="/homepage/drug_exchange/details" element={<DarooDetails setName={setName}/>}/>
                    <Route path="/homepage/drug_exchange/details/Registration" element={<Daroo_Registration setName={setName}/>}/>
                </Route>
                <Route path="/homepage/Medical_Information/" element={<Medical/>}/>


            </Routes>


        </>
    );
};

export default Router;