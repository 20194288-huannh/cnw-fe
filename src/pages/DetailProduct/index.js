import styles from './DetailProduct.module.css'
import { useState } from "react";
import { useEffect } from "react";
import FindShop from "../Home/FindShop";
import { showSuccessToast } from "../../Component/Toast";
import { Link, useParams } from "react-router-dom";
import NavProduct from "../Product/NavProduct";
import "../../Component/Toast/toast.css";

const sizeTest = ["SizeM", "SizeS", "SizeL", "SizeXL"];
const size = ["M", "S", "L", "XL"];
function DetailProduct() {
    var param = useParams();
    var ProductID = param.id;
    const [product, setProduct] = useState();
    const [keyActive, setkeyActive] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    useEffect(()=>{
        async function fetchData() {
            var response = await fetch(`http://localhost:8080/get_product_by_id?ProductID=${ProductID}`)
            var data = await response.json();
            setProduct(data);
            console.log(data)
          }
          fetchData();
    }, [ProductID])
    
    if (product == undefined){
        return ;
    }
    

    const handleAddCart = () => {
        if (!keyActive) {
            showSuccessToast("Vui lòng chọn size của sản phẩm", "Cảnh báo!", "error");
        } else {
            showSuccessToast("Bạn đã thêm vào giỏ hàng", "Thành công!", "success");
        }
    };
    return (
        <div>
            <div className={styles.productContainer}>
                <div className={`row ${styles.product}`}>
                    <div className={`c-7 ${styles.productImages}`}>
                        <div className="row">
                            <div className={`c-2 ${styles.thumbs}`}>
                                {product[0].Image.map((item, index) => {
                                    return (
                                        <div
                                            className={`${styles.thumbItem} ${parseInt(activeImg, 10) === index && styles.activeImg
                                                }}`}
                                            onClick={() => setActiveImg(index)}
                                            key={index}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={`c-10 ${styles.mainImages}`}>
                                <img src={product[0].Image[parseInt(activeImg, 10)]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`c-5 ${styles.productDetails}`}>
                        <h1>{product[0].ProductName}</h1>
                
                        <div className={styles.desProduct}>
                            <span>Thông tin sản phẩm:</span>
                            <p className={styles.desTitle}>{product[0].Description}</p>
                            <p>Màu sắc: {product[0].Color}</p>
                            <p>Chất liệu: {product[0].Material}</p>
                        </div>
                        <div className={styles.sizeArea}>
                            <p>Size</p>
                            <div className={styles.option}>
                                {size.map((item, index) => {
                                var sizeType = sizeTest[index];
                                    return (
                                        <div
                                            className={`${styles.optionContent} ${keyActive === item && styles.activeSize
                                                } ${product[0].sizeType === 0 && styles.disable}`}
                                            key={index}
                                            onClick={() => {
                                                setkeyActive(item);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.quantityArea}>
                                <div
                                    className={styles.btnMinusQuantity}
                                    onClick={() => {
                                        if (quantity > 0) setQuantity(quantity - 1);
                                    }}
                                >
                                    {" "}
                                    -{" "}
                                </div>
                                <div className={styles.quantityContent}>{quantity}</div>
                                <div
                                    className={styles.btnAddQuantity}
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    {" "}
                                    +{" "}
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnDark} ${styles.addCart}`}
                            onClick={handleAddCart}
                        >
                            Mua sản phẩm
                        </button>
                        <div className={styles.hotlineProduct}>
                            <span className={styles.titleHotlineProduct}>
                                Mua hàng Online
                                <Link to="/"> 1800 1732 </Link>
                            </span>
                            <span className={styles.timeWorkProduct}>
                                Miễn phí từ (8:30 - 17:30) mỗi ngày
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <FindShop />
        </div>
    );
}

export default DetailProduct;
