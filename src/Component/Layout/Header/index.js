import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <Link to="/" className={styles.headerInfoAdd}>Hệ thống <span>36</span> Store - Mua hàng Online (08h30-17h30 từ
                            T2-T7)
                            <span> 1800 1732 </span> - CSKH (08h30-17h30 từ T2-T7)  <span> 1800 1731</span>
                    </Link>
                </div>
            </div>
            <div className={styles.headerNav}>
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
                            <Link to="/admin-skirt" className={styles.headerNavContentItemLink} title="Sản phẩm">SẢN PHẨM</Link>
                            <div className={styles.headerSubNav}>
                                <div className={styles.subNavList}>
                                    <ul>
                                        <li className={styles.subNavItem}>
                                            <Link to="/admin-dress">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_1.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Đầm</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/admin-shirt">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_2.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Áo</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/admin-skirt">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_6.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Chân váy</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/admin-trousers">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_7.jpg?v=5127"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Quần</span>
                                            </Link>
                                        </li>
                                        <li className={styles.subNavItem}>
                                            <Link to="/admin-accessory">
                                                <img alt={styles.anh} src="https://theme.hstatic.net/200000000133/1000569834/14/img_megamenu3_8.jpg?v=5365"
                                                    className={styles.subNavItemImg} />
                                                <span className={styles.subNavInfo}>Phụ kiện</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.headerNavRight}>
                    <div className={styles.headerSearchProduct}>
                        <div className={styles.search}>
                            <form action="search" className={styles.headerForm}>
                                <input autoFocus={true} type="text" className={styles.headerForm} placeholder="Tìm sản phẩm..." />
                                <div className="close-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                            </form>
                            <div className="search-result"></div>
                        </div>
                    </div>
                </div>
                <div className="notify">
                    <FontAwesomeIcon icon={faBell} />
                    <div className="notify_inner">
                        <div className='notify_header'>
                            Thông báo mới nhất
                        </div>
                        <div className='notify_body noselect'>
                            <div className='notify-item order unread'>
                                <div className='notify-item__thumbnail'></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
