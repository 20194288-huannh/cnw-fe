import styles from "./NavUser.module.css"
import { Link } from "react-router-dom"
const NavUser = () => {
    return (
        <div>
            <div className={styles.user}>
                <ol className={styles.userNav}>
                    <li>
                        <Link to ="/">Trang chủ</Link>
                    </li>
                    <li className={styles.userAccount}>
                        <Link to ="/account">Tài khoản</Link>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default NavUser