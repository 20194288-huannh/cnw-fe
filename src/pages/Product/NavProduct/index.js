import styles from './NavProduct.module.css'
import { Link } from 'react-router-dom'
const NavProduct = ({linkPro}) => {
    let proName;
    if( linkPro === "dress") {
        proName = "Đầm"
    }
    if( linkPro === "shirt") {
        proName = "Áo"
    }
    if( linkPro === "trousers") {
        proName = "Quần"
    }
    if( linkPro === "skirt") {
        proName = "Chân Váy"
    }
    if( linkPro === "product") {
        proName = "Sản phẩm"
    }
    if( linkPro === "accessory") {
        proName = "Phụ kiện"
    }
    // const handleNavProduct = (item) => {
    //     return `detail/${item.codePro}` === linkPro
    // }
    // if(linkPro === ) {
    //     linkPro = product.find((item) => handleNavProduct(item)).name
    // }
    return (
        <div className={styles.wrapper}>
            <ul className={styles.itemscope}>
                <li>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li>
                    <Link to="/product">Danh mục sản phẩm</Link>
                </li>
                <li>
                    <Link to={`/${linkPro}`} className="link-product">{proName}</Link>
                </li>
            </ul>

            <div className={`${styles.wrapCollectionTitle} row`}>
                <div className="c-6">
                    <span className={styles.Mot}>{proName}</span>
                    <ul className={styles.menuCollection}>
                        <li>
                            <Link to="/dress">Đầm hai dây</Link>
                        </li>
                        <li>
                            <Link to="/shirt">Đầm hội</Link>
                        </li>
                        <li>
                            <Link to="/skirt">Chân váy</Link>
                        </li>
                        <li>
                            <Link to="/trousers">Quần</Link>
                        </li>
                        <li>
                            <Link to="/accessory">Phụ kiện</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    )
}
export default NavProduct