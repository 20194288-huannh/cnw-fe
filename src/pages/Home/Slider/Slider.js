import styles from './slider.module.css'
import { Link } from 'react-router-dom';
function Slider(){
    var sliderArray = [
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_4.jpg?v=5142"},
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_2.jpg?v=5142"},
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_1.jpg?v=5142"}
    ]
    return (
        <div className={styles.imgSlider} >
            {
                sliderArray.map(({path, src}) =>(
                    <Link to={path}>
                        <div className={styles.slide}>
                            <img src={src} alt="" />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Slider;