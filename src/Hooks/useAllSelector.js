import { useEffect } from "react";

const useAllSelector = styleObject => {
    useEffect(() => {
        const all = document.querySelector("*").style;
        for (let [style, value] of Object.entries(styleObject)) {
            all[style] = value;
        }
    }, [styleObject]);
};

export default useAllSelector;
