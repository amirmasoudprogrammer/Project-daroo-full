import React from 'react';
import {useParams} from "react-router-dom";


const Drug_exchange = ({DataPageing, setName}) => {
    const {id} = useParams()
    const dataApi = DataPageing(+id)
    const {title} = dataApi
    setName(title)
    return (
        <div>
            <h1>page - {id}</h1>

        </div>
    );
};

export default Drug_exchange;