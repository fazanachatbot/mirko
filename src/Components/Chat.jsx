import React, {useState} from 'react'
import {Wit, log} from 'node-wit'

const client = new Wit({
    accessToken: 'BCBOT3Y7PRJ2YGTE6HKJVGGXHNCAEHDI',
    logger: new log.Logger(log.DEBUG)
})

const Chat = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            text: 'Hi! How can I help you?',
            user: false,
        },
    ]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages(previous => [...previous, {text: input, user: true}]);
        client.message(input, {})
            .then(res => {
                let msg;

                if('greetings' in res.entities) {
                    msg = 'Why hello there!';
                } else if ('') {
                    msg = 'Some other message'
                } else {
                    msg = `I'm sorry I didn't quite get you, could you paraphrase that for me?`
                }

                setMessages(previous => [...previous, {text: msg, user: false}]);
            })
            .catch(() => setMessages(previous => [...previous, {text: 'I\'m sorry, something went terribly wrong.. Please repeat yourself', user: false}]));

        setInput('');
    }

    return (
        <aside id='chat-area'>
            <div id='chat-wrapper'>
                <div id='chat'>
                    {messages.map((message, index) => <div key={index} className={`message ${message.user ? 'message-user' : 'message-bot'}`}>{message.text}</div>)}
                </div>
                <form id='chat-form' onSubmit={handleSubmit}>
                    <input type='text' value={input} placeholder='Ask me something :)' onChange={handleChange}/>
                    <button type='submit'>Send</button>
                    {/* {runSample().then(res => res)} */}
                </form>
            </div>
        </aside>
    )
}

export default Chat