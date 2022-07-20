import styles from './Register.module.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Register(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const handleClickUpload = () => {

    }
    
    const handleRegister = () => {
        // Xu li dang ki
    }

    return (
    <div className={styles.wrapper}>
        <ul className={styles.itemscope}>
            <li>
                <Link to="/">Trang chủ</Link>
            </li>
            <li>
                <Link to="/register">Đăng kí</Link>
            </li>
        </ul>
        <div className='row'>
            <div className={`c-12 l-6 ${styles.header}`} >
                <h1 className={styles.headerContent}>Đăng kí</h1>
            </div>
            <div className={`c-12 l-6 ${styles.form}`}>
                <input placeholder="Email" class="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Mật khẩu" class="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></input>
                <input placeholder="Xác nhận mật khẩu" class="password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} type="password"></input>
                <div className={`row ${styles.submit}`}>
                    <button className={`c-4 ${styles.btnRegister}`} onClick={handleRegister}>Đăng kí</button>
                </div>
            </div>
        </div>
    </div>);    
}

export default Register