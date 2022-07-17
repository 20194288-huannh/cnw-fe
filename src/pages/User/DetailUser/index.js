import styles from "./DetailUser.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const DetailUser = ({user}) => {
    const [showFile, setShowFile] = useState(true);
    const [waitConfirm, setWaitConfirm] = useState(1);
    const [status, setStatus] = useState('Chờ xử lý')
    /*const [deleteOrder, {loading, error}] = useMutation(DELETE_ORDER, {
        onCompleted: (data)=>{
            showSuccessToast('Hủy thành công');
            setWaitConfirm(4)
            setStatus('Hủy đơn hàng')
        }
    })*/
    
    if(!user){
        return (
            <div className={styles.titleUser}>
                <h1>Tài khoản của bạn</h1>
                <div className="d-inline-block mt-2">
                    <span>Quý khách vui lòng đăng nhập để tiếp tục</span>
                    <button type="button" 
                    className="btn btn-dark addCart mt-2 "
                    onClick={()=>{
                        //login
                    }}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        )
    }
    const arrOrder = user.orders.filter(item => item.status === status) || [];
    return (
        <div className="row">
            <div className="c-3">
                <div className={`${styles.userInfor}`}>
                    <div>
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '2rem',
                            padding: '12px',
                            border:' solid 1px #ccc',
                            borderRadius: '50%'}} 
                            aria-hidden="true"/>
                        <div style={{padding: '0 0 4.5rem 0.2rem', display: "inline"}}>
                            <p style= {{display: "inline"}}>{user.name}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.userOption}>
                    <ul>
                        <li onClick={() => setShowFile(true)} className={styles.cursor} >Tài khoản của tôi</li>
                        <li onClick={() => setShowFile(false)} className={styles.cursor}>Đơn hàng</li>
                        <li onClick={()=>{
                            //logout
                        }
                        } className={styles.cursor}>Đăng xuất</li>
                    </ul>
                </div>
            </div>
            <div className="c-9" style={{minHeight:'38rem'}}>
                <>
                {
                    showFile?(
                        <div className={styles.userDetail}>
                            <h4 style= {{fontSize: "24px", paddingTop: "8px"}}>Hồ Sơ Của Tôi</h4>                
                            <span style= {{fontSize: "16px"}}>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
                        </div>
                    ):(
                        <ul className={`${styles.nav} ${styles.navTab}`}>
                            <li className={`${styles.navItem} ${styles.cursor}`} onClick={()=>{
                                setWaitConfirm(1)
                                setStatus('Chờ xử lý')    
                            }}>
                                <h5 className={waitConfirm===1?`${styles.navLink} ${styles.active}`:`${styles.navLink}`} aria-current="page" href="#">Chờ xử lý</h5>
                            </li>
                            <li className={`${styles.navItem} ${styles.cursor}`} onClick={()=>{
                                setWaitConfirm(2)
                                setStatus('Đang giao hàng')    
                            }}>
                                <h5 className={waitConfirm===2?`${styles.navLink} ${styles.active}`:`${styles.navLink}`} href="#">Đang giao</h5>
                            </li>
                            <li className={`${styles.navItem} ${styles.cursor}`} onClick={()=>{
                                setWaitConfirm(3)
                                setStatus('Đã giao hàng')    
                            }}>
                                <h5 className={waitConfirm===3?`${styles.navLink} ${styles.active}`:`${styles.navLink}`} href="#">Đã giao</h5>
                            </li>
                            <li className={`${styles.navItem} ${styles.cursor}`} onClick={()=>{
                                setWaitConfirm(4)
                                setStatus('Hủy đơn hàng')    
                            }}>
                                <h5 className={waitConfirm===4?`${styles.navLink} ${styles.active}`:`${styles.navLink}`} href="#">Đã hủy</h5>
                            </li>
                        </ul>
                    )
                }
                   
                </>
                <div className={styles.userDetails}>
                    <ul>
                    {
                        showFile?(<>
                             <li>Tên Khách Hàng: {user.name}</li>
                                <li>Số Điện Thoại: {user.phoneNumber}</li>
                                <li>Email: {user.email}</li>
                                <li>Địa Chỉ: {user.address}</li>
                            </>
                               
                        ):(
                            arrOrder.length===0?<h6>Bạn không có đơn hàng nào</h6>:
                            arrOrder.map(item => {
                                const arrProduct = item.namePro.map((pro) => {
                                    return {
                                        infor: pro,
                                        //img: product.find((item)=> item.codePro===pro.slice(pro.length-10, pro.length))
                                    }
                                })
                                return (
                                    <div style={{borderBottom:'solid 1px #ccc', padding:'1rem 0'}}>
                                        {
                                            waitConfirm===1&&
                                            <div className="d-flex justify-content-end">
                                                <button type="button" class="btn btn-danger" onClick={()=>{
                                                    // Huy don hang
                                                }}>Hủy đơn hàng</button>
                                            </div>
                                        }
                                        {
                                            arrProduct.map((order, index) => {
                                                var createdAt = new Date(parseFloat(item.createdAt));
                                                var updatedAt = new Date(parseFloat(item.updatedAt));
                                                return (
                                                        <li className="header__cart-item" style={{padding:'0', marginTop:'1rem'}} key={index}>
                                                            <img src={order.img.img[0]} alt="" style={{width:'10%'}}/>
                                                            <div className="d-flex flex-column" style={{width:'100%'}}>
                                                                <div className="header__cart-item-info d-flex justify-content-between" style={{width:'100%'}}>
                                                                    <div >
                                                                        <h5 className="header__cart-item-name" style={{paddingLeft:'1rem'}}>{order.infor}</h5>
                                                                    </div>
                                                                    
                                                                    <div>
                                                                        <h5>{order.img.price}đ</h5>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5 className="header__cart-item-name" style={{paddingLeft:'1rem'}}>Ngày đặt: {createdAt.toLocaleString()}</h5>
                                                                </div>
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                        <div className="d-flex justify-content-end" >
                                            <h5 style={{padding: '1rem',
                                            backgroundColor: '#e29481'}}>Tổng giá tiền: {item.price}đ</h5>
                                        </div>
                                    </div>
                                )
                            })
                            
                        )
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailUser;

