import styles from './DetailProduct.module.css'
import { useState } from "react";
import { useEffect } from "react";
import FindShop from "../Home/FindShop";
import { Link, useParams } from "react-router-dom";
import NavProduct from "../Product/NavProduct";


const sizeTest = ["SizeM", "SizeS", "SizeL", "SizeXL"];
const size = ["M", "S", "L", "XL"];
function DetailProduct() {
    var param = useParams();
    var ProductID = param.id;
    const [product, setProduct] = useState();
    const [keyActive, setkeyActive] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    useEffect(() => {
        async function fetchData() {
            var response = await fetch(`http://localhost:8080/get_product_by_id?ProductID=${ProductID}`)
            var data = await response.json();
            setProduct(data);
            console.log(data)
        }
        fetchData();
    }, [ProductID])

    if (product == undefined) {
        return;
    }
    var user = JSON.parse(localStorage.getItem("info_user"));
    var date = new Date()

    const handleAddCart = () => {
        if(!user){
            alert("Vui lòng đăng nhập để mua hàng!");
            window.location.replace('/login');
        }
        if (!keyActive) {
            alert("Vui long chon size!")
        } else {
            fetch('http://localhost:8080/insert_order', {
                method: 'POST',
                body: JSON.stringify({
                    CustomerID: user[0].UserID,
                    ProductID: ProductID,
                    Price: product[0].Price,
                    Size: keyActive,
                    Quantity: quantity,
                    Discount: 0,
                    Status: "Ok"
                })
            })
                .then(res => res.text())
                .then(res => {
                    if (res == 1) {
                        if (keyActive == "M") {
                            product[0].SizeM = product[0].SizeM - quantity;
                            console.log("M")
                        } else if (keyActive == "L") {
                            product[0].SizeL = product[0].SizeL - quantity;
                        } else if (keyActive == "S") {
                            product[0].SizeS = product[0].SizeS - quantity;
                            console.log("S")
                        } else if (keyActive == "XL") {
                            product[0].SizeXL = product[0].SizeXL - quantity;
                            console.log("XL")
                        }
                        fetch('http://localhost:8080/update_product', {
                            method: 'PUT',
                            body: JSON.stringify({
                                ProductID: ProductID,
                                ProductName: product[0].ProductName,
                                Description: product[0].Description,
                                Image: product[0].Image.join(","),
                                Price: product[0].Price,
                                ProductTypeID: product[0].ProductTypeID,
                                NewProduct: product[0].NewProduct,
                                SizeM: product[0].SizeM,
                                SizeS: product[0].SizeS,
                                SizeL: product[0].SizeL,
                                SizeXL: product[0].SizeXL,
                                Material: product[0].Material,
                                Color: product[0].Color,
                                ModificationDate: date
                            })
                        })
                            .then(res => res.text())
                            .then(res => console.log(res))
                        alert("Mua hàng thành công!")
                    }
                })



        }

    };
    return (
        <div>
            <div className={styles.productContainer}>
                <div className={`row ${styles.product}`}>
                    <div className={`l-7 c-12 ${styles.productImages}`}>
                        <div className="row">
                            <div className={`l-2 c-0 ${styles.thumbs}`}>
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
                            <div className={`l-10 c-12 ${styles.mainImages}`}>
                                <img src={product[0].Image[parseInt(activeImg, 10)]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`l-5 ${styles.productDetails}`}>
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
