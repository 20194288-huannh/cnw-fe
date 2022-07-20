import React, { useState } from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser, faCartShopping, faBars} from '@fortawesome/free-solid-svg-icons'

function Header(){
    var user = JSON.parse(localStorage.getItem('info_user'));
    const [show,setShow] = useState(false)
    console.log(show);
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <Link to="/" className={styles.headerInfoAdd}>Hệ thống <span>36</span> Store - Mua hàng Online (08h30-17h30 từ
                            T2-T7)
                            <span> 1800 1732 </span> - CSKH (08h30-17h30 từ T2-T7)  <span> 1800 1731</span>
                    </Link>
                </div>
            </div>
            <div className={styles.headerNav}>
                <div className = {`${styles.toggle} `} onClick={()=>{
                   setShow(!show)
                    
                }}>
                    <FontAwesomeIcon icon={faBars} className={`${styles.bars} ${styles.icon}`}/>
                    <nav className={`${styles.navbar}  ${show && 'show'}`}>
                        <ul className ={styles.mainMenu}>
                            <li>
                                <Link to="/">Hàng mới về</Link>
                            </li>
                            <li>
                                <Link to="/product">Sản phẩm</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.headerLogo}>
                    <Link to="/">
                        <img alt={styles.anh} src="https://file.hstatic.net/1000358207/file/logo_eva.svg" className={styles.headerLogoImg} />
                    </Link>
                </div>
                <div className={styles.headerNavMain}>
                    <ul className={styles.headerNavContent}>
                        <li className={styles.headerNavContentItem}>
                            <Link to="/" className={styles.headerNavContentItemLink} title="Hàng mới về">HÀNG MỚI VỀ</Link>
                        </li>
                        <li className={`${styles.headerNavContentItem} ${styles.hasItemMenu}`}>
                            <Link to="/skirt" className={styles.headerNavContentItemLink} title="Sản phẩm">SẢN PHẨM</Link>
                            <div className={styles.headerSubNav}>
                                <div className={styles.subNavList}>
                                    <ul>
                                        <li className={styles.subNavItem}>
                                            <Link to="/dress">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_1.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Đầm</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/shirt">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_2.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Áo</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/skirt">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_6.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Chân váy</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/trousers">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_7.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Quần</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/product">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_8.jpg?v=5365"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Tất cả sản phẩm</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {user && user[0].Role == 1?
                        <div className={styles.mnTotal}>
                            <li className={styles.headerNavContentItem}>
                            <Link to="/admin/product" className={styles.headerNavContentItemLink} title="Quản lí sản phẩm">QUẢN LÍ SẢN PHẨM</Link>
                            </li>
                            <li className={styles.headerNavContentItem}>
                            <Link to="/admin/order" className={styles.headerNavContentItemLink} title="Quản lí order">QUẢN LÍ ORDER</Link>
                            </li>
                        </div>
                        :<h2></h2>}
                        
                    </ul>
                </div>
                <div className={styles.headerNavRight}>
                    <div className={styles.headerSearchProduct}>
                        <div className={styles.search}>
                            <div className="search-result"></div>
                        </div>
                    </div>
                </div>
                <div className={styles.notify}>
                    <Link to="/account" ><FontAwesomeIcon icon={faUser} className={styles.icon}/></Link>
                    <div className={styles.notifyInner}>
                        Đăng nhập
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
