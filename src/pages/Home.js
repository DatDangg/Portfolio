import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Home.module.css';
import bannerImg from '../assets/image/banner-img.png';

function TypeWriter({ texts }) {
    const [char, setChar] = useState([]);
    let count = 0


    useEffect(() => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        async function typeLoop() {
            while (true) {
                const currentText = texts[count];
                
                for (let i = 0; i < currentText.length; i++) {
                    setChar((prev) => [...prev, currentText[i]]);
                    await sleep(150);
                }

                await sleep(1000);

                for (let i = currentText.length; i >= 0; i--) {
                    setChar((prev) => prev.slice(0, i));
                    await sleep(100);
                }

                count ++
                if (count == texts.length) count = 0 
                await sleep(500);
            }
        }
        typeLoop();
    }, []);

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
                        <div className='col-lg-7'>
                            <div className={styles.bannerInfor}>
                                <div className={styles.heading}>Hi There!</div>
                                <div className={styles.headingName}>I'm <span>Dang Dat</span></div>
                                <div className={styles.typeWriter}>
                                    <TypeWriter texts={['Front End Developer']} />
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
    );
}

export default Home;
