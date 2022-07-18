import styles from './NavProduct.module.css'
import { Link } from 'react-router-dom'
const NavProduct = ({linkPro}) => {
    let proName;
    let productTypes;
    if( linkPro === "dress") {
        proName = "Đầm";
        productTypes = [
            ['damhaiday',"Đầm hai dây"], 
            ['dammaxi',"Đầm maxi"], 
            ['damsatnach', "Đầm sát nách"],
            // ['damtaydai', "Đầm tay dài"]
        ];
    }
    if( linkPro === "shirt") {
        proName = "Áo"
        productTypes = [
            ['aosomi',"Áo sơ mi"], 
            ['aokieu',"Áo kiểu"], 
            ['aokhoac', "Áo khoác"]
        ];
    }
    if( linkPro === "skirt") {
        proName = "Chân Váy"
        productTypes = [
            ['vaymaxi',"Chân váy Maxi"], 
            ['vaymidi',"Chân váy Midi"], 
            ['vaymini', "Chân váy Mini"]
        ];
    }
    if( linkPro === "trousers") {
        proName = "Quần"
        productTypes = [
            ['quandai',"Quần dài"], 
            ['quanlung',"Quần lửng"], 
            ['quanshort', "Quần short"]
        ];
    }
    if( linkPro === "product") {
        proName = "Sản phẩm"
        productTypes = [
            ['dress',"Đầm"], 
            ['shirt',"Áo"], 
            ['trousers', "Quần"],
            ['skirt',"Chân váy"]
        ];
    }

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
                        {
                            productTypes.map((productType)=>(
                                <li key = {productType[0]}>
                                    <Link to={`/${productType[0]}`}>{productType[1]}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-6">
                    
                </div>
            </div>
        </div>
    )
}
export default NavProduct