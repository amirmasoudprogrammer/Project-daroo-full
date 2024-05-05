import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import styles from "../Style/DrugStyle.module.css"
import svgICON1 from "../assets/img/icons8_slider_3.svg"
import svgICON2 from "../assets/img/Subtraction 802.svg"
import {Box, Container, Tab, Tabs} from "@mui/material";
import {dataDrugs1, dataDrugs2, dataDrugs3, dataDrugs4} from "../ImgData/DataCard.js";
import DrugCard from "../Component/DrugCard.jsx";
import svimg1 from "../assets/img/icons8_clock_2.svg"
import svimg2 from "../assets/img/Group 11280.svg"
import {FaAngleLeft} from "react-icons/fa6";
import DrugCardItems from "../Component/DrugCardItems.jsx";


const Drug_exchange = ({setName}) => {
    const {title} = useParams()
    setName("تبادل دارو")

        const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


        return (
            <>
                <Container maxWidth="xs">
                    <div className={styles.Pageing}>
                        <div className={styles.Wrapper}>
                            <Box  sx={{maxWidth: {xs: 340, sm: 400}, bgcolor: 'background.paper' } }>
                                <Tabs  value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons={false}
                                        aria-label="scrollable prevent tabs example">
                                <Tab  label="همه" />
                                <Tab label="شربت"/>
                                <Tab label="قرص"/>
                                <Tab label="پماد"/>
                                <Tab label="مکمل"/>
                                <Tab label="زیبایی"/>

                                </Tabs>

                            </Box>
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
                                    <Link to="/homepage/drug_exchange/details">
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
                                        <div className={styles.liliste}>
                                            <p className={styles.items}/>
                                        </div>
                                        <span>هیدروکدون</span>
                                    </div>
                                    <div className={styles.itemtext}>
                                        <div className={styles.liliste}>
                                            <p className={styles.items}/>
                                        </div>
                                        <span>هیدرومرفون</span>
                                    </div>
                                    <div className={styles.itemtext}>
                                        <div className={styles.liliste}>
                                            <p className={styles.items}/>
                                        </div>
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

                                </div>
                                <div className={styles.textCardDrugEnd}>
                                    <div className={styles.itemtext}>
                                        <div className={styles.liliste}>
                                            <p className={styles.items}/>
                                        </div>
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

                                </div>
                                <div className={styles.textCardDrugEnd}>
                                    <div className={styles.itemtext}>
                                        <div className={styles.liliste}>
                                            <p className={styles.items}/>
                                        </div>
                                        <span>اکساپروزین</span>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <div className={styles.buttontext1}>
                                    <p>#</p>
                                    <span>148</span>
                                </div>
                                <div className={styles.buttonClick}>
                                    <img src={svimg2} alt="icons"/>
                                </div>

                                <div className={styles.buttontext2}>
                                    <img src={svimg1} alt="icons"/>
                                    <span> 4روز پیش </span>
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