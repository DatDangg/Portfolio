import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const navList = document.querySelector(`.${styles.nav_list}`);
    const navItems = document.querySelectorAll(`.${styles.nav_item}`);
    const gitBtn = document.querySelector(`.${styles.github_button}`);
    const navToggle = document.querySelector(`.${styles.navbarToggler}`);
    const header = document.querySelector(`.${styles.header}`);
  
    const handleToggle = () => {
      navList.classList.toggle(styles.show);
      header.classList.toggle(styles.active);
    };
  
    const handleCloseMenu = () => {
      header.classList.remove(styles.active);
      navList.classList.remove(styles.show);
    };

    const clickableElements = [...navItems, gitBtn];
  
    navToggle.addEventListener("click", handleToggle);
    clickableElements.forEach((el) => el.addEventListener("click", handleCloseMenu));
  
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggle.removeEventListener("click", handleToggle);
      clickableElements.forEach((el) => el.removeEventListener("click", handleCloseMenu));
    };
  }, []);  

  return (
    <div className={`${styles.header} ${scrolled ? `${styles.scroll}` : ''}`}>
      <div className="container">
        <div className="row">
          <div className={`col-4 ${styles.logo}`}>
            <Link to="/">LAY</Link>
          </div>
          <div className={`col-8 ${styles.navbarToggler}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
          <div className={`col-md-8 ${styles.nav}`}>
            <ul className={styles.nav_list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item} ${styles.active}`
                      : `${styles.nav_item}`
                  }
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                    ></path>
                  </svg>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item} ${styles.active}`
                      : `${styles.nav_item}`
                  }
                >
                  {" "}
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                    ></path>
                  </svg>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item} ${styles.active}`
                      : `${styles.nav_item}`
                  }
                >
                  {" "}
                  <svg
                    t="1569683753031"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path
                      fill="currentColor"
                      d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"
                    ></path>
                  </svg>
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item} ${styles.active}`
                      : `${styles.nav_item}`
                  }
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
                    <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
                    <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
                    <path
                      d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Resume
                </NavLink>
              </li>
              <li>
                <a
                  className={styles.github_button}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/DatDangg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                    ></path>
                  </svg>
                </a>               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
