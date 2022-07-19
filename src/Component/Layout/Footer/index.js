import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Footer(){
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.aboutUs}>
                    <div className={styles.about}>
                        <div className={styles.aboutList}>
                            <ul>
                                <li className={`${styles.aboutItem} ${styles.title}`}>Tuyển dụng</li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Tuyển dụng Tháng 12/2020</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Tuyển dụng tháng 07/2020</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Thông tin tuyển dụng tháng 02/2021</Link></li>
                            </ul>
                        </div>
                        <div className={styles.aboutList}>
                            <ul>
                                <li className={`${styles.aboutItem} ${styles.title}`}>Khám phá EDE</li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Về chúng tôi</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Câu hỏi thường gặp</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Tin tức</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Sự kiện</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Sao & Eva</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Mix & Match</Link></li>
                            </ul>
                        </div>
                        <div className={styles.aboutList}>
                            <ul>
                                <li className={`${styles.aboutItem} ${styles.title}`}>Chính sách</li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Chính sách thanh toán</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Chính sách vận chuyển</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Chính sách đổi trả</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Chính sách bảo mật</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Chương trình thẻ VIP</Link></li>
                                <li className={`${styles.hidden} ${styles.aboutItem}`}><Link to="/">Hướng dẫn chọn size</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.signUp}>
                        <div className={styles.signUpTitle}>
                            <h4>ĐĂNG KÝ NHẬN TIN TỨC VÀ ƯU ĐÃI CỦA EDE</h4>
                        </div>
                        <div className={styles.signUpContent}>
                            <div className={styles.signUpDes}>
                                <p>Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi</p>
                            </div>
                            <div className={styles.signUpForm}>
                                <input type="email" required id={styles.email} placeholder="Nhập email của bạn"/>
                                <button className={styles.submitBtn} type="submit">
                                    <FontAwesomeIcon icon={faAngleRight} aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <Link to="/"><FontAwesomeIcon icon={faFacebook} aria-hidden="true" className={styles.contactIcon}/></Link>
                    <Link to="/"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" className={styles.contactIcon}/></Link>
                    <Link to="/"><FontAwesomeIcon icon={faYoutube} aria-hidden="true" className={styles.contactIcon}/></Link>
                    <Link to="/"><FontAwesomeIcon icon={faTwitter} aria-hidden="true" className={styles.contactIcon}/></Link>
                </div>
                <div className={styles.address}>
                    <div className={styles.addressRight}>
                        <div className={styles.addressTem}>
                            <Link to="/">
                                <img src="https://theme.hstatic.net/200000000133/1000569834/14/logo-bct.png?v=5160" alt="anh" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;