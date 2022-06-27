import { Link } from "react-router-dom"
import FindShop from "../../Home/FindShop";
import Item from "../../../Component/Item";
import styles from '../Product.module.css'

const dress = [];
const Dress = () => {
    return (
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
            <div className="c-6 row">
                <div className={`c-4 `}><Item /></div>
                <div className={`c-4 `}><Item /></div>
                <div className={`c-4 `}><Item /></div>
                <div className="c-6"><Item /></div>
                <div className="c-6"><Item /></div>
            </div>
            <div className="c-6"><Item/></div>d

            <FindShop />
        </div>
    )
}
export default Dress;

    