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
                    Image: image,
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
            .then(res => console.log(res))
            //window.location.reload();
    }
    return (
        <Modal
                isOpen={isDisplay} 
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="modal-body-react" >
                    <div onclick={()=>setShowModalUpdate(false)}></div>
                    <div className="container" style={{overflow: 'auto'}}>
                        <h1 className="title">THÔNG TIN SẢN PHẨM</h1>
                        <div className="info row">
                            <div className="info-left col-6 ">
                                <form class="" onSubmit={(e) => handleClickUpload(e)}>
                                    <div class="field-info"><label htmlFor="id" class="">ID</label><input name="id" id="id" type="text" class="form-control" readOnly={true} /></div>
                                    <div class="field-info"><label htmlFor="name" class="">Tên Sản Phẩm</label><input value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    name="name" id="name"type="text" required class="form-control"/>
                                    </div>
                                    <div class="field-info"><label htmlFor="des" class="">Mô Tả</label><input value={description}
                                    onChange={(e)=>{setDescription(e.target.value)}}
                                    name="des" id="des" required class="form-control" /></div>
                                    <div class="field-info"><label htmlFor="price" class="">Giá Tiền</label><input value={price}
                                    onChange={(e)=>{setPrice(e.target.value)}}
                                    name="price" id="price" type="number" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="code-pro" class="">Sản phẩm mới</label><input value={newPro}
                                    onChange={(e)=>{setNewPro(e.target.value)}}
                                    name="code-pro" id="code-pro" type="text" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="type-pro" class="">Loại sản phẩm</label><input value={type}
                                    onChange={(e)=>{setType(e.target.value)}}
                                    name="code-pro" id="code-pro" type="text" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="size-M" class="">Size-M</label><input value={size_M}
                                    onChange={(e)=>{setSize_M(e.target.value)}}
                                    name="size-M" id="size-M" type="number" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="size-S" class="">Size-S</label><input value={size_S} name="size-S"
                                    onChange={(e)=>{setSize_S(e.target.value)}}
                                    id="size-S" type="number" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="size-L" class="">Size-L</label><input value={size_L} name="size-L"
                                    onChange={(e)=>{setSize_L(e.target.value)}}
                                    id="size-L" type="number" class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="size-XL" class="">Size-XL</label><input value={size_XL}
                                    onChange={(e)=>{setSize_XL(e.target.value)}}
                                    name="size-XL" id="size-XL" type="number" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="material" class="">Chất liệu</label><input value={material}
                                    onChange={(e)=>{setMaterial(e.target.value)}}
                                    name="material" id="material" type="text" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="color" class="">Màu Sắc</label><input value={color} 
                                    onChange={(e)=>{setColor(e.target.value)}}
                                    name="color" id="color" type="text" required class="form-control"/></div>
                                    <div class="field-info"><label htmlFor="img" class="">Image</label><input value={image} 
                                    onChange={(e)=>{setImage(e.target.value)}}
                                    name="image" id="image" type="text" required class="form-control"/>
                                    </div>
                                    <button type="submit" class="mt-1 btn btn-success">Thêm mới</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            </Modal>
    )
}

export default UpdateProduct