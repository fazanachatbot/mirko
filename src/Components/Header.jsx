import React from 'react'

const Header = ({showFeedback, showAuthor}) => {
    return (
        <header id='header'>
            <span id='heading'>Mirko</span>
            <span id='buttons'>
                <button id='author' onClick={showAuthor}>Author</button>
            </span>
        </header>
    )
}

export default Header;