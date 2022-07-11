import { Link } from "react-router-dom"
import React from "react";
import styles from '../ManageProduct.module.css'

const MnDress = () => {
    return (
        <React.Fragment>
            <div className={styles.margin_bottom}>
            <div className={styles.table_product}>
            <div className={styles.table_product_title}>
                    <div className={styles.title_table_product_content}>ĐẦM</div>
                    <div className={styles.admin_right_product}>
                        <div className="admin-search">
                                    <form action="search" className="header_form_admin_product">
                                            <input autoFocus={true} type="text" className="header_search_admin_product" placeholder="Tìm sản phẩm..." 
                                                //value={inputSearch} onChange={(e) => {handleInputSearch(e.target.value)}}
                                            />
                                            <div className="close_search_product"><i class="fas fa-search" /></div>
                                    </form>
                        </div>
                    <button className='btn_add'><i className="fas fa-plus"/>Thêm mới</button>
                    </div>
                </div>
            
            <table className={styles.table}>
                        <thead>
                            <tr className="table-tr">
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>STT</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>ID</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 9%"}}>NGÀY TẠO</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 10%"}}>NGÀY CẬP NHẬT</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 13%"}}>TÊN</th>
                                <th scope="col" class="table_title_pro pro-des">MÔ TẢ</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>ẢNH</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>GIÁ</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 10%"}}>MÃ SẢN PHẨM</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>Size_M</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>Size_S</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>Size_L</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>Size_XL</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 7%"}}>CHẤT LIỆU</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 6%"}}>MÀU</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 7%"}}>THAO TÁC</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                        <th scope="row"> 1 </th>
                            <td className={styles.content}>1</td>
                            <td className={styles.content}>10-11-2022</td>
                            <td className={styles.content}>11-11-2022</td>
                            <td className={styles.content}>Đầm ngủ</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                            <td className={styles.content}>None</td>
                        </tbody>
            </table>
            </div>
            </div>
        </React.Fragment>
    )
}

export default MnDress