import styles from './FindShop.module.css'
import { Link } from "react-router-dom"

const FindShop = () => {
    return (
        <div>
             <div className={styles.findShop}>
                 Tìm
                 <Link to="/"> cửa hàng </Link>
                 gần bạn nhất
                <i className="fa fa-map-marker findShop-icon" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default FindShop