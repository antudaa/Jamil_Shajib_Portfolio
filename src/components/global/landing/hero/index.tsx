'use client';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import parallaxBackground from "@/assets/images/Hero_Parallax_Img_6.png";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const direction = useRef(-1); // Use useRef for mutable variable
  const xPercent = useRef(0); // Use useRef for xPercent to preserve its value

  useLayoutEffect(() => {
    const initAnimation = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            direction.current = e.direction * -1; // Update direction via useRef
          },
        },
        x: "-1000px",
      });

      requestAnimationFrame(animate);
    };

    if (typeof window !== "undefined") {
      initAnimation();
    }
  }, []);

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });

    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current; // Use useRef values
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={`${styles.landing} top-0`}
    >
      <div
        className={`${styles.sectionbackground}`}
        style={{
          backgroundImage: `url(${parallaxBackground.src})`,
        }}
      >
        <div className={`${styles.sliderContainer} `}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>
              <span> </span> Jamil Shajib - Jamil Shajib -
            </p>
            <p ref={secondText}>Jamil Shajib - Jamil Shajib -</p>
          </div>
        </div>
        <div data-scroll data-scroll-speed={0.1} className={styles.description}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="black"
            />
          </svg>
          <p>Researcher</p>
          <p>Naval Architect</p>
        </div>
      </div>
    </motion.main>
  );
}
