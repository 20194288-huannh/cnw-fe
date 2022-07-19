import styles from './IntroEliteProduct.module.css'
import { Link } from "react-router-dom"
const IntroEliteProduct = () => {
    return (
        <div>
            <div className={`row ${styles.introEliteProduct}`}>
                <div className={`l-6 c-12`}>
                    <Link to="/" title="THE SYMPHONY OF ELITE">
                        <img src="https://theme.hstatic.net/200000000133/1000569834/14/home_aboutus.jpg?v=5160"
                            className={styles.newProductImg} alt="" />
                    </Link>
                </div>
                <div className={`l-6 c-12 ${styles.introEliteProductAbout}`}>
                    <div className={styles.introEliteProductTitle}>
                        <Link to="/">
                            <h2>THE SYMPHONY OF ELITE VOL 2</h2>
                        </Link>
                    </div>
                    <div className={styles.introEliteProductContent}>
                        <p>THE SYMPHONY OF ELITE VOL 2 Tiếp nối bản hòa tấu của sự tinh tế giữa tháng 10, Vol.2 sẽ là mảnh
                            ghép hoàn chỉnh của BST The Symphony of Elite tái hiện qua những gam màu nâu cháy đỏ. Nếu như
                            Vol.1 là sự điểm xuyết của hoạ tiết Paisley nhằm tôn lên tính thanh lịch, tinh tế thì Vol.2 hoạ
                            tiết Paisley được mở rộng, tràn ngập trên bề mặt vải, kết hợp màu sắc nổi bật và form dáng thời
                            thượng. Tất cả tạo nên một tổng hoà sang trọng và cuốn hút. BST Vol.2 hứa hẹn sẽ đem đến cho
                            nàng một “bản phối” tinh tế, là điểm nhấn không thể thiếu trong tủ đồ của nàng dịp lễ hội cuối
                            năm.</p>
                    </div>
                    <div className={styles.introEliteProductLearnMore}>
                        <Link to="/">
                            <p className={styles.introEliteProductLearnMoreContent}>Tìm hiểu thêm</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroEliteProduct