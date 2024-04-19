import React from 'react';
import {Link} from "react-router-dom";
import styles from "../Style/StylesCardMenuEnd.module.css"

const CardMenuItems = ({data}) => {
    return (
        <>
            <Link to="/HomePage/" className={styles.Cards}>
                <div className={styles.Images}>
                    <img src={data.img} alt="imgcard"/>
                </div>
                <span>{data.title}</span>
            </Link>

        </>
    );
};

export default CardMenuItems;