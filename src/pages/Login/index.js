import styles from './Login.module.css'
import { Link } from 'react-router-dom'

function Login(){
    return (<div className={styles.wrapper}>
        <ul className={styles.itemscope}>
            <li>
                <Link to="/">Trang chủ</Link>
            </li>
            <li>
                <Link to="/account">Tài khoản</Link>
            </li>
            <li>
                <Link to="/account/login">Đăng nhập</Link>
            </li>
        </ul>
        <div className='row'>
            <div className={`c-6 ${styles.header}`} >
                <h1 className={styles.headerContent}>Đăng nhập</h1>
            </div>
            <div className={`c-6 ${styles.form}`}>
                <input placeholder="Email" class="text"></input>
                <input placeholder="Mật khẩu" class="password"></input>
                <div className={`row ${styles.submit}`}>
                    <button type= "submit" className={`c-4 ${styles.btnLogin}`}>Đăng nhập</button>
                    <div className={`c-4 ${styles.more}`}>
                        <Link to="/">Quên mật khẩu ?</Link>
                        <span>hoặc</span><Link to="/"> Đăng kí</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);    
}

export default Login