import React from 'react';
import FOOTER from "./FOOTER";
import styles from "../Style/headerFooter.module.css";
import {Link, Outlet} from "react-router-dom";
import svgICON from "../assets/img/Union 464.svg";
import svgICON2 from "../assets/img/Group 10240.svg";

const PageinOn = ({children , name}) => {

    return (
       <>
           <header className={styles.Headers}>
               <div className={styles.headerIcons}>
                   <Link to="/homepage">
                       <img src={svgICON} alt="icons"/>
                   </Link>
               </div>
               <span>{name}</span>
               <div className={styles.headerIcons}>
                   <Link to="/">
                       <img src={svgICON2} alt=""/>
                   </Link>
               </div>
           </header>
           {children}
           <Outlet />
           <FOOTER/>

       </>
    );
};

export default PageinOn;