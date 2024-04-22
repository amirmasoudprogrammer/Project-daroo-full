import React from 'react';
import {useParams  } from "react-router-dom";



const Drug_exchange = ({DataPageing,setName}) => {
    const {id} = useParams()
    console.log(id)
    const dataApi = DataPageing(+id)
    const {title} = dataApi
    setName(title)

    return (
        <>
            <h1></h1>

        </>
    )
        ;
};

export default Drug_exchange;