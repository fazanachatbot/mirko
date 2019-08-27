import { useEffect } from "react";

const useGlobalStyle = styleObject => {
    useEffect(() => {
        if (typeof window === "object") {
            const globalStyle = document.body.style;
            for (let [style, value] of Object.entries(styleObject)) {
                globalStyle[style] = value;
            }
        }
    }, [styleObject]);
};

export default useGlobalStyle;
