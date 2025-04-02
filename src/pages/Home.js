import styles from './Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 '>
                            <div className={styles.bannerInfor}>
                                <div className={styles.heading}>Hi There!</div>
                                <div className={styles.headingName}>I'm Dang Dat</div>
                                <div className={styles.typeWriter}>Front End Developer</div>
                            </div>
                        </div>      
                        <div></div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home