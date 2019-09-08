import React from 'react'
import github from '../Images/github_icon.png';
import Emoji from './Emoji'

const AuthorInfo = () => {
    return (
        <>
            <h1>
                About the author
            </h1>
            <p>
                Hi my name is Matej! I studied at the Faculty of Humanities and Social Sciences untill recently. These days I code <Emoji label='computer' symbol='💻'/> a lot, cook <Emoji label='pot with food' symbol='🍲'/>, work out <Emoji label='weightlifter' symbol='🏋'/> and take care of plants <Emoji label='sunflower' symbol='🌻'/>. If you like this project check out my github below <Emoji label='down arrow' symbol='⬇'/>.
            </p>
            <a href='https://github.com/voiys' title='Github profile' target='_blank' rel='noopener noreferrer'><img src={github} alt='Github logo' /></a>
        </>
    )
}

export default AuthorInfo;
