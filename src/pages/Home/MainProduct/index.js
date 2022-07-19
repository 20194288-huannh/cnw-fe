import styles from './mainProduct.module.css';
const MainProduct = () => {
    return (
        <div>
            <div className={styles.mainProduct}>
                <div className="row">
                    <div className={`l-4 c-12 ${styles.mainProductContent} ${styles.mainProductDown} ${styles.animateBanner}`}>
                        <a href="/">
                            <img  alt="anh" src="https://theme.hstatic.net/200000000133/1000569834/14/home3banner_1.jpg?v=5150"
                                className={styles.mainProductImg} />
                        </a>
                    </div>
                    <div className={`l-4 c-12 ${styles.mainProductContent} ${styles.animateBanner}`}>
                        <a href="/">
                            <img alt="anh" src="https://theme.hstatic.net/200000000133/1000569834/14/home3banner_2.jpg?v=5150"
                                className={styles.mainProductImg} />
                        </a>
                    </div>
                    <div className={`l-4 c-12 ${styles.mainProductContent} ${styles.mainProductDown} ${styles.animateBanner}`}>
                        <a href="/">
                            <img alt="anh" src="https://theme.hstatic.net/200000000133/1000569834/14/home3banner_3.jpg?v=5150"
                                className={styles.mainProductImg} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProduct