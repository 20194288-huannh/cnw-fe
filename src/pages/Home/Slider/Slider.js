import styles from './slider.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Slider(){

    var sliderArray = [
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_4.jpg?v=5142"},
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_2.jpg?v=5142"},
        {path: "/", src: "https://theme.hstatic.net/200000000133/1000569834/14/slideshow_1.jpg?v=5142"}
    ]
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setIndex((index+1)%sliderArray.length);
        }, 5000);
    }, [index]);
    return (
        <div className={styles.imgSlider} >
            {               
                <Link to={sliderArray[index].path}>
                    <div className={styles.slide}>
                        <img src={sliderArray[index].src} alt="" />
                    </div>
                </Link>
            
            }
        </div>
    )
}

export default Slider;