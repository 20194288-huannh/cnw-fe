import styles from './item.module.css'
import { Link } from 'react-router-dom'
function Item(props){
    return (
    <div className={`${styles.newProductSlideItem} ${props.style}`} >
        <Link to={`/detail/codeItem`}>
            <div className={styles.newProductImg}>
                <img src="https://product.hstatic.net/200000000133/product/22sble022n-22sqse007n-22sawe001t-1_29ccf37200434464af2d4d83247b64fe_grande.jpg"
                    className={styles.imgChange} alt="anh"/>
                <img src="https://product.hstatic.net/200000000133/product/22sble022n-22sqse007n-22sawe001t-4_d73b882f4ea64056bc6a1aff588dc3e7_compact.jpg"
                    alt="anh" />
                <div className={styles.newProductLableTag}>
                    <img src="https://file.hstatic.net/200000000133/file/1_113da73eef75425786591a547aeda483.png"
                        alt="anh" />
                </div>
            </div>
        </Link>
        <div className={styles.newProductContent}>
            <div className={styles.newProductContentTitle}>
                <Link to={`/detail/codeItem`}>
                    Đầm hai dây, Dáng thắt eo 22SDKE277N
                </Link>
            </div>
            <div>
                <span style={{
                fontSize: "13px",
                textDecoration: 'line-through',
                marginRight: '10px',
                opacity: '0.6'}}>
                    1000000đ
                </span>
                <span>100000000đ</span>
            </div>
        </div>
    </div>) 
}

export default Item;