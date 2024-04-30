import React from 'react';
import styles from "../Style/StylesCardDetails.module.css"
import imgCards1 from "../assets/img/Union 221.svg"
import imgCards2 from "../assets/img/icons8_clock_2.svg"
import svgIMg4 from "../assets/img/Group 10281.svg";

const CardDetails = ({data}) => {
    const {image, titleImg, textimg, textComment, text1, text2} = data
    return (
        <div className={styles.CardDetailsitem}>
            <div className={styles.IMGNexts}>
                <img src={svgIMg4} alt=""/>
            </div>
            <div className={styles.CardBox}>
                <div className={styles.imgAndText}>
                    <div className={styles.imgPro}>
                        <img src={image} alt="icon"/>
                    </div>
                    <div className={styles.TextItems}>
                        <span>{titleImg}</span>
                        <p>{textimg}</p>
                    </div>
                </div>
                <div className={styles.textComment}>
                    <span>{textComment}</span>
                </div>
                <div className={styles.ItemText1}>
                    <div className={styles.ITEMdet}>
                        <li></li>
                        <span>{text1}</span>
                    </div>
                    <div className={styles.ITEMdet}>
                        {
                            text2 ? <li></li> : null
                        }
                        <span>{text2}</span>
                    </div>
                </div>
                <div className={styles.cardsEnds}>
                    <div className={styles.items}>
                        <img src={imgCards1} alt=""/>
                        <span>پاسخ دهید</span>
                    </div>
                    <div className={styles.items}>
                        <img src={imgCards2} alt=""/>
                        <span>2 ساعت پیش</span>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default CardDetails;