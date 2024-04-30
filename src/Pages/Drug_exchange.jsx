import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styles from "../Style/DrugStyle.module.css"
import svgICON1 from "../assets/img/icons8_slider_3.svg"
import svgICON2 from "../assets/img/Subtraction 802.svg"
import {Container} from "@mui/material";
import {dataDrugs1, dataDrugs2, dataDrugs3, dataDrugs4} from "../ImgData/DataCard.js";
import DrugCard from "../Component/DrugCard.jsx";
import svimg1 from "../assets/img/icons8_clock_2.svg"
import {FaAngleLeft} from "react-icons/fa6";
import DrugCardItems from "../Component/DrugCardItems.jsx";


const Drug_exchange = ({setName}) => {
    const {title} = useParams()
      setName("تبادل دارو")

    const [active, setActive] = useState(1)
    const startClick = () => {
        if (active <= 1) return
        setActive((active) => active - 1)


    }


    return (
        <>
            <Container maxWidth="xs">
                <div className={styles.Pageing}>
                    <div className={styles.Wrapper}>
                        <div onClick={startClick} className={active == 1 ? styles.active : styles.items}>
                            <Link to="">همه</Link>
                        </div>
                        <div onClick={startClick} className={active == 0 ? styles.active : styles.items}>
                            <Link to="">شربت</Link>
                        </div>
                        <div onClick={startClick} className={active == 0 ? styles.active : styles.items}>
                            <Link to="">قرص</Link>
                        </div>
                        <div onClick={startClick} className={active == 0 ? styles.active : styles.items}>
                            <Link to="">پماد</Link>
                        </div>
                        <div onClick={startClick} className={active == 0 ? styles.active : styles.items}>
                            <Link to="">مکمل </Link>
                        </div>
                        <div onClick={startClick} className={active == 0 ? styles.active : styles.items}>
                            <Link to=""> زیبایی </Link>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <div className={styles.itemfilters1}>
                            <span>256</span>
                            <p>تبادیل ثبت شده </p>
                        </div>
                        <div className={styles.itemfilterstest}>
                            <div className={styles.itemfilters2}>
                                <Link>
                                    <img src={svgICON1} alt=""/>
                                    <span>فیلتر ها</span>

                                </Link>
                            </div>
                            <div className={styles.itemfilters3}>
                                <Link>
                                    <img src={svgICON2} alt=""/>
                                    <span>جدیدترین</span>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.DataDrugs}>
                        <div className={styles.itemCARDdata}>
                            {dataDrugs1.map(item => <DrugCard key={item.id} data={item}/>)}
                        </div>
                        <div className={styles.textCard}>
                            <div className={styles.textCardDrug}>
                                <span>تبادل با:</span>
                                <p>
                                    هر داروی آنتی‌بیوتیک به صورت قرص و شربت
                                </p>
                            </div>
                            <div className={styles.textCardDrugEnd}>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>کپسول آموکسی‌سیلین 300</span>
                                </div>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>آزیترومایسین</span>
                                </div>

                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttontext1}>
                                <p>#</p>
                                <span>148</span>
                            </div>
                            <div className={styles.buttontext2}>
                                <img src={svimg1} alt="icons"/>
                                <span>2 ساعت پیش</span>

                            </div>
                            <button className={styles.buttonsitem}>
                                <Link  to="/homepage/drug_exchange/details">
                                    <span>جزئیات تبادل</span>
                                    <FaAngleLeft/>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.DataDrugs}>
                        <div className={styles.itemCARDdata}>
                            {dataDrugs2.map(item => <DrugCardItems key={item.id} data={item}/>)}
                            <div className={styles.ItemlINKE}>
                                <div className={styles.itemsCards}>
                                    <Link to="">
                                        ایتم دیگر +4
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.textCard}>
                            <div className={styles.textCardDrug}>
                                <span>تبادل با:</span>
                                <p>
                                    هر داروی آنتی‌بیوتیک به صورت قرص و شربت
                                </p>
                            </div>
                            <div className={styles.textCardDrugEnd}>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>هیدروکدون</span>
                                </div>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>هیدرومرفون</span>
                                </div>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>لفلونوماید</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttontext1}>
                                <p>#</p>
                                <span>148</span>
                            </div>
                            <div className={styles.buttontext2}>
                                <img src={svimg1} alt="icons"/>
                                <span>15 ساعت پیش</span>

                            </div>
                            <button className={styles.buttonsitem}>
                                <span>جزئیات تبادل</span>
                                <FaAngleLeft/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.DataDrugs}>
                        <div className={styles.itemCARDdata}>
                            {dataDrugs3.map(item => <DrugCardItems key={item.id} data={item}/>)}
                        </div>

                        <div className={styles.textCard}>
                            <div className={styles.textCardDrug}>
                                <span>تبادل با:</span>
                                <p>

                                </p>
                            </div>
                            <div className={styles.textCardDrugEnd}>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>آزیترومایسین</span>
                                </div>

                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttontext1}>
                                <p>#</p>
                                <span>148</span>
                            </div>
                            <div className={styles.buttontext2}>
                                <img src={svimg1} alt="icons"/>
                                <span>15 ساعت پیش</span>

                            </div>
                            <button className={styles.buttonsitem}>
                                <span>جزئیات تبادل</span>
                                <FaAngleLeft/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.DataDrugs}>
                        <div className={styles.itemCARDdata}>
                            {dataDrugs4.map(item => <DrugCardItems key={item.id} data={item}/>)}
                        </div>

                        <div className={styles.textCard}>
                            <div className={styles.textCardDrug}>
                                <span>تبادل با:</span>
                                <p>

                                </p>
                            </div>
                            <div className={styles.textCardDrugEnd}>
                                <div className={styles.itemtext}>
                                    <li></li>
                                    <span>اکساپروزین</span>
                                </div>

                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttonClick}>
                                <span>+</span>
                            </div>
                            <div className={styles.buttontext2}>
                                <img src={svimg1} alt="icons"/>
                                <span>15 ساعت پیش</span>

                            </div>
                            <button className={styles.buttonsitem}>
                                <span>جزئیات تبادل</span>
                                <FaAngleLeft/>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
        ;
};

export default Drug_exchange;