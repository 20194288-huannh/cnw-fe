import { useState } from "react";
import React from "react";
import styles from '../ManageProduct.module.css'
import Modal from 'react-modal'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const UpdateProduct = ({isDisplay, setShowModalUpdate, product}) => {
    const [name, setName] = useState(product.ProductName);
    const [description, setDescription] = useState(product.Description);
    const [price, setPrice] = useState(product.Price);
    const [image, setImage] = useState(product.Image);
    const [type, setType] = useState(product.ProductTypeID);
    const [size_M, setSize_M] = useState(product.SizeM);
    const [size_S, setSize_S] = useState(product.SizeS);
    const [size_L, setSize_L] = useState(product.SizeL);
    const [size_XL, setSize_XL] = useState(product.SizeXL);
    const [material, setMaterial] = useState(product.Material);
    const [color, setColor] = useState(product.Color);
    const [newPro, setNewPro] = useState(product.NewPro);
    var date = new Date()
    

    const handleClickUpload = async(e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/update_product',{
                method: 'PUT',
                body: JSON.stringify({
                    ProductID: product.ProductID,
                    ProductName: name,
                    Description: description,
                    Image: image.join(","),
                    Price: price,
                    ProductTypeID: type,
                    NewProduct: newPro,
                    SizeM: size_M,
                    SizeS: size_S,
                    SizeL: size_L,
                    SizeXL: size_XL,
                    Material: material,
                    Color: color,
                    ModificationDate: date
                })
            })
            .then(res => res.text())
            .then(res => {
                alert("Đã cập nhật thành công!")
            })
            window.location.reload();
    }
    return (
        <Modal
                isOpen={isDisplay} 
                style={customStyles}
                ariaHideApp={false}
            >
                <div className={styles.modal_body_react} >
                    <div style={{overflow: 'auto'}}>
                        <div style={{display: 'flex'}}>
                            <h1>THÔNG TIN SẢN PHẨM</h1>
                            <button className={styles.btn_cancel_add} onClick={() => setShowModalUpdate(false)}>X</button>
                        </div>
                        
                        <div>
                            <div>
                                
                                <form onSubmit={(e) => handleClickUpload(e)}>
                                    <div className={styles.field_info}><label htmlFor="id" className={styles.labelData}>ID</label><input name="id" id="id" type="text" className={styles.form_control} readOnly={true} /></div>
                                    <div className={styles.field_info}><label htmlFor="name" className={styles.labelData}>Tên Sản Phẩm</label><input value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    name="name" id="name" type="text" required className={styles.form_control}/>
                                    </div>
                                    <div className={styles.field_info}><label htmlFor="des" className={styles.labelData}>Mô Tả</label><input value={description}
                                    onChange={(e)=>{setDescription(e.target.value)}}
                                    name="des" id="des" required className={styles.form_control} /></div>
                                    <div className={styles.field_info}><label htmlFor="price" className={styles.labelData}>Giá Tiền</label><input value={price}
                                    onChange={(e)=>{setPrice(e.target.value)}}
                                    name="price" id="price" type="number" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="new-pro" className={styles.labelData}>Sản phẩm mới</label><input value={newPro}
                                    onChange={(e)=>{setNewPro(e.target.value)}}
                                    name="new-pro" id="new-pro" type="text" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="type-pro" className={styles.labelData}>Loại sản phẩm</label><input value={type}
                                    onChange={(e)=>{setType(e.target.value)}}
                                    name="type-pro" id="type-pro" type="text" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="size-M" className={styles.labelData}>Size-M</label><input value={size_M}
                                    onChange={(e)=>{setSize_M(e.target.value)}}
                                    name="size-M" id="size-M" type="number" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="size-S" className={styles.labelData}>Size-S</label><input value={size_S} name="size-S"
                                    onChange={(e)=>{setSize_S(e.target.value)}}
                                    id="size-S" type="number" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="size-L" className={styles.labelData}>Size-L</label><input value={size_L} name="size-L"
                                    onChange={(e)=>{setSize_L(e.target.value)}}
                                    id="size-L" type="number" className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="size-XL" className={styles.labelData}>Size-XL</label><input value={size_XL}
                                    onChange={(e)=>{setSize_XL(e.target.value)}}
                                    name="size-XL" id="size-XL" type="number" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="material" className={styles.labelData}>Chất liệu</label><input value={material}
                                    onChange={(e)=>{setMaterial(e.target.value)}}
                                    name="material" id="material" type="text" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="color" className={styles.labelData}>Màu Sắc</label><input value={color} 
                                    onChange={(e)=>{setColor(e.target.value)}}
                                    name="color" id="color" type="text" required className={styles.form_control}/></div>
                                    <div className={styles.field_info}><label htmlFor="img" className={styles.labelData}>Image</label><input value={image} 
                                    onChange={(e)=>{setImage(e.target.value)}}
                                    name="image" id="image" type="text" required className={styles.form_control}/>
                                    </div>
                                    <button type="submit" className={styles.btn_add_product}>Cập nhật</button>
                                    
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            </Modal>
    )
}

export default UpdateProduct