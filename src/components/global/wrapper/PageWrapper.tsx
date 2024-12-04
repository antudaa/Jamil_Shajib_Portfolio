'use client';
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/global/preloader";

const PageWrapper = ({ loadingTime }: { loadingTime: number }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, loadingTime);
        }
    }, [loadingTime]);

    return (
        <AnimatePresence mode='wait'>
            {isLoading && <Preloader />}
        </AnimatePresence>
    );
};

export default PageWrapper;