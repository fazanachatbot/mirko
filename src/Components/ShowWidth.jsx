import React from "react";

const ShowWidth = ({ width }) => {
    return (
        <footer
            style={{
                position: "fixed",
                bottom: 0,
            }}
        >
            <span>Window width: {width}px</span>
        </footer>
    );
};

export default ShowWidth;
