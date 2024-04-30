import Imges1 from "../assets/img/image_processing20200921-19004-1fpmggf - Copy - Copy (2) - Copy.svg"
import Imges2 from "../assets/img/image_processing20200921-19004-1fpmggf - Copy - Copy - Copy.svg"
import Imges3 from "../assets/img/image_processing20200921-19004-1fpmggf - Copy - Copy (3).svg"
import ImgMune1 from "../assets/img/Subtraction 720.svg"
import ImgMune2 from "../assets/img/icons8_Price_Tag_USD.svg"
import ImgMune3 from "../assets/img/icons8_user_shield.svg"
import ImgMune4 from "../assets/img/icons8_search_folder_1.svg"
import ImgMune5 from "../assets/img/Subtraction 726.svg"
import ImgMune6 from "../assets/img/icons8_user_manual.svg"
import ImgMune7 from "../assets/img/icons8_shopping_cart.svg"
import ImgMune8 from "../assets/img/icons8_guarantee.svg"
import imgMenucard1 from "../assets/img/icons8_mortarboard.svg"
import imgMenucard2 from "../assets/img/icons8_news.svg"
import imgMenucard3 from "../assets/img/icons8_handshake_heart.svg"
import imgMenucard4 from "../assets/img/icons8_user_shield_3.svg"
import imgMenucard5 from "../assets/img/icons8_books.svg"
import imgMenucard6 from "../assets/img/icons8_open_box.svg"
import imgMenucard7 from "../assets/img/icons8_holding_box.svg"
import imgMenucard8 from "../assets/img/icons8_customer_support.svg"
import imgComment1 from "../assets/img/team1.svg"
import imgComment2 from "../assets/img/team2.svg"
import imgComment3 from "../assets/img/Rectangle 4078.svg"


const dataCards = [
    {
        id: 1,
        img: Imges1,
        title: "کاربری آسان، حرفه‌ای و کامل",
        text: `لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شو لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شود`
    },
    {
        id: 2,
        img: Imges2,
        title: "بروزرسانی آزمون‌های متعدد و غیرتکراری",
        text: `لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شو لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شود`
    },
    {
        id: 3,
        img: Imges3,
        title: "کاربری آسان، حرفه‌ای و کامل",
        text: `لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شو لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ طراحی گرافیک گفته می‌شود`
    }

]


const dataMenu = [
    {id: 1, img: ImgMune1, title: "تبادل دارو", titlelinke:"drug_exchange" },
    {id: 2, img: ImgMune2, title: " قیمت دارو", titlelinke : "drug_price"},
    {id: 3, img: ImgMune3, title: "شیفت کاری", titlelinke : "Shift_work"},
    {id: 4, img: ImgMune4, title: " داروهای کمیاب ", titlelinke :"Rare_drugs"},
    {id: 5, img: ImgMune5, title: "ریکال دارو", titlelinke :"drug_recall"},
    {id: 6, img: ImgMune6, title: "اطلاعات دارویی", titlelinke : "Medical_Information"},
    {id: 7, img: ImgMune7, title: "فروشگاه", titlelinke : "Store"},
    {id: 8, img: ImgMune8, title: "مجوز داروخانه ", titlelinke : "Pharmacy_license"},
]

const dataMenuPaging = [
    {id: 1, img: imgMenucard1, title: "آموزش"},
    {id: 2, img: imgMenucard2, title: "خبررسانی"},
    {id: 3, img: imgMenucard3, title: "سازمان‌ها"},
    {id: 4, img: imgMenucard4, title: "معرفی مدیران"},
    {id: 5, img: imgMenucard5, title: "کتابخانه"},
    {id: 6, img: imgMenucard6, title: "شرکت‌های پخش"},
    {id: 7, img: imgMenucard7, title: "بات پاسخگو"},
    {id: 8, img: imgMenucard8, title: "پشتیبانی"},
]

const dataDrugs1 = [
    {id: 1, text: "قرص استامینوفن کدئین 300", text1: " 5 بسته", text2: "20 روز انقضا", text3: "برند شیمی‌دارو"},
    {id: 2, text: "قرص آنتی‌هیستامین 250", text1: "2 بسته", text2: "8 روز انقضا", text3: "برند عبیدی"},
    {id: 3, text: "قرص پرفنازین 2", text1: "15 بسته", text2: "3 ماه انقضا", text3: "برند کیمیا صنعت"},
]
const dataDrugs2 = [
    {id: 1, text: "بوپرنورفین 100", text1: "5 بسته", text2: "20 روز انقضا", text3: "برند شیمی‌دارو"},
    {id: 2, text: "دیکلوفناک 500", text1: "2 بسته", text2: "8 روز انقضا", text3: "برند عبیدی"},
    {id: 3, text: "فلوربی پروفن 3", text1: "15 بسته", text2: "3 ماه انقضا", text3: "برند کیمیا صنعت"},
]
const dataDrugs3 = [
    {id: 1, text: "مکلوفنامیک اسید", text1: "5 بسته", text2: "20 روز انقضا", text3: "برند شیمی‌دارو"},
]
const dataDrugs4 = [
    {id: 1, text: "متیل سالیسیلات", text1: "5 بسته", text2: "20 روز انقضا", text3: "برند شیمی‌دارو"},
]

const dataComment = [
    {
        id: 1,
        image: imgComment1,
        titleImg: "علی حسینی",
        textimg: "داروخانه دکتر احمدی، نبش کاشفی 13",
        textComment: "سلام این داروها رو ما داریم، اگر موافق بودید بفرمایید",
        text1: " پماد پیروکسیکام 0.5 درصد",
        text2: "سوفنتانیل 200"
    },
    {
        id: 2,
        image: imgComment2,
        titleImg: "دکتر احمد طالب پور",
        textimg: "داروخانه دکتر جعفری نژاد، نبش بیهق 16",
        textComment: "حاضرید با این داورها تبادل کنید؟",
        text1: "سرماخوردگی بزرگسال",
        text2: "تاپنتادول"
    },
    {
        id: 3,
        image: imgComment3,
        titleImg: "دکتر محمد صادق‌زاده",
        textimg: "داروخانه سینا، خیابان کاشفی، نبش کاشفی 13",
        textComment: "امکان اضافه کردن مورد زیر رو دارید؟",
        text1: "منتول سالیسیلات"
    },
    {
        id: 4,
        image: imgComment2,
        titleImg: "علیرضا نشاطی",
        textimg: "داروخانه دکتر جعفری نژاد، نبش بیهق 16",
        textComment: "حاضرید با این داورها تبادل کنید؟",
        text1: "سرماخوردگی بزرگسال",
        text2: "تاپنتادول"
    },
]
export {dataCards, dataMenu, dataMenuPaging, dataDrugs1, dataDrugs2, dataDrugs3, dataDrugs4, dataComment}