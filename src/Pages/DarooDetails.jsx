import React from 'react';
import styles from "../Style/StylesDetails.module.css"
import {Container} from "@mui/material";
import {dataComment, dataDrugs1} from "../ImgData/DataCard.js";
import DetailCard from "../Component/DetailCard.jsx";
import {Link} from "react-router-dom";
import svgIMg1 from "../assets/img/icons8_Sorting_Arrows_Horizontal.svg"
import svgIMg2 from "../assets/img/Rectangle 4078.svg"
import svgIMg3 from "../assets/img/icons8_clock_2.svg"
import svgIMg4 from "../assets/img/icons8_add_1.png"
import CardDetails from "../Component/CardDetails.jsx";

const DarooDetails = ({setName}) => {
    setName("جزئیات تبادل دارو")
    return (
        <>
            <Container maxWidth="xs">
                <div className={styles.Details}>
                    <div className={styles.DetailsData}>
                        <div className={styles.cardDetail}>
                            {
                                dataDrugs1.map(item => <DetailCard key={item.id} data={item}/>)
                            }
                        </div>

                        <div className={styles.icons}>
                            <Link to="">
                                <img src={svgIMg1} alt=""/>
                            </Link>
                        </div>
                        <hr/>
                        <div className={styles.textCard}>
                            <div className={styles.textCardDrug}>
                                <span>تبادل با:</span>
                                <p>
                                    هر داروی آنتی‌بیوتیک به صورت قرص و شربت
                                </p>
                            </div>
                            <div className={styles.textCardDrugEnd}>
                                <div className={styles.itemtext}>
                                    <div className={styles.liliste}>
                                        <p className={styles.items}/>
                                    </div>
                                    <span>کپسول آموکسی‌سیلین 300</span>
                                </div>
                                <div className={styles.itemtext}>
                                    <div className={styles.liliste}>
                                        <p className={styles.items}/>
                                    </div>
                                    <span>آزیترومایسین</span>
                                </div>

                            </div>
                        </div>
                        <hr/>
                        <div className={styles.IMGDetailPro}>
                            <div className={styles.imgCarda}>
                                <img src={svgIMg2} alt="icons"/>
                            </div>
                            <div className={styles.textimgCards}>
                                <div className={styles.Titleimg}><p>دکتر محمد صادق‌زاده</p></div>
                                <div className={styles.textImgTEM}>
                                    <span>داروخانه سینا</span>
                                    <li></li>
                                    <p>خراسان رضوی، سبزوار، خیابان کاشفی</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.itemDetail}>
                            <div className={styles.textDetail}>
                                <span>  شماره تبادل :</span>
                                <p>148#</p>
                            </div>
                            <div className={styles.itemTextDetail}>
                                <img src={svgIMg3} alt="icons"/>
                                <span>  2 ساعت پیش </span>
                            </div>
                        </div>

                        <div className={styles.buttonDetail}>
                            <div className={styles.NumberText}>
                                <span>15 درخواست ثبت شده است</span>
                            </div>

                            <div className={styles.LinkeButtons}>
                                <Link to="/homepage/drug_exchange/details/Registration">
                                    <div className={styles.plus}>
                                        <img src={svgIMg4} alt=""/>
                                    </div>
                                    <span>ثبت درخواست تبادل</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CommentItem}>
                        <div className={styles.CardDetail}>
                            {dataComment.map(item => <CardDetails key={item.id} data={item} />)}
                        </div>
                    </div>
                </div>
            </Container>

        </>

    );
};

export default DarooDetails;