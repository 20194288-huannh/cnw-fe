import styles from './mainNewProduct.module.css'
import Item from '../../../Component/Item';
import { Link } from 'react-router-dom'

const MainNewProduct = () => {
    return (
        <div>
             <div className={styles.mainNewProduct}>
                <div className={styles.mainNewProductTitle}>
                    <h2 className={styles.productTitle}>
                        <Link to="/product" title="SẢN PHẨM MỚI NHẤT">
                            SẢN PHẨM MỚI NHẤT
                        </Link>
                        <p className={styles.productViewMore}>
                            <Link to="/product" className="Xem tất cả">
                                Xem tất cả
                            </Link>
                        </p>
                    </h2>
                </div>
                <div className={`row {styles.mainNewProductSlide}`} >
                    <div className="c-3"> <Item/></div>
                    <div className="c-3"> <Item/></div>
                    <div className="c-3"> <Item/></div>
                    <div className="c-3"> <Item/></div>
                </div>
            </div>
        </div>
    )
}

export default MainNewProduct;