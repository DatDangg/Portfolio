import styles from "./Project.module.css";
import projectImage from "../assets/image/prj-img.png";
import projectImage1 from "../assets/image/prj-img1.png";

function Project() {
    return (
        <div className={styles.projects}>
            <div className="container">
                <div className={`row ${styles.projectsTitle}`}>
                    <div className="col-lg-12">
                        <div className={styles.projectsHeading}>
                            My Recent <span>Projects</span>
                        </div>
                        <div className={styles.projectsDesc}>
                            Here are a few projects I've worked on recently
                        </div>
                    </div>
                </div>
                <div className={`row ${styles.projectList}`}>
                    <div className={`col-lg-4 ${styles.projectItem}`}>
                        <div className={styles.wrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectImage}
                                alt="Project Image"
                            ></img>
                            <div className={styles.projectInfor}>
                                <div className={styles.headerInfor}>Florist</div>
                                <div className={styles.descInfor}>
                                    A clean and elegant flower shop website template perfect for showcasing bouquets and floral arrangements.
                                </div>
                                <a
                                    href="https://datdangg.github.io/florist/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.buttonInfor}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor" ></path>
                                        <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor" ></path>
                                        <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor" ></path>
                                        <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor" ></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" ></path>
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4 ${styles.projectItem}`}>
                        <div className={styles.wrapper}>
                            <img
                                className={styles.projectImg}
                                src={projectImage1}
                                alt="Project Image"
                            ></img>
                            <div className={styles.projectInfor}>
                                <div className={styles.headerInfor}>Music Player</div>
                                <div className={styles.descInfor}>
                                    A sleek and modern music player website template for streaming and managing your favorite tracks.
                                </div>
                                <a
                                    href="https://datdangg.github.io/MusicPlayer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.buttonInfor}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor" ></path>
                                        <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor" ></path>
                                        <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor" ></path>
                                        <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor" ></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" ></path>
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
