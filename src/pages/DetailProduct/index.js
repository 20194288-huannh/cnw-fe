import styles from './DetailProduct.module.css'
import { useState } from "react";
import FindShop from "../Home/FindShop";
import { showSuccessToast } from "../../Component/Toast";
import { Link } from "react-router-dom";
import NavProduct from "../Product/NavProduct";
import "../../Component/Toast/toast.css"

const sizeTest = ["size_M", "size_S", "size_L", "size_XL"];
const size = ["M", "S", "L", "XL"];
function DetailProduct() {
    var detailPro = {
        img: [
            "https://product.hstatic.net/200000000133/product/jim01968_990adffe8f8c4678806107d1a0b4f298_compact.jpg",
            "https://product.hstatic.net/200000000133/product/jim01973_835ffcb26ef5413ab56cad888a423d25_compact.jpg",
            "https://product.hstatic.net/200000000133/product/jim01991_8f88cae084ca408b8b3eb46e46b06b43_compact.jpg",
            "https://product.hstatic.net/200000000133/product/jim02002_6bfc34830dc74cb398ab1bd30aab85e9_compact.jpg",
        ],
        description: "Đầm dập li với hoạ tiết hoa vẽ tay cầu kì. Phom dáng thoải mái trên nền màu xanh tím than tiện dụng, hoạ tiết hoa như được tô điểm nổi bật cho trang phục, mang lại vẻ đẹp thanh lịch, nhã nhặn.",
        color: "xanh",
        material: "Voan",
        mainImages:
            "https://product.hstatic.net/200000000133/product/jim01968_990adffe8f8c4678806107d1a0b4f298_master.jpg",
        name: "Chân váy Midi, Dáng xòe 22SCVE066R",
        codePro: "22SCVE066R",
        price: 999000,
        sale: 50,
    };
    const [keyActive, setkeyActive] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const handleAddCart = () => {
        if (!keyActive) {
            showSuccessToast("Vui lòng chọn size của sản phẩm", "Cảnh báo!", "error");
        } else {
            showSuccessToast("Bạn đã thêm vào giỏ hàng", "Thành công!", "success");
            // Theem san pham vao gio hang
        }
    };
    return (
        <div>
            <div className={styles.productContainer}>
                <NavProduct linkPro={detailPro.name} />
                <div className={`row ${styles.product}`}>
                    <div className={`c-7 ${styles.productImages}`}>
                        <div className="row">
                            <div className={`c-2 ${styles.thumbs}`}>
                                {detailPro.img.map((item, index) => {
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
                                <img src={detailPro.img[parseInt(activeImg, 10)]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`c-5 ${styles.productDetails}`}>
                        <h1>{detailPro.name}</h1>
                        <div className={styles.skuProduct}>
                            <label>SKU:</label>
                            <span>{detailPro.codePro}</span>
                        </div>
                        {detailPro.sale ? (
                            <div>
                                <span
                                    style={{
                                        fontSize: "13px",
                                        textDecoration: "line-through",
                                        marginRight: "10px",
                                        opacity: "0.6",
                                    }}
                                >
                                    {detailPro.price} đ
                                </span>
                                <span className={styles.fwBold}>
                                    {detailPro.price - (detailPro.price * detailPro.sale) / 100}đ
                                </span>
                            </div>
                        ) : (
                            <div>
                                <span style={{ fontSize: "13px" }}>{detailPro.price}đ</span>
                            </div>
                        )}
                        <div className={styles.desProduct}>
                            <span>Thông tin sản phẩm:</span>
                            <p className={styles.desTitle}>{detailPro.description}</p>
                            <p>Màu sắc: {detailPro.color}</p>
                            <p>Chất liệu: {detailPro.material}</p>
                        </div>
                        <div className={styles.sizeArea}>
                            <p>Size</p>
                            <div className={styles.option}>
                                {size.map((item, index) => {
                                    return (
                                        <div
                                            className={`${styles.optionContent} ${keyActive === item && styles.activeSize
                                                } ${detailPro[sizeTest[index]] === 0 && styles.disable}`}
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
                            Thêm vào giỏ hàng
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
