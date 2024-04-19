import React, {useEffect} from 'react';
import styles from "../Style/SliderCards.module.css"
import PngItems from "../assets/img/Group 9969.png"
import {useNavigate} from "react-router-dom";

const SliaderStart = ({data, slide, setSlide, idx}) => {
    const {img, title, text} = data
    const Navigate = useNavigate()

    const nextGo = () => {

        setSlide(slide === data.length - 1 ? 0 : slide + 1)
        if (slide === 2) {
            setTimeout(() => {
                Navigate("/HomePage")
            },300)
        }

    }





    return (

        <div className={slide === idx ? styles.Cards : styles.Cards_hidden}>
            <div className={styles.Images}>
                <img src={img} alt="imgslider"/>
            </div>
            <div className={styles.icons} onClick={nextGo}>
                <img src={PngItems} alt=""/>
            </div>
            <div className={styles.titleItem}>
                <span>{title}</span>
            </div>
            <div className={styles.TextItem}>
                <p>{text}</p>
            </div>

        </div>

    );
};

export default SliaderStart;