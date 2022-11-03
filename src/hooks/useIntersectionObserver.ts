import { useEffect, useState } from 'react';

function useIntersectionObserver() {
    const [observer, setObserver] = useState<IntersectionObserver | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const newObserver = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 1,
            }
        );

        setObserver(newObserver);

        return () => observer?.disconnect();
    }, []);

    return { isIntersecting, observer };
}

export { useIntersectionObserver };
