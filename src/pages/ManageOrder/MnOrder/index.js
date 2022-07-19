import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import React from "react";
import styles from '../ManageOrder.module.css'
import Modal from 'react-modal'

const format_curency = (a)=> {
        
    a=a.toString();
    a = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    
    return a;
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '20%',
      height: '20%',
    },
  };


const MnOrder = () => {
    const [showModalRemove, setShowModalRemove] = useState(-1)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/get_all_orders`)
        .then(res => res.json())
        .then(orders => setOrders(orders))
        
    },[])

    const handleRemoveOrder = async(item) => {
            fetch('http://localhost:8080/delete_order',{
                method: 'DELETE',
                body: JSON.stringify({OrderID: item.OrderID})
            })
            .then(res => res.json())
            .then(res => console.log(res))
            window.location.reload();
    }


    return (
        <div>
            
            <div className={styles.margin_bottom}>
            <div className={styles.table_product}>
            <div className={styles.table_product_title}>
                    <div className={styles.title_table_product_content}>Order</div>
                    <div className={styles.admin_right_product}>
                    </div>
                </div>
            
            <table className={styles.table}>
                        <thead>
                            <tr className="">
                                <th scope="col" className={styles.table_title_pro} style={{width:" 1%"}}>STT</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>ID ORDER</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>ID KHÁCH HÀNG</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>ID SẢN PHẨM</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 15%"}}>TÊN SẢN PHẨM</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 10%"}}>ẢNH</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>GIÁ</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>SIZE</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>SỐ LƯỢNG</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>THỜI GIAN</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 7%"}}>THAO TÁC</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {orders.map((item, index) => {
                                return (
                                    <tr key={item.OrderID}>
                                        <th scope="row">{index + 1}</th>
                                        <td className={styles.content}>{item.OrderID}</td>
                                        <td className={styles.content}>{item.CustomerID}</td>
                                        <td className={styles.content}>{item.ProductID}</td>
                                        <td className={styles.content}>{item.ProductName}</td>
                                        <td className={`${styles.content} ${styles.img_pro}`}><img src={item.Image[0]} alt="" /></td>
                                        <td className={styles.content}>{format_curency(item.Price)}đ</td>
                                        <td className={styles.content}>{item.Size}</td>
                                        <td className={styles.content}>{item.Quantity}</td>
                                        <td className={styles.content}>{item.Time}</td>
                                        <td className={styles.content} style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                            <div>
                                            <button 
                                                    onClick={()=>setShowModalRemove(item.OrderID)}
                                                    className={styles.btn_remove}
                                                >Xóa
                                                </button>
                                            </div>
    
                                            <Modal
                                                isOpen={showModalRemove===item.OrderID}
                                                style={customStyles}
                                                ariaHideApp={false}
                                            >
                                                <div className={styles.model_body_react} >
                                                    <div className={styles.content_modal}>
                                                        <div>Bạn có chắc chắn xóa không ?</div>
                                                        <div className={styles.modal_btn}>
                                                            <button type="button" class={styles.btn_sure} onClick={() => handleRemoveOrder(item)}>Chắc chắn</button>
                                                            <button type="button" class={styles.btn_cancel} onClick={() => setShowModalRemove(false)}>Hủy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                )
                            }  
                            )}
        
                        </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}

export default MnOrder