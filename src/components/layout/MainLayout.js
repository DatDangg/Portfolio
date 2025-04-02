import { useEffect, useRef } from "react";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  const skyRef = useRef(null);

  useEffect(() => {
    const sky = skyRef.current;

    function createStar() {
      if (!sky) return;
      sky.innerHTML = "";
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
    
    
      // Tính delta theo góc 135 độ
      const distance = height/2;
      const angle = 135 * (Math.PI / 180);
      const dx = Math.cos(angle) * distance; // x: bay trái
      const dy = Math.sin(angle) * distance; // y: bay xuống
    
      const animation = shootstar.animate(
        [
          { transform: `translate(0, 0) rotate(135deg)`, opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) rotate(135deg)`, opacity: 1 },
        ],
        {
          duration: 2000,
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
    

    createStar();
    const resizeHandler = () => {
      createStar();
      creatShootstar();
    };
    
    const interval = setInterval(() => {
      if (Math.random() < 0.4) {
        creatShootstar();
      }
    }, 4000);

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {children}
      <div className={styles.sky} ref={skyRef}>
      </div>
    </div>
  );
};

export default MainLayout;
