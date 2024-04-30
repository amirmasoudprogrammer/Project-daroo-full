import React, {useRef, useState} from 'react';
import styles from "../Style/StyleModal.module.css"
import {Container, Grid} from "@mui/material";
import imgSvg1 from "../assets/img/Union 468.svg"
import imgSvg2 from "../assets/img/icons8_cardboard_box.svg"
import imgSvg3 from "../assets/img/icons8_boxes.svg"
import imgSvg4 from "../assets/img/icons8_calendar_6.svg"
import imgSvg5 from "../assets/img/icons8_name_tag.svg"
import imgSvg6 from "../assets/img/Union 515.svg"
import imgSvg7 from "../assets/img/Rectangle 4082.svg"
import {Link} from "react-router-dom";


const Modal = ({onclose}) => {
    const ref = useRef()
    const [amount, setAmount] = useState("")
    const [next , setNexts]=useState(false)
    const [name, setName] = useState("")
    const [unitvalue, setUnitvalue] = useState("")
    const [date, setDate] = useState("")
    const [company, setCompany] = useState("")
    console.log({name, amount, unitvalue, date, company})
    const CloseModal = (e) => {
        if (ref.current === e.target) {
            onclose()
        }
    }
    const startForm = () => {

        if (name.length === 0 && amount.length === 0 && unitvalue.length === 0 && date.length === 0 && company.length === 0) {
            alert("لطفا فیلد هارو پر کنید")
        }


    }


    return (
        <>
            <Container maxWidth="xs">
                <div ref={ref} onClick={CloseModal} className={styles.Modale}>
                    <div className={styles.menuDashbord}>
                        <div className={styles.itemImgClose} onClick={onclose}>
                            <img src={imgSvg7} alt="icons"/>
                        </div>
                        <div className={styles.itemNameDaroo}>
                            <span> مشخصات داروی خود را وارد نمایید :</span>
                            <div className={styles.NameDaroo}>
                                <span>نام دارو</span>
                                <div className={styles.formNameDaroo}>
                                    <img src={imgSvg1} alt="icons"/>
                                    <input type="text" placeholder="نام دارو را وارد نمایید" value={name}
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>

                        </div>
                        <Grid container className={styles.forms}>
                            <Grid item xs={6} className={styles.iTemform}>
                                <label for="">مقدار</label>
                                <div className={styles.iteminput}>
                                    <img src={imgSvg2} alt=""/>
                                    <input type="number" placeholder="مقدار دارو" value={amount}
                                           onChange={(e) => setAmount(e.target.value)}/>
                                </div>
                            </Grid>
                            <Grid item xs={6} className={styles.iTemform}>
                                <label htmlFor="">واحد مقدار</label>
                                <div className={styles.iteminput}>
                                    <img src={imgSvg3} alt=""/>
                                    <input type="number" placeholder="مقدار دارو" value={unitvalue}
                                           onChange={(e) => setUnitvalue(e.target.value)}/>
                                </div>
                            </Grid>
                            <Grid item xs={6} className={styles.iTemform}>
                                <label htmlFor="">تاریخ انقضا</label>
                                <div className={styles.iteminput}>
                                    <img src={imgSvg4} alt=""/>
                                    <input type="date" placeholder="مقدار دارو" value={date}
                                           onChange={(e) => setDate(e.target.value)}/>
                                </div>
                            </Grid>
                            <Grid item xs={6} className={styles.iTemform}>
                                <label htmlFor="">شرکت تولیدکننده</label>
                                <div className={styles.iteminput}>
                                    <img src={imgSvg5} alt=""/>
                                    <input type="text" placeholder="مقدار دارو" value={company}
                                           onChange={(e) => setCompany(e.target.value)}/>
                                </div>
                            </Grid>
                        </Grid>

                        <div className={styles.itemLinkes}>
                            <div onClick={startForm} className={styles.LinkeItems}>
                                <Link to="">
                                    ثبت درخواست تبادل
                                </Link>
                            </div>
                            <div className={styles.iconsacn}>
                                <img src={imgSvg6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    );
};

export default Modal;