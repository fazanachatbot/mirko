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
                /* napravi neku petlju i jedan ogroman objekt koji ima strukturu stabla i klasificiran je po intentovima,
                   npr. {
                       where_is_x: {
                           food: {
                               grill: '',
                               seafood: '',
                               pizza: '',
                               ...
                           }
                           landmark: {
                               tourist office: '',
                               ...
                           }
                       },
                       is_there_x: {
                           food: {
                               grill: '',
                               seafood: '',
                               ...
                           },
                           ...
                       },
                       ...
                    }, koji sadrzi sve odgovore tako da mogu look upat intent i iz vrijednosti koju ima matchati unutar objekta
                */ 
                if('greetings' in res.entities) {
                    msg = 'Why hello there!';
                } else if ('intent' in res.entities) {
                    if ('food' in res.entities) {
                        if (res.entities.food[0].value === 'grill') msg = 'You can find delicious steaks at restaurant Feral'
                    } else {
                        msg = 'Some other message'
                    }
                } else {
                    msg = `I'm sorry I didn't quite get you, could you paraphrase that for me?`
                }

                setMessages(previous => [...previous, {text: msg, user: false}]);
            })
            .catch(() => setMessages(previous => [...previous, {text: 'I\'m sorry, something went terribly wrong.. Please repeat yourself', user: false}]));

        setInput('');
        document.querySelector('#chat').scrollTo(0, document.querySelector('#chat').scrollHeight)
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
