'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { SectionHeader } from '../../header/SectionHeader';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export const Overview = () => {
    const [activeCard, setActiveCard] = useState<number>(1);

    const cards = [
        {
            id: 1,
            title: "EDUCATION",
            sidetitle: "INFO",
            text: "I am jamil shajib a naval architect. I am passionate to my work.",
            buttonText: "VIEW DETAILS",
            image: "https://c4.wallpaperflare.com/wallpaper/563/442/357/thomas-shelby-peaky-blinders-portrait-cinematic-hd-wallpaper-preview.jpg",
        },
        {
            id: 2,
            title: "WORK",
            sidetitle: "EXPERIENCE",
            text: "I am jamil shajib a naval architect. I am passionate to my work.",
            buttonText: "VIEW MORE",
            image: "https://c4.wallpaperflare.com/wallpaper/563/442/357/thomas-shelby-peaky-blinders-portrait-cinematic-hd-wallpaper-preview.jpg",
        },
        {
            id: 3,
            title: "SOCIAL",
            sidetitle: "WORK",
            text: "I am jamil shajib a naval architect. I am passionate to my work.",
            buttonText: "VIEW MORE",
            image: "https://c4.wallpaperflare.com/wallpaper/563/442/357/thomas-shelby-peaky-blinders-portrait-cinematic-hd-wallpaper-preview.jpg",
        },
        {
            id: 4,
            title: "TRAVEL",
            sidetitle: "BLOGS",
            text: "I am jamil shajib a naval architect. I am passionate to my work.",
            buttonText: "SEE BLOGS",
            image: "https://c4.wallpaperflare.com/wallpaper/563/442/357/thomas-shelby-peaky-blinders-portrait-cinematic-hd-wallpaper-preview.jpg",
        },
        {
            id: 5,
            title: "BOOK",
            sidetitle: "REVIEWS",
            text: "I am jamil shajib a naval architect. I am passionate to my work.",
            buttonText: "SEE REVIEWS",
            image: "https://c4.wallpaperflare.com/wallpaper/563/442/357/thomas-shelby-peaky-blinders-portrait-cinematic-hd-wallpaper-preview.jpg",
        },
    ];

    const handleMouseEnter = (id: number) => {
        setActiveCard(id);
    };

    const handleMouseLeave = () => {
        setActiveCard(1);
    };

    return (
        <section className='min-h-screen mx-auto py-16'>
            <SectionHeader
                eyebrow="Overview Section"
                title="What Clients Say about Me"
                description="Don't just take my word for it. See what my clients have to say about my work."
            />
            <div className={styles.cardContainer}>
                {cards.map((card) => (
                    <figure
                        key={card.id}
                        className={`${styles.snip1392} ${activeCard === card.id ? styles.active : styles.inactive
                            }`}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={800}
                            layout="responsive"
                        />
                        <figcaption className={styles.cardText}>
                            <div className='flex gap-2'>
                                <span className='font-semibold'>{card.title}</span>
                                <span>{card.sidetitle}</span>
                            </div>
                            <span className='block text-sm text-start'>{card.text}</span>
                            <Link className='text-xs text-start mt-4 hover:text-indigo-500 flex gap-2' href={``}>
                                {card.buttonText}
                                <FaArrowRight className='my-auto' />
                            </Link>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};