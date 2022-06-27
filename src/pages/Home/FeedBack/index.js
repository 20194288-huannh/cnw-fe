import styles from './FeedBack.module.css'
import { useEffect, useState } from "react"

const FeedBack = () => {
    const feedback = [
        {comment: "Các thiết kế của EDE luôn luôn thay đổi và mang đến những bất ngờ!",
        src: "https://theme.hstatic.net/200000000133/1000569834/14/avt_homeCustomer_1.jpg?v=5160",
        name: "Hoa Hậu Hương Giang",
        job: "Ca sĩ/ Người mẫu"},

        {comment: "Châu nghĩ một cô gái 21 tuổi với phong cách cá tính như mình có thể tự tin diện những trang phục của EDE thì ai cũng có thể!",
        src: "https://theme.hstatic.net/200000000133/1000569834/14/avt_homeCustomer_3.jpg?v=5160",
        name: "Châu Bùi",
        job: "Hotgirl/ Người mẫu ảnh"},

        {comment: "Vô cùng ngạc nhiên vì những bước chuyển mình trong thiết kế của EDE, ngày càng trẻ trung, bắt mắt! Lý Nhã Kỳ cảm thấy rất tự tin khi khoác lên mình trang phục EDE!",
        src: "https://theme.hstatic.net/200000000133/1000569834/14/avt_homeCustomer_2.jpg?v=5160",
        name: "Lý Nhã Kỳ",
        job: "Người mẫu/ Diễn viên"},

        {comment: "EDE đã có bước chuyển mình rất lớn để mang lại những thiết kế thời trang hơn, trẻ trung hơn mà không kém phần nữ tính, mang đến nhiều lựa chọn hơn cho phụ nữ Việt!",
        src: "https://theme.hstatic.net/200000000133/1000569834/14/avt_homeCustomer_4.jpg?v=5160",
        name: "Nguyễn Thu Quỳnh",
        job: "Diễn viên"}

    ]
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            setIndex((index+1)%feedback.length);
        }, 5000)               
    },[index])
    return (
        <div className={styles.wrapper}>
             <div className={styles.feedback}>
                <div className={styles.feedbackContent}>
                    <div className={styles.feedbackTitle}>
                        <h2 className={styles.headingTitle}>SAO VIỆT NÓI GÌ VỀ EVA DE EVA</h2>
                    </div>
                    <div className={styles.feedbackSlider}>
                        <div className={styles.feedbackItem}>
                            <div className={styles.feedbackComment}>
                                <p>{feedback[index].comment}</p>
                            </div>
                            <div className={styles.feedbackActor}>
                                <div className={styles.feedbackActorImg}>
                                    <img
                                        src={feedback[index].src} alt="anh" />
                                </div>
                                <div className={styles.feedbackActorInfo}>
                                    <div className={styles.feedbackActorInfoName}>
                                        <p>{feedback[index].name}</p>
                                    </div>
                                    <div className={styles.feedbackActorInfoJob}>
                                        <p>{feedback[index].job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack