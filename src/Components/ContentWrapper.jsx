import React from 'react'

const ContentWrapper = ({children}) => {
    return (
        <div className='content-wrapper'>
            <div className='content-plate'>
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper;