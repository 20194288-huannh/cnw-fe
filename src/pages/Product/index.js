import { Link } from "react-router-dom"
import FindShop from "../Home/FindShop";
import Item from "../../Component/Item";
import NavProduct from "./NavProduct";
import styles from './Product.module.css'
import React from "react";


const Product = ({dress}) => {
    const a = ">>";
    //API
    
    return (
        <React.Fragment>
            <NavProduct linkPro={dress.link}/>
            <div className={`row ${styles.mainContent}`}>
            {/*<NavHeader showPro={true}/> */}
                <div className="c-6"><Item/></div>
                <div className="c-6 row">
                    <div className={`c-4 `}><Item /></div>
                    <div className={`c-4 `}><Item /></div>
                    <div className={`c-4 `}><Item /></div>
                    <div className="c-6"><Item /></div>
                    <div className="c-6"><Item /></div>
                </div>
                <div className="c-3"><Item/></div>
                <div className="c-3"><Item/></div>
                <div className="c-3"><Item/></div>
                <div className="c-3"><Item/></div>
                <div className={`c-6 row ${styles.padding}`}>
                    <div className={`c-4 `}><Item /></div>
                    <div className={`c-4 `}><Item /></div>
                    <div className={`c-4 `}><Item /></div>
                    <div className="c-6"><Item /></div>
                    <div className="c-6"><Item /></div>
                </div>
                <div className="c-6"><Item/></div>
            </div>
            <div className={styles.pagination}>
                <span className={`${styles.pageNode} ${styles.current}`}>
                    <span className="titleNumber">1</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">2</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">3</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">...</span>
                </span>
                <span className={`${styles.pageNode} `}>
                    <span className="titleNumber">12</span>
                </span>
                <span className={`${styles.pageNode} `}>
                    <span className="titleNumber"> {a} </span>
                </span>
            </div>
            <FindShop />
        </React.Fragment>
    )
}
export default Product;

    