'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { opacity, slideUp } from './anim';

const words = ["Hello", "I", "AM", "JAMIL", "SHAJIB", "WELCOME", "To My", "Portfolio"];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [showAnimation, setShowAnimation] = useState(true);
    const fullPathname = usePathname();
    const pathname = fullPathname.split('/')[1];

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Check localStorage for the flag
            const hasVisited = localStorage.getItem('hasVisited');
            if (hasVisited) {
                setShowAnimation(false);
            } else {
                localStorage.setItem('hasVisited', 'true');
            }
    
            // Set viewport dimensions
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        }
    }, []);

    useEffect(() => {
        // Skip word animation if not showing
        if (!showAnimation || index === words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index, showAnimation]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className={styles.introduction}
        >
            {dimension.width > 0 && (
                <>
                    {showAnimation ? (
                        // Show animation text
                        <>
                            <motion.p variants={opacity} initial="initial" animate="enter">
                                <span></span>
                                {words[index]}
                            </motion.p>
                            <svg>
                                <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                            </svg>
                        </>
                    ) : (
                        // Show pathname after animation or if skipped
                        <>
                            <motion.p
                                variants={opacity}
                                initial="initial"
                                animate="enter"
                                className={styles.pathname}
                            >
                                {pathname === "" ? "Home" : pathname.charAt(0).toUpperCase() + pathname.slice(1)} {/* Capitalize first letter */}
                            </motion.p>
                            <svg>
                                <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                            </svg>
                        </>
                    )}
                </>
            )}
        </motion.div>
    );
}
