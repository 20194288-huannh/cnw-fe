import { Link } from "react-router-dom"
import FindShop from "../Home/FindShop";
import Item from "../../Component/Item";
import NavProduct from "./NavProduct";
import styles from './Product.module.css'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Product = ({CategoryID, ProductTypeID}) => {
    var numOfPages;
    const[page, setPage] = useState(1)
    const[products, setProducts] = useState([]);
    let linkPro;
    if (CategoryID == 1){
        linkPro = 'dress';
    } else if (CategoryID == 2){
        linkPro = 'shirt';
    } else if (CategoryID == 3){
        linkPro = 'skirt';
    } else if (CategoryID == 4){
        linkPro = 'trousers';
    } else {
        linkPro = 'product';
    }
    const a = ">>";
    
    

        useEffect(()=>{
            if (ProductTypeID){
                async function fetchData() {
                    var response = await fetch(`http://localhost:8080/get_num_product_by_ProductTypeID?ProductTypeID=${ProductTypeID}`)
                    var data = await response.json();
                    numOfPages = Math.ceil(data / 4);
                    
                    var response = await fetch(`http://localhost:8080/get_products_limit_by_id?ProductTypeID=${ProductTypeID}&offset=0&count=16`)
                    var data = await response.json();
                    setProducts(data);
                }
                fetchData();
            }
            else if (CategoryID){
                async function fetchData() {
                    var response = await fetch(`http://localhost:8080/get_num_product_by_CategoryID?CategoryID=${CategoryID}`)
                    var data = await response.json();
                    numOfPages = Math.ceil(data / 4);

                    var response = await fetch(`http://localhost:8080/get_products_limit_by_id?CategoryID=${CategoryID}&offset=0&count=4`)
                    var data = await response.json();
                    setProducts(data);
                }
                fetchData();
            }
            else {
                async function fetchData() {
                    var response = await fetch(`http://localhost:8080/get_num_product`)
                    var data = await response.json();
                    numOfPages = Math.ceil(data / 4);

                    var response = await fetch(`http://localhost:8080/get_limit_products?offset=${page}&count=4`)
                    var data = await response.json();
                    setProducts(data);
                }
                fetchData();
            } 
            
        }, [CategoryID, ProductTypeID])
    

    return (
        <React.Fragment>
            <NavProduct linkPro={linkPro}/>
            <div className={`row ${styles.mainContent}`}>
                {products.map((product) => {
                    return <div key= {product.ProductID} className="c-6 l-3"><Item product={product}/></div>
                })}
                {
                    
                }
            </div>
            <div className={styles.pagination}>
                <span className={`${styles.pageNode} ${styles.current}`}>
                    <span className="titleNumber">1</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">2</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">3</span>
                </span>
                <span className={`${styles.pageNode}`}>
                    <span className="titleNumber">...</span>
                </span>
                <span className={`${styles.pageNode} `}>
                    <span className="titleNumber">12</span>
                </span>
                <span className={`${styles.pageNode} `}>
                    <span className="titleNumber"> {a} </span>
                </span>
            </div>
            <FindShop />
        </React.Fragment>
    )
}            
export default Product;
