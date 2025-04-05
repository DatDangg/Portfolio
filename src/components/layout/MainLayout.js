import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  const skyRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const sky = skyRef.current;

    function createStar() {
      if (!sky) return;
      sky.querySelectorAll(`.${styles.star}`).forEach((el) => el.remove());
      const width = document.body.scrollWidth;
      const height = document.body.scrollHeight;

      const star_count = Math.max((width + height)/9, 100);
      for (let i = 0; i < star_count; i++) {
        const star = document.createElement("div");
        star.className = styles.star;
        star.style.left = Math.floor(Math.random() * width) + "px";
        star.style.top = Math.floor(Math.random() * height) + "px";
        const duration = (Math.random() * 3 + 1).toFixed(1);
        star.style.animationDuration = `${duration}s`;
        sky.appendChild(star);
      }
    }

    function createFlashEffect(x, y) {
      const flash = document.createElement("div");
      flash.className = styles.flash;
      flash.style.left = `${x}px`;
      flash.style.top = `${y}px`;
      sky.appendChild(flash);

      setTimeout(() => {
        flash.remove();
      }, 500);
    }
    
    function creatShootstar() {
      const width = document.body.scrollWidth;
      const height = document.body.scrollHeight;

      const left = Math.floor(Math.random() * width);
      const top = Math.floor(Math.random() * (height / 2));
    
      const shootstar = document.createElement("div");
      shootstar.className = styles.shootstar;
      shootstar.style.left = `${left}px`;
      shootstar.style.top = `${top}px`;
    
      const distance = height/2;
      const angle = 145 * (Math.PI / 180);
      const dx = Math.cos(angle) * distance; 
      const dy = Math.sin(angle) * distance; 
    
      const animation = shootstar.animate(
        [
          { transform: `translate(0, 0) rotate(145deg)`, opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) rotate(145deg)`, opacity: 1 },
        ],
        {
          duration: 3000,
          easing: "linear",
          fill: "forwards",
        }
      );
      sky.appendChild(shootstar);

      animation.onfinish = () => {
        shootstar.remove();

        createFlashEffect(left + dx + 16, top + dy + 48);
      };
    }
    
    const interval = setInterval(() => {
      if (Math.random() < 0.4) {
        creatShootstar();
      }
    }, 2000);

    createStar();
    
    const resizeHandler = () => {
      createStar();
      creatShootstar();
    };
    
    window.addEventListener("resize", resizeHandler);

    resizeObserverRef.current = new ResizeObserver(() => {
      createStar();
    });

    resizeObserverRef.current.observe(document.body); // hoặc document.querySelector('#root')

    return () => {
      resizeObserverRef.current?.disconnect();
      clearInterval(interval);
    };
  }, [location]);

  return (
    <div>
      {children}
      <div className={styles.sky} ref={skyRef}>
      </div>
    </div>
  );
};

export default MainLayout;
