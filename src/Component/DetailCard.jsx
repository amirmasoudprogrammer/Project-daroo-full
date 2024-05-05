import React from 'react';
import styles from "../Style/StylesDetailCard.module.css"

const DetailCard = ({data}) => {
    const {text,text1,text2,text3}=data
    return (
        <>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.title}>
                    <span>{text}</span>
                </div>
                <div className={styles.texts}>
                    <span>{text3}</span>
                    <div className={styles.liliste}>
                        <p className={styles.items}/>
                    </div>
                    <span>{text2}</span>
                    <div className={styles.liliste}>
                        <p className={styles.items}/>
                    </div>
                    <span>{text1}</span>
                </div>
            </div>
        </div>

        </>
    );
};

export default DetailCard;