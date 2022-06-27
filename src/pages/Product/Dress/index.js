import { Link } from "react-router-dom"
import FindShop from "../../Home/FindShop";
import Item from "../../../Component/Item";
import NavProduct from "../NavProduct";
import styles from '../Product.module.css'
import React from "react";

const dress = [];
const Dress = () => {
    return (
        <React.Fragment>
            <NavProduct linkPro="dress"/>
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
            <FindShop />
        </React.Fragment>
    )
}
export default Dress;

    