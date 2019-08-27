import { useState, useEffect, useCallback } from "react";

function useWindowWidth() {
    const isClient = typeof window === "object";

    const getWidth = useCallback(() => {
        return isClient ? window.innerWidth : undefined;
    }, [isClient]);

    const [windowWidth, setWindowWidth] = useState(getWidth);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowWidth(getWidth());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [getWidth, isClient]);

    return windowWidth;
}

export default useWindowWidth;
