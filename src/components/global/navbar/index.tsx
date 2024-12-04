'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import styles from './style.module.scss';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Phone } from 'lucide-react';

const Navbar = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > window.innerHeight * 1) {
                setIsVisible(currentScroll < lastScroll); // Show/hide navbar
            } else {
                setIsVisible(true); // Always show navbar at the top of the page
            }

            setIsScrolled(currentScroll > window.innerHeight * 0.01); // Check scroll position
            setLastScroll(currentScroll);
        };

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [lastScroll]);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 z-50 w-full transform transition-transform duration-500 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div
                className={`mx-auto flex h-16 items-center justify-between px-4 md:px-6 transition-all duration-500 ${
                    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className={styles.header}>
                    <Link href={`/`} className={styles.logo}>
                        <p className={`${styles.copyright} text-lg`}>©</p>
                        <div className={`${styles.name} text-lg`}>
                            <p className={styles.codeBy}>👋Hi I am</p>
                            <p className={styles.dennis}>Jamil Shajib</p>
                            <p className={styles.snellenberg}>Developed By Antu Das</p>
                        </div>
                    </Link>
                </div>
                <nav className="hidden items-center gap-6 text-md font-medium lg:flex">
                    <Link href="/" className="text-gray-700 hover:text-gray-900" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-gray-900" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-gray-900" prefetch={false}>
                        Services
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-gray-900" prefetch={false}>
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-2 text-md font-medium md:flex cursor-pointer">
                        <Phone className="h-5 w-5 text-gray-700" />
                        <span className="text-gray-700">123-456-7890</span>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
                                <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="lg:hidden">
                            <div className="grid gap-4 p-4">
                                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" prefetch={false}>
                                    Home
                                </Link>
                                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" prefetch={false}>
                                    About
                                </Link>
                                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" prefetch={false}>
                                    Services
                                </Link>
                                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900" prefetch={false}>
                                    Contact
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
