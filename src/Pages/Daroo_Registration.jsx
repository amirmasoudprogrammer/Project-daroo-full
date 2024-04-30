import React, {useState} from 'react';
import {Container} from "@mui/material";
import {Link} from "react-router-dom"
import styles from "../Style/StylesDarooRegistration.module.css"
import svgItems from "../assets/img/icons8_trash_can.svg"
import svgItems2 from "../assets/img/check.svg"
import svgItems3 from "../assets/img/Path 5485.svg"
import svgItems4 from "../assets/img/icons8_location.svg"
import Modal from "../Component/Modal.jsx";

const DarooRegistration = ({setName}) => {
    setName("ثبت تبادل جدید دارو")
    const [modalitem , setModalitem] =useState(false)


    return (
        <>
            <Container  maxWidth="xs">
                <div className={styles.CardRegistration}>
                    <div className={styles.itemsRegistration}>
                        <div className={styles.textItem}>
                            <span> داروی عرضه شده : </span>
                        </div>
                        <hr/>
                        <div className={styles.inputItems}>
             <textarea className={styles.inputtext} name="message" rows="9" cols="40"
                       placeholder="متن توضیحات خود را اینجا بنویسید">
             </textarea>
                        </div>
                        <div className={styles.LinkesItems}>
                            <Link to="/">
                                <div className={styles.plusItem}>
                                    <span>+</span>
                                </div>
                                <span>ثبت مشخصات دارو</span>
                            </Link>
                        </div>
                        <div className={styles.itemdaroo}>
                            <div className={styles.CardItems}>
                                <div className={styles.textitem}>
                                    <div className={styles.details}>
                                        <img src={svgItems2} alt=""/>
                                        <span>قرص پرفنازین 2</span>
                                    </div>
                                    <div className={styles.items}>
                                        <span>‏15 بسته</span>
                                        <li></li>
                                        <span>‏3 ماه انقضا</span>
                                        <li></li>
                                        <span>برند کیمیا صنعت</span>
                                    </div>
                                </div>
                                <div className={styles.deleteitems}>
                                    <img src={svgItems} alt="icons"/>
                                </div>
                            </div>
                            <div className={styles.CardItems}>
                                <div className={styles.textitem}>
                                    <div className={styles.details}>
                                        <img src={svgItems2} alt=""/>
                                        <span>قرص آنتی‌هیستامین 250</span>

                                    </div>
                                    <div className={styles.items}>
                                        <span>‏2 بسته</span>
                                        <li></li>
                                        <span>‏8 روز انقضا</span>
                                        <li></li>
                                        <span>برند عبیدی</span>
                                    </div>
                                </div>
                                <div className={styles.deleteitems}>
                                    <img src={svgItems} alt="icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.IMGpages}>
                        <img src={svgItems3} alt=""/>
                    </div>
                    <div className={styles.itemsRegistration}>
                        <div className={styles.textItem}>
                            <span> داروی مورد تقاضا :</span>
                        </div>
                        <div className={styles.inputItems}>
             <textarea className={styles.inputtext} name="message" rows="9" cols="42"
                       placeholder="متن توضیحات خود را اینجا بنویسید">

             </textarea>
                        </div>
                        <div className={styles.LinkesItems}>
                            <Link to="">
                                <div className={styles.plusItem}>
                                    <span>+</span>
                                </div>
                                <span>ثبت مشخصات دارو</span>
                            </Link>
                        </div>
                        <div className={styles.itemdaroo}>
                            <div className={styles.CardItems}>
                                <div className={styles.textitem}>
                                    <div className={styles.details}>
                                        <img src={svgItems2} alt=""/>
                                        <span>منتول سالیسیلات</span>
                                    </div>
                                    <div className={styles.items}>
                                        <span>‏15 بسته</span>
                                        <li></li>
                                        <span>‏3 ماه انقضا</span>
                                        <li></li>
                                        <span>برند کیمیا صنعت</span>
                                    </div>
                                </div>
                                <div className={styles.deleteitems}>
                                    <img src={svgItems} alt="icons"/>
                                </div>
                            </div>
                            <div className={styles.CardItems}>
                                <div className={styles.textitem}>
                                    <div className={styles.details}>
                                        <img src={svgItems2} alt=""/>
                                        <span>پماد پیروکسیکام 0.5 درصد</span>

                                    </div>
                                    <div className={styles.items}>
                                        <span>‏2 بسته</span>
                                        <li></li>
                                        <span>‏8 روز انقضا</span>
                                        <li></li>
                                        <span>برند عبیدی</span>
                                    </div>
                                </div>
                                <div className={styles.deleteitems}>
                                    <img src={svgItems} alt="icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textEndPages}>
                        <span>محدود کردن منطقه‌ی تبادل</span>
                        <span>منطقه‌ی فروش</span>
                        <div className={styles.inputs}>
                            <img src={svgItems4} alt="icons"/>
                            <input type="text" placeholder="منطقه‌ی فروش خود را مشخص نمایید"/>
                        </div>
                    </div>
                    <div className={styles.linkeItems} >
                        <div className={styles.Linkes} onClick={() => setModalitem(true)}>
                            ثبت درخواست تبادل
                        </div>
                    </div>
                    {modalitem && <Modal onclose={() => setModalitem(false)}/>}
                </div>

            </Container>


        </>
    );
};

export default DarooRegistration;