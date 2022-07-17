import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import React from "react";
import styles from '../ManageProduct.module.css'
import Modal from 'react-modal'
import AddProduct from '../AddProduct/index.js'
import UpdateProduct from '../UpdateProduct/index'

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
const MnDress = () => {
    const [showModalRemove, setShowModalRemove] = useState(-1)
    const [showModalAdd, setShowModalAdd]= useState(false)
    const [showModalUpdate, setShowModalUpdate]= useState(false);
    const [flag, setFlag] = useState(0);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/get_product_by_categoryID?CategoryID=1')
        .then(res => res.json())
        .then(products => setProducts(products))
    },[])

    const handleUpdateDress= (id) => {
        setFlag(id);
        setShowModalUpdate(true);
    }
    
    const handleAddDress = ()=>{
        setShowModalAdd(true);
    }
    const handleRemoveDress = async(item) => {
            fetch('http://localhost:8080/delete_product',{
                method: 'DELETE',
                body: JSON.stringify({ProductID: item.ProductID})
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
                    <div className={styles.title_table_product_content}>ĐẦM</div>
                    <div className={styles.admin_right_product}>
                    <button className='btn_add' onClick={handleAddDress}>Thêm mới</button>
                    </div>
                </div>
            
            <table className={styles.table}>
                        <thead>
                            <tr className="table-tr">
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>STT</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 1%"}}>ID</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 10%"}}>NGÀY SỬA ĐỔI</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 13%"}}>TÊN</th>
                                <th scope="col" class={styles.table_title_pro}>MÔ TẢ</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>ẢNH</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>GIÁ</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>SẢN PHẨM MỚI</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>Size_M</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>Size_S</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>Size_L</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 5%"}}>Size_XL</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 7%"}}>CHẤT LIỆU</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 6%"}}>MÀU</th>
                                <th scope="col" class={styles.table_title_pro} style={{width:" 7%"}}>THAO TÁC</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {products.map((item, index) => {
                                return (
                                    <tr key={item.ProductID}>
                                        <th scope="row">{index + 1}</th>
                                        <td className={styles.content}>{item.ProductID}</td>
                                        <td className={styles.content}>{item.ModificationDate}</td>
                                        <td className={styles.content}>{item.ProductName}</td>
                                        <td className={styles.content}>{item.Description}</td>
                                        <td className={`${styles.content} ${styles.img_pro}`}><img src={item.Image} alt="" /></td>
                                        <td className={styles.content}>{format_curency(item.Price)}đ</td>
                                        <td className={styles.content}>{item.NewProduct}</td>
                                        <td className={styles.content}>{item.SizeM}</td>
                                        <td className={styles.content}>{item.SizeS}</td>
                                        <td className={styles.content}>{item.SizeL}</td>
                                        <td className={styles.content}>{item.SizeXL}</td>
                                        <td className={styles.content}>{item.Material}</td>
                                        <td className={styles.content}>{item.Color}</td>
                                        <td className={styles.content} style={{paddingLeft: '20px',paddingRight: '20px'}}>
                                            <div>
                                            <button 
                                                    onClick={()=>setShowModalRemove(item.ProductID)}
                                                    className={styles.btn_remove}
                                                >Xóa
                                                </button>
                                                <button 
                                                    className={styles.btn_update}
                                                    onClick={()=>handleUpdateDress(item.ProductID)}
                                                >Sửa
                                                </button>
                                            </div>
                                            {showModalUpdate&&(flag===item.ProductID)&&<UpdateProduct isDisplay={showModalUpdate} setShowModalUpdate={setShowModalUpdate} product={item}/>}
                                            <Modal
                                                isOpen={showModalRemove===item.ProductID}
                                                style={customStyles}
                                                ariaHideApp={false}
                                            >
                                                <div className={styles.model_body_react} >
                                                    <div className={styles.content_modal}>
                                                        <div>Bạn có chắc chắn xóa không ?</div>
                                                        <div className={styles.modal_btn}>
                                                            <button type="button" class={styles.btn_sure} onClick={() => handleRemoveDress(item)}>Chắc chắn</button>
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
            <AddProduct isDisplay={showModalAdd} setShowModalAdd={setShowModalAdd}/>;
            </div>
            </div>
        </div>
    )
}

export default MnDress