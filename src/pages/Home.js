import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Home.module.css'
import bannerImg from '../assets/image/banner-img.png'

function TypeWriter({text}) {
    const [char, setChar] = useState([])
    useEffect(()=>{
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve,ms))
        }

        async function type(){
            for (let i = 0; i < text.length; i++) {
                setChar((prev) => [...prev, text[i]]);
                await sleep(200);
              }
        
              await sleep(1000);
        
              for (let i = text.length - 1; i >= 0; i--) {
                setChar((prev) => prev.slice(0, i));
                await sleep(200);
              }
        }
        type()
    },[])
    console.log(text)
    return (
        <span>
            {char}
            <span className={styles.cursor}>|</span>
        </span>
    );
}

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 '>
                            <div className={styles.bannerInfor}>
                                <div className={styles.heading}>Hi There!</div>
                                <div className={styles.headingName}>I'm <span>Dang Dat</span></div>
                                <div className={styles.typeWriter}>
                                    <TypeWriter text='Front End Developer'/>
                                    {/* Front End Developer */}
                                </div>
                                
                            </div>
                        </div>      
                        <div className='col-lg-5'>
                            <img className={styles.bannerImg} src={bannerImg} alt='Banner Image'></img>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home