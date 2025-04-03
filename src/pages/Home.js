import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import bannerImg from "../assets/image/banner-img.png";

function TypeWriter({ texts }) {
    const [char, setChar] = useState([]);

    useEffect(() => {
        let count = 0;
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

                count++;
                if (count === texts.length) count = 0;
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className={styles.bannerInfor}>
                                <div className={styles.heading}>Hi There!</div>
                                <div className={styles.headingName}>
                                    I'm <span>Dang Dat</span>
                                </div>
                                <div className={styles.typeWriter}>
                                    <TypeWriter texts={["Front End Developer"]} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img
                                className={styles.bannerImg}
                                src={bannerImg}
                                alt="Banner Image"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={styles.aboutText}>
                                <div className={styles.aboutTitle}>
                                    Let me <span>introduce</span> my self
                                </div>
                                <div className={styles.aboutDesc}>
                                    <p>
                                        I am a{" "}
                                        <span className={styles.italic}>front-end developer</span>{" "}
                                        and currently a university student with a strong passion for
                                        programming and web development.
                                    </p>
                                    <p>
                                        I have been learning and building with{" "}
                                        <span className={styles.italic}>ReactJS</span> — focusing on{" "}
                                        <span className={styles.italic}>
                                            creating responsive, user-friendly interfaces.
                                        </span>
                                    </p>
                                    <p>
                                        I enjoy turning{" "}
                                        <span className={styles.italic}>
                                            ideas into real web applications
                                        </span>{" "}
                                        and continuously improving my skills through practice and
                                        projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img
                                className={styles.bannerImg}
                                src={bannerImg}
                                alt="Banner Image"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.connect}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.connectTitle}>Find me on</div>
                            <div className={styles.connectDesc}>
                                Feel free to <span>connect</span> with me
                            </div>
                            <div className={styles.connectIcon}>
                                <div className={styles.socialIcon}>
                                    <a href="https://github.com/DatDangg" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className={styles.socialIcon}>
                                    <a href="http://www.linkedin.com/in/datdangg" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                        <svg
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className={styles.socialIcon}>
                                    <a href="https://www.instagram.com/alpenliebe.2011/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
