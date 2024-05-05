import React from 'react';
import styles from "../Style/StylesCardDrug.module.css"

const DrugCard = ({data}) => {
    const {text, text1, text2, text3} = data
    return (
        <>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <span>{text}</span>
                    </div>
                    <div className={styles.texts}>
                        <div className={styles.textitems}>
                            <span>{text3}</span>
                        </div>
                        <div className={styles.liliste}>
                            <p className={styles.items}/>
                        </div>
                        <div className={styles.textitems}>
                            <span>{text2}</span>
                        </div>
                        <div className={styles.liliste}>
                            <p className={styles.items}/>
                        </div>
                        <div className={styles.textitems}>
                            <span>{text1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DrugCard;