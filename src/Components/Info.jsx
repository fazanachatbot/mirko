import React from 'react'
import istra from '../Images/istra.png'
import Emoji from './Emoji'

const Info = () => {
    return (
        <main id='info-area'>
            <div id='info-wrapper'>
                <div id='info'>
                    <h1>About Mirko</h1>
                    <p>
                        Have you ever kept a brochure? <Emoji label='thinking emoji' symbol='🤔'/> If so, how many do you remember throwing away? With the advent of wifi being available everywhere and with the goal of going green <Emoji label='recycling emoji' symbol='♻'/> Mirko was born! No more pamphlets, prospects, catalogs, i.e. paper waste! With Mirko the answers all lie at a hands reach <Emoji label='hands emoji' symbol='🤲' />.
                    </p>
                    <img id='istra' src={istra} alt='Istra logo'/>
                </div>
            </div>
        </main>
    )
}

export default Info;
