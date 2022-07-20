import styles from './News.module.css'
import {Link} from 'react-router-dom'

const News = () => {
    const a = ">>"
    return (
        <div className={styles.content}>
            <div className={styles.news}>
                <div className={styles.newsContent}>
                    <h2 className={styles.newContentTitle}>
                        <Link to="/" title="THE SYMPHONY OF ELITE">
                            TIN TỨC EVA DE EVA
                        </Link>
                        <p className={styles.newContentViewMore}>
                            <Link to="/" className="Xem tất cả">
                                Xem tất cả
                            </Link>
                        </p>
                    </h2>
                </div>
                <div className={`row ${styles.newAbout}`}>
                    <div className={`${styles.newsAbout1} col  m-6 c-12`}>
                        <div className={`${styles.newAboutImg} ${styles.bannerEffect}`}>
                            <Link to="/">
                                <img
                                    src="https://file.hstatic.net/200000000133/article/2.3_083fc647db40450dbc44b0593395b026_grande.png" alt="anh" />
                            </Link>
                        </div>
                        <div className={styles.newAboutContent}>
                            <div className={styles.newAboutContentTitle}>
                                <Link to="/">THE SYMPHONY OF ELITE - vol 1</Link>
                            </div>
                            <div className={styles.newAboutContentDes}>
                                <p>Được lấy cảm hứng từ họa tiết Paisley độc đáo và giai điệu ngọt ngào của mùa thu tái hiện
                                    lên
                                    bởi gam màu nâu vàng ấm nóng và những làn gió se lạnh khiến con người ta ngây ngất, chạm
                                    đến
                                    những cung bậc cảm xúc lắng đọng và...</p>
                            </div>
                            <Link to="/" className={styles.newAboutBtn}>
                                Xem thêm {a}
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.newsAbout1} col m-6 c-12 `}>
                        <div className={`${styles.newAboutImg} ${styles.bannerEffect}`}>
                            <Link to="/">
                                <img
                                    src="https://file.hstatic.net/200000000133/article/bia_2.3_4e67e19247114750a6d55fdc615d8f38_grande.jpg" alt="anh" />
                            </Link>
                        </div>
                        <div className={styles.newAboutContent}>
                            <div className={styles.newAboutContentTitle}>
                                <Link to="/">Back to Rusticity - Summer 2021 Campaign</Link>
                            </div>
                            <div className={styles.newAboutContentDes}>
                                <p>Giữa vô vàn những hào nhoáng, những tất bật và căng thẳng, ta tìm về những giá trị bình
                                    dị, để tâm hồn ta trầm lắng lại, để thư thái và yêu chiều bản thân hơn.BST tiếp nối của
                                    tháng 7 ”Back to Rusticity – Trở về những giá trị...</p>
                            </div>
                            <Link to="/" className={styles.newAboutBtn}>
                                Xem thêm {a}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News