import styles from './item.module.css'
import { Link } from 'react-router-dom'
function Item({product}){
    let hidden = product.NewProduct ? "" : styles.hidden;
    return (
    <div className={`${styles.newProductSlideItem} `} >
        <Link to={`/detail/${product.ProductID}`}>
            <div className={styles.newProductImg}>
                <img src={product.Image[0]}
                    className={styles.imgChange} alt="anh"/>
                <img src={product.Image[1]}
                    alt="anh" />
                <div className={`${styles.newProductLableTag} ${hidden} `} >
                    <img src="https://file.hstatic.net/200000000133/file/1_113da73eef75425786591a547aeda483.png"
                    alt="anh" />
                </div>
            </div>
        </Link>
        <div className={styles.newProductContent}>
            <div className={styles.newProductContentTitle}>
                <Link to={`/detail/codeItem`}>
                    {product.ProductName}
                </Link>
            </div>
            <div>
                <span style={{
                fontSize: "13px",
                textDecoration: 'line-through',
                marginRight: '10px',
                opacity: '0.6'}}>
                    {new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.Price)}
                </span>
                <span>{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.Price)}</span>
            </div>
        </div>
    </div>) 
}

export default Item;