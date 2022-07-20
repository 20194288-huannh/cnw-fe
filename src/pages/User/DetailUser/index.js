import styles from "./DetailUser.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const format_curency = (a)=> {
        
    a=a.toString();
    a = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return a;
}

const DetailUser = () => {
    const [showFile, setShowFile] = useState(true);
    const [order, setOrder] = useState([]);
    var user = JSON.parse(localStorage.getItem('info_user'));

    const Logout = () => {
        localStorage.removeItem('info_user');
        window.location.replace('/');
    }

    const showOrder = () => {
        fetch(`http://localhost:8080/get_order_by_id?CustomerID=${user[0].UserID}&offset=0&count=4`)
        .then(res => res.json())
        .then(order => setOrder(order))
    }

    
    if(!user){
        window.location.replace('/login');
    }
    
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
                        <li onClick={Logout}
                        className={styles.cursor}>Đăng xuất</li>
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
                            <li className={`${styles.navItem} ${styles.cursor}`} onClick={showOrder}>
                                <h5 className={`${styles.navLink} ${styles.active}`} aria-current="page" href="#">Đơn hàng đã đặt</h5>
                            </li>
                        </ul>
                    )
                }
                   
                </>
                {console.log(showFile)}
                <div className={styles.userDetails}>
                    <ul>
                    {
                        showFile?(<>
                             <li>Tên Khách Hàng: {user[0].Name}</li>
                                <li>Số Điện Thoại: {user[0].PhoneNumber}</li>
                                <li>Email: {user[0].Email}</li>
                                <li>Địa Chỉ: {user[0].Address}</li>
                            </>
                               
                        ):(
                            order.length===0?<h6>Bạn không có đơn hàng nào</h6>:
                        <table className={styles.table}>
                            <thead>
                            <tr className="">
                                <th scope="col" className={styles.table_title_pro} style={{width:" 1%"}}>STT</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 1%"}}>ID</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>NGÀY MUA</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 10%"}}>TÊN SẢN PHẨM</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 10%"}}>MÔ TẢ</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>ẢNH</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>GIÁ</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>SỐ LƯỢNG</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 5%"}}>Size</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 7%"}}>CHẤT LIỆU</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 6%"}}>MÀU</th>
                                <th scope="col" className={styles.table_title_pro} style={{width:" 6%"}}>TỔNG TIỀN</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {order.map((item, index) => {
                                return (
                                    <tr key={item.OrderID}>
                                        <th scope="row">{index + 1}</th>
                                        <td className={styles.content}>{item.OrderID}</td>
                                        <td className={styles.content}>{item.Time}</td>
                                        <td className={styles.content}>{item.ProductName}</td>
                                        <td className={styles.content}>{item.Description}</td>
                                        <td className={`${styles.content} ${styles.img_pro}`}><img src={item.Image[0]} alt="" /></td>
                                        <td className={styles.content}>{format_curency(item.Price)}đ</td>
                                        <td className={styles.content}>{item.Quantity}</td>
                                        <td className={styles.content}>{item.Size}</td>
                                        <td className={styles.content}>{item.Material}</td>
                                        <td className={styles.content}>{item.Color}</td>
                                        <td className={styles.content}>{format_curency(item.Quantity * item.Price)}đ</td>
                                    </tr>
                                )
                            }  
                            )}
        
                        </tbody>
                        </table>   
                        )
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailUser;

