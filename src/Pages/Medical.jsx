import React from 'react';
import styles from "../Style/Medicl.module.css"
import svgicons1 from "../assets/img/Group 102401.svg"
import svgicons2 from "../assets/img/Union 4641.svg"
import svgicons3 from "../assets/img/Line 618.svg"
import svgicons4 from "../assets/img/Line 619.svg"
import svgicons5 from "../assets/img/Group 10480.svg"
import svgicons6 from "../assets/img/Union 4864.svg"
import svgicons7 from "../assets/img/Union 2292.svg"
import svgicons8 from "../assets/img/Union 487.svg"
import svgicons9 from "../assets/img/icons8_trash_can.svg"
import svgicons10 from "../assets/img/icons8_clock_2.svg"
import svgicons11 from "../assets/img/Union 500.svg"
import svgicons12 from "../assets/img/icons8_gas.svg"
import svgimg1 from "../assets/img/icons8_user_manual1.svg"
import {Link} from "react-router-dom";
import {Container} from "@mui/material";
import Footer from "../Layout/FOOTER";

const Medical = () => {
    return (
        <>
            <Container maxWidth="xs">
                <div className={styles.PageMedicl}>
                    <div className={styles.ItemsPages}>
                        <div className={styles.menuItems}>
                            <Link to="/homepage">
                                <img src={svgicons1} alt=""/>
                            </Link>
                            <Link to="/">
                                <img src={svgicons2} alt=""/>
                            </Link>
                        </div>
                        <div className={styles.imgitems}>
                            <img src={svgimg1} alt="img"/>
                            <span>اطـلاعـات دارویـی</span>
                        </div>
                        <div className={styles.textNumber}>
                            <div className={styles.border}>
                                <img src={svgicons3} alt=""/>
                            </div>
                            <div className={styles.itemtext}>
                                <span>  از بین</span>
                                <img src={svgicons5} alt=""/>
                                <span>دارو جستجو کنید</span>
                            </div>
                            <div className={styles.border}>
                                <img src={svgicons4} alt=""/>
                            </div>
                        </div>
                        <div className={styles.inputSearch}>
                            <div className={styles.icons}><img src={svgicons7} alt=""/></div>
                            <div className={styles.inputs}>
                                <input type="text" name="" id=""
                                       placeholder="از اینجا جستجو کنید، مثلا: استامینوفن یا پرفناین"/>
                            </div>
                            <div className={styles.icons}><img src={svgicons6} alt=""/></div>
                        </div>
                    </div>
                    <div className={styles.itemimg}>
                        <img src={svgicons8} alt=""/>
                    </div>
                    <div className={styles.mainitems}>
                        <div className={styles.TextPage}>
                            <div className={styles.items}>

                                <img src={svgicons10} alt=""/>
                                <span>آخرین جستجوهای انجام شده</span>
                            </div>
                            <div className={styles.items}>
                                <img src={svgicons9} alt=""/>
                            </div>
                        </div>
                        <div className={styles.menuslidebar}>
                            <div className={styles.itemslide}>
                                <img src={svgicons11} alt=""/>
                                <span>پانکورونیوم</span>
                            </div>
                            <div className={styles.itemslide}>
                                <img src={svgicons11} alt=""/>
                                <span>دانازول</span>
                            </div>
                            <div className={styles.itemslide}>
                                <img src={svgicons11} alt=""/>
                                <span>داکاربازین</span>
                            </div>
                            <div className={styles.itemslide}>
                                <img src={svgicons11} alt=""/>
                                <span>رزورسینول</span>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <span>بیشترین جستجو شده‌ها</span>
                            <img src={svgicons12} alt=""/>
                        </div>
                    </div>
                    <div></div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </Container>

        </>
    );
};

export default Medical;