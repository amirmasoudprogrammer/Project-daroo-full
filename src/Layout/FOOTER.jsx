import React from 'react';
import styles from "../Style/headerFooter.module.css";
import {Link} from "react-router-dom";
import svgICON3 from "../assets/img/Union 466.svg";
import svgICON4 from "../assets/img/icons8_notification.svg";
import svgICON5 from "../assets/img/icons8_communication.svg";
import svgICON6 from "../assets/img/icons8_user.svg";

const Footer = () => {
    return (
        <footer className={styles.Footers}>
            <div className={styles.Itemslink}>
                <Link  to="/">
                    <img src={svgICON3} alt=""/>
                    <span>منوی اصلی</span>
                </Link>
                <Link  to="/">
                    <img src={svgICON4} alt=""/>
                    <span>اعلان ها</span>
                </Link>
                <Link  to="/">
                    <img src={svgICON5} alt=""/>
                    <span>پشتیبانی</span>
                </Link>
                <Link  to="/">
                    <img src={svgICON6} alt=""/>
                    <span>پروفایل</span>
                </Link>


            </div>
        </footer>
    );
};

export default Footer;