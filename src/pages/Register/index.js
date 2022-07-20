import styles from './Register.module.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Register(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleRegister = () => {
        if(password !== passwordConfirm){
            alert('Sai mật khẩu xác nhận, vui lòng nhập lại mật khẩu xác nhận!')
            return;
        }
        fetch("http://localhost:8080/register", {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                PassWord: password,
                Name: name,
                PhoneNumber: phone,
                Address: address
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        alert("Bạn đã đăng kí thành công")
        window.location.replace('/login');
        
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
                <Link to="/register">Đăng kí</Link>
            </li>
        </ul>
        <div className='row'>
            <div className={`c-12 l-6 ${styles.header}`} >
                <h1 className={styles.headerContent}>Đăng kí</h1>
            </div>
            <div className={`c-12 l-6 ${styles.form}`}>
                <input placeholder="Email" class="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Mật khẩu" class="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <input placeholder="Xác nhận mật khẩu" class="password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} type="password"/>
                <input placeholder="Tên" class="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input placeholder="Số điện thoại" class="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input placeholder="Địa chỉ" class="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <div className={`row ${styles.submit}`}>
                    <button className={`c-4 ${styles.btnRegister}`} onClick={handleRegister}>Đăng kí</button>
                </div>
            </div>
        </div>
    </div>);    
}

export default Register