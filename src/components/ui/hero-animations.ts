
export const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.15 + i * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};
