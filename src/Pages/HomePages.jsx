import React from 'react';
import {Link} from "react-router-dom";
import LogoHOME from "../assets/img/Group 7922.svg"
import imgUSER from "../assets/img/customer_finge.svg"
import ALERT from "../assets/img/Group 11207.svg"
import menuicon from "../assets/img/Group 10242.svg"
import styles from "../Style/StyleHomePage.module.css"
import ItemCardMenu from "../Component/ItemCardMenu.jsx";
import ImagsBanner from "../assets/img/Slider-Fa666.svg"
import CardMenuItems from "../Component/CardMenuItems.jsx";
import {BiHomeAlt2} from "react-icons/bi";
import {IoNotificationsOutline} from "react-icons/io5";
import {PiChatsDuotone} from "react-icons/pi";
import {AiOutlineUser} from "react-icons/ai";
import {Container} from "@mui/material";

const HomePages = ({data, dataMenuPaging}) => {
    return (
        <>
            <Container maxWidth="xs">
                <div className={styles.cardHome}>
                    <div className={styles.headerPages}>

                        <div className={styles.itemone}>
                            <Link className={styles.itemLink} to="/HomePage">
                                <img src={LogoHOME} alt="Logo"/>
                                <span>دارو 118</span>
                            </Link>
                        </div>
                        <div className={styles.itemtwo}>
                            <Link className={styles.itemLink1} to="">
                                <img src={imgUSER} alt="USERIMG"/>
                            </Link>
                            <Link className={styles.itemLink2} to="">
                                <img src={ALERT} alt=""/>
                            </Link>
                            <Link className={styles.itemLink3} to="">
                                <img src={menuicon} alt=""/>
                            </Link>


                        </div>

                    </div>

                    <div className={styles.CardMenu}>
                        <div className={styles.ItemMenuOne}>
                            <span>دسترسی کاربردی</span>
                            <div className={styles.itemPlus}>
                                <span>+</span>
                            </div>
                        </div>

                        <div className={styles.ItemPaging}>
                            {data.map(item => <ItemCardMenu data={item} key={item.id}/>)}
                        </div>

                    </div>

                    <div className={styles.BannerItem}>
                        <Link to="">
                            <img src={ImagsBanner} alt=""/>
                        </Link>
                    </div>

                    <div className={styles.CardMenuTwo}>
                        <span>منو های دیگر</span>
                        <div className={styles.cardPagingMuenu}>
                            {dataMenuPaging.map(item => <CardMenuItems data={item} key={item.id}/>)}
                        </div>
                    </div>
                    <footer className={styles.Footer}>
                        <ul className={styles.FooterMenu}>
                            <li>
                                <Link to="/">
                                <div className={styles.itemFooter}>
                                    <AiOutlineUser/>
                                    <span>پروفایل</span>

                                </div>
                            </Link>
                            </li>
                            <li>
                                <Link to="/">
                                <div className={styles.itemFooter}>
                                    <PiChatsDuotone/>
                                    <span>پشتیبانی</span>

                                </div>
                            </Link>
                            </li>
                            <li><Link to="/">
                                <div className={styles.itemFooter}>
                                    <IoNotificationsOutline/>
                                    <span>اعلان ها</span>
                                </div>
                            </Link></li>
                            <li><Link to="/">
                                <div className={styles.itemFooter}>
                                    <BiHomeAlt2/>
                                    <span>منوی اصلی</span>
                                </div>
                            </Link></li>
                        </ul>
                    </footer>
                </div>
            </Container>
        </>
    );
};

export default HomePages;