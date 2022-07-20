import { Link } from "react-router-dom"
import FindShop from "../Home/FindShop";
import Item from "../../Component/Item";
import NavProduct from "./NavProduct";
import styles from './Product.module.css'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Product = ({CategoryID, ProductTypeID}) => {
    const numProPerPage = 8;
    const [numOfPages, setNumOfPages] = useState(1);
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
    const a = "<<"
    const b = ">>"
    
    useEffect(() => {
        setPage(1);
    }, [ProductTypeID, CategoryID])

    var offset = (page - 1) *numProPerPage;

    useEffect(()=>{
        if (ProductTypeID){
            async function fetchData() {
                var response = await fetch(`http://localhost:8080/get_num_product_by_ProductTypeID?ProductTypeID=${ProductTypeID}`)
                var data = await response.json();
                setNumOfPages(Math.ceil(data / numProPerPage));

                var response = await fetch(`http://localhost:8080/get_products_limit_by_id?ProductTypeID=${ProductTypeID}&offset=${offset}&count=${numProPerPage}`)
                var data = await response.json();
                setProducts(data);
            }
            fetchData();

        }
        else if (CategoryID){
            async function fetchData() {
                var response = await fetch(`http://localhost:8080/get_num_product_by_CategoryID?CategoryID=${CategoryID}`)
                var data = await response.json();
                setNumOfPages(Math.ceil(data / numProPerPage));

                var response = await fetch(`http://localhost:8080/get_products_limit_by_id?CategoryID=${CategoryID}&offset=${offset}&count=${numProPerPage}`)
                var data = await response.json();
                setProducts(data);
            }
            fetchData();

        }
        else {
            async function fetchData() {
                var response = await fetch(`http://localhost:8080/get_num_product`)
                var data = await response.json();
                setNumOfPages(Math.ceil(data / numProPerPage));

                var response = await fetch(`http://localhost:8080/get_limit_products?offset=${offset}&count=${numProPerPage}`)
                var data = await response.json();
                setProducts(data);
            }
            fetchData();
        } 
        
    }, [page, CategoryID, ProductTypeID])
    
    const nextPage = (numOfPages)=>{
        if (page < numOfPages){
            setPage(page+1);
        }
        console.log(numOfPages);
    }

    const backPage = ()=>{
        if (page >= 2){
            setPage(page-1);
        }
    }

    return (
        <React.Fragment>
            <NavProduct linkPro={linkPro}/>
            <div className={`row ${styles.mainContent}`}>
                {products.map((product) => {
                    return <div key= {product.ProductID} className="c-6 l-3"><Item product={product}/></div>
                })}
                
            </div>
            <div className={styles.pagination}>
                <span className={`${styles.pageNode}`} onClick={backPage}>
                    <span className="titleNumber">  {a} </span>
                </span>
                <span className={`${styles.pageNode} ${styles.current}`}>
                    <span className="titleNumber">{page}</span>
                </span>
                <span className={`${styles.pageNode} `} onClick={()=>nextPage(numOfPages)}>
                    <span className="titleNumber"> {b} </span>
                </span>
            </div>
            <FindShop />
        </React.Fragment>
    )
}            
export default Product;
