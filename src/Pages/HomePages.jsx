import React from 'react';
import {Link, useLocation} from "react-router-dom";
import LogoHOME from "../assets/img/Group 7922.svg"
import imgUSER from "../assets/img/customer_finge.svg"
import ALERT from "../assets/img/Group 11207.svg"
import menuicon from "../assets/img/Group 10242.svg"
import styles from "../Style/StyleHomePage.module.css"
import ItemCardMenu from "../Component/ItemCardMenu.jsx";
import ImagsBanner from "../assets/img/Slider-Fa666.svg"
import CardMenuItems from "../Component/CardMenuItems.jsx";
import {Container} from "@mui/material";
import svgIcons from "../assets/img/Group 10659.svg"
import svgIcons1 from "../assets/img/Union 3155.svg"
import svgIcons2 from "../assets/img/icons8_communication1.svg"
import svgIcons3 from "../assets/img/icons8_notifications.svg"
import svgIcons4 from "../assets/img/icons8_user1.svg"

const HomePages = ({data, dataMenuPaging}) => {
    const {pathname} = useLocation()
    console.log(pathname)
    let subpage = pathname.split("/")?.[1]

    const Linkness = (type = null) =>{
          if (subpage === ""){
              subpage = "homepage"
          }
        let classes =styles.normal
          if (type === subpage){
               classes =styles.actives
          }else {
              classes =styles.normal
          }
          return classes
    }

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
                                <img src={svgIcons} alt=""/>
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
                        <span className={styles.itemtitle}>منو های دیگر</span>
                        <div className={styles.cardPagingMuenu}>
                            {dataMenuPaging.map(item => <CardMenuItems data={item} key={item.id}/>)}
                        </div>
                    </div>
                    <footer className={styles.Footer}>
                        <ul className={styles.FooterMenu}>
                            <li className={Linkness("profile")}><Link to="/profile">
                                <div className={styles.itemFooter}>
                                    <img src={svgIcons4} alt=""/>
                                    <span>پروفایل</span>

                                </div>
                            </Link></li>
                            <li className={Linkness("Support")}><Link to="/Support">
                                <div className={styles.itemFooter}>
                                    <img src={svgIcons2} alt=""/>
                                    <span>پشتیبانی</span>

                                </div>
                            </Link></li>
                            <li className={Linkness("Notifications")}><Link to="/Notifications">
                                <div className={styles.itemFooter}>
                                    <img src={svgIcons3} alt=""/>
                                    <span>اعلان ها</span>
                                </div>
                            </Link></li>
                            <li className={Linkness("homepage")}><Link to="/homepage">
                                <div className={styles.itemFooter}>
                                    <img src={svgIcons1} alt=""/>
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