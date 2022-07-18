import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Modal from 'react-modal'

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
function Login(){

    const [showModalSignup, setShowModalSignup] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [user, setUser] = useState([]);
    const handleClickUpload = () => {

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
        //window.location.replace('/')
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
                <Link to="/account/login">Đăng nhập</Link>
            </li>
        </ul>
        <div className='row'>
            <div className={`c-6 ${styles.header}`} >
                <h1 className={styles.headerContent}>Đăng nhập</h1>
            </div>
            <div className={`c-6 ${styles.form}`}>
                <input placeholder="Email" class="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Mật khẩu" class="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <div className={`row ${styles.submit}`}>
                    <button className={`c-4 ${styles.btnLogin}`} onClick={handleLogin}>Đăng nhập</button>
                    <div className={`c-4 ${styles.more}`}>
                        <Link to="/">Quên mật khẩu ?</Link>
                        <span> hoặc</span> <button onClick={() => setShowModalSignup(true)}> Đăng kí</button>
                    </div>
                    <Modal 
                        isOpen={showModalSignup}
                        style={customStyles}
                        ariaHideApp={false}
                        >
                        <div>
                            <h1>Đăng kí tài khoản</h1>
                            <form onSubmit={(e) => handleClickUpload(e)}>
                                <div className={styles.field_info}><label htmlFor="name" className={styles.labelData}>Tên đăng nhập</label><input value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    name="name" id="name" type="text" required className={styles.form_control}/>
                                </div>
                                <div className={styles.field_info}><label htmlFor="name" className={styles.labelData}>Mật khẩu</label><input value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    name="name" id="name" type="text" required className={styles.form_control}/>
                                </div>
                            </form>
                        </div>
                        </Modal>
                </div>
            </div>
        </div>
    </div>);    
}

export default Login