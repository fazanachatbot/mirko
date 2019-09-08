import React from 'react'

import useModal from '../Hooks/useModal';

import AuthorInfo from './AuthorInfo';
import Chat from './Chat';
import Header from './Header';
import Info from './Info';
import Main from './Main';
import Modal from './Modal';

const App = () => {
    const [authorModalShowing, toggleAuthorModal] = useModal();
    return (
        <>
            <Header 
                showAuthor={toggleAuthorModal}
            />
            <Main>
                <Chat />
                <Info />
            </Main>
            <Modal
                isShowing={authorModalShowing}
                hide={toggleAuthorModal}
            >
                <AuthorInfo />
            </Modal>
        </>
    );
}

export default App;
