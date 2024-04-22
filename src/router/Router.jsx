import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "../Pages/HomePages.jsx";
import StartWeb from "../Pages/StartWeb.jsx";
import {dataCards, dataMenu, dataMenuPaging} from "../ImgData/DataCard.js";
import PageinON from "../Layout/PageinON";
import Drug_exchange from "../Pages/Drug_exchange.jsx";


const Router = () => {
    const [name, setName] = useState("")
    console.log(name)
    const DataPageing = (id) => {
        const result = dataMenu.find((item) => item.id === id)
        return result
    }

    return (
        <>

            <Routes>
                <Route  path="/" element={<StartWeb data={dataCards}/>}/>
                <Route index path="/homepage" element={<HomePages data={dataMenu} dataMenuPaging={dataMenuPaging}/>}/>
                <Route path="/homepage/Pages" element={<PageinON name={name}/>}>
                    <Route path="/homepage/Pages/:id" element={<Drug_exchange DataPageing={DataPageing} setName={setName}/>}/>
                </Route>


            </Routes>


        </>
    );
};

export default Router;