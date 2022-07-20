import styles from './mainNewProduct.module.css'
import Item from '../../../Component/Item';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const MainNewProduct = () => {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            var response = await fetch(`http://localhost:8080/get_limit_products?offset=0&count=4`)
            var data = await response.json();
            console.log(data);
            setProducts(data);
          }
          fetchData();
    }, [])
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
                <div className={`row ${styles.mainNewProductSlide}`} >
                    {products.map((product) => {
                        return <div key= {product.ProductID} className="c-6 l-3"><Item product={product}/></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainNewProduct;