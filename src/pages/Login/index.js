import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'


function Login(){

    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const handleRegister = () =>{
        window.location.replace('/register')
    }
    const handleLogin = () => {
        fetch("http://localhost:8080/login", {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                PassWord: password
            })
        })
        .then(res => res.json())
        .then(user => localStorage.setItem("info_user", JSON.stringify(user)))
        alert("Bạn đã đăng nhập thành công")
        window.location.replace('/account');
    }

    if((JSON.parse(localStorage.getItem('info_user')))){
        window.location.replace('/account');
    }

    return (
    <div className={styles.wrapper}>
        <ul className={styles.itemscope}>
            <li>
                <Link to="/">Trang chủ</Link>
            </li>
            <li>
                <Link to="/account">Tài khoản</Link>
            </li>
            <li>
                <Link to="/login">Đăng nhập</Link>
            </li>
        </ul>
        <div className='row'>
            <div className={`c-12 l-6 ${styles.header}`} >
                <h1 className={styles.headerContent}>Đăng nhập</h1>
            </div>
            <div className={`c-12 l-6 ${styles.form}`}>
                <input placeholder="Email" class="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Mật khẩu" class="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"></input>
                <div className={`row ${styles.submit}`}>
                    <button className={`c-4 ${styles.btnLogin}`} onClick={handleLogin}>Đăng nhập</button>
                    
                    <button className={`c-4 ${styles.btnLogin}`} onClick={handleRegister}>Đăng kí</button>
                </div>
            </div>
        </div>
    </div>);    
}

export default Login