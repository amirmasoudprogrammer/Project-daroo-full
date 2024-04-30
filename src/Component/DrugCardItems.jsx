import React from 'react';
import styles from "../Style/StylesCardDrug.module.css";


const DrugCardItems = ({data}) => {
    const {text, text1, text2, text3} = data
    return (
        <>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <span>{text}</span>
                    </div>
                    <div className={styles.texts}>
                        <span>{text3}</span>
                        <span>{text2}</span>
                        <span>{text1}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrugCardItems;