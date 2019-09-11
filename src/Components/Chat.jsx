import React, { useState } from 'react'
import { Wit } from 'node-wit'

const client = new Wit({
    accessToken: 'BCBOT3Y7PRJ2YGTE6HKJVGGXHNCAEHDI',
})

const selectRandomMessage = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

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
                    const greetings = ['Why hello there!', 'Hiya!', 'Hello to you too']
                    msg = selectRandomMessage(greetings);
                } else if (!('greetings' in res.entities) && 'intent' in res.entities && Object.entries(res.entities).length === 2) {
                    const entries = Object.entries(res.entities);
                    let keywordEntity;
                    for (let entity of entries) {
                        if (entity[0] !== 'intent') {
                            keywordEntity = entity[0];
                        }
                    }
                    const {value: keywordValue} = res.entities[keywordEntity][0];
                    const {value: intentValue} = res.entities.intent[0];
                    switch(intentValue) {
                        // RESPONSE FORMAT -> VRATIS OVAJ PRETHODNI OBJEKT ALI IMA SADA DATE N SHIT

                        case 'get_happening':
                            msg = `Happening not implemented yet`;
                            break;
                        case 'history_of_landmark':
                            switch(keywordValue) {
                                case 'brijuni':
                                    msg = `Brijuni National Park is an oasis of the magnificent harmony between man, animal and plant life. There are almost 700 plant species and about 250 bird species on the islands, whereas the mild Mediterranean climate makes it a pleasant health resort. After leaving Fažana, the line of green islands viewed from the boat, transforms into Veliki Brijun, the largest of the 14 islands.The traces of dinosaurs, remains of Antiquity and later periods, achievements of modern times are all present in this area, whose development as an exclusive resort starts in 1893 thanks to the “old Austrian”, the industrialist Paul Kupelwieser, owner of the Brijuni Islands. This fashionable seaside resort and one of the leading health resorts started developing and gaining popularity all over Europe and worldwide, but this unfortunately ended with the beginning of World War I.From then on Brijuni were mostly known for the political activities of Marshal Josip Broz Tito, the president of former Yugoslavia, who arrived on Brijuni for the first time in 1947. `
                                    break;
                                case 'church':
                                    msg = `An aisleless Gothic edifice that later gained elements of the Baroque style and has a rectangular presbytery and vestry. Its facade has a preserved Gothic portal in whose lunette; in a high relief stand the church titularies. It was built in the late Gothic style of the 15th century, while two spolia from the 8th century on the outer wall probably belong to the earlier phase of construction of the church. Beside the church stands a detached belfry mullioned at the top with two openings and ending in a pyramid. The interior of the church is furnished with five marble altars with wooden retables. The northern church wall holds a painting representing The Last Supper made in 1598 by the well-known painter from Zadar, Zorzi Ventura. The main altar too, holds a fine painting depicting Resurrected Christ with Saints, oil on canvas bearing all the features of the Venetian painter Leonardo Corone, painted around 1590. The walls of the vestry still bear traces of frescoes probably made by masters from Friuli in the 16th century.`
                                    break;
                                case 'tourist office':
                                default:
                                    msg = 'I know no history about this place...'
                            }
                            break;
                        case 'where_is_x':
                            switch(keywordValue) {
                                // food
                                case 'desert':
                                    msg = ``;
                                    break;
                                case 'local cuisine':
                                    msg = ``;
                                    break;
                                case 'fast food':
                                    msg = ``;
                                    break;
                                case 'pizza':
                                    msg = ``;
                                    break;
                                case 'grill':
                                    msg = ``;
                                    break;
                                case 'pasta':
                                    msg = ``;
                                    break;
                                case 'seafood':
                                    msg = ``;
                                    break;
                                //drink
                                case 'tea':
                                    msg = ``;
                                    break;
                                case 'water':
                                    msg = ``;
                                    break;
                                case 'coffee':
                                    msg = ``;
                                    break;
                                case 'drink':
                                    msg = ``;
                                    break;
                                case 'cocktail':
                                    msg = ``;
                                    break;
                                case 'beer':
                                    msg = ``;
                                    break;
                                case 'wine':
                                    msg = ``;
                                    break;
                                //accommodation
                                case 'camp':
                                    msg = ``;
                                    break;
                                case 'accommodation':
                                    msg = ``;
                                    break;
                                case 'hostel':
                                    msg = ``;
                                    break;
                                case 'hotel':
                                    msg = ``;
                                    break;
                                case 'appartment':
                                    msg = ``;
                                    break;
                                //activity
                                case 'jet ski':
                                    msg = ``;
                                    break;
                                case 'diving':
                                    msg = ``;
                                    break;
                                case 'submarine':
                                    msg = ``;
                                    break;
                                case 'go out':
                                    msg = ``;
                                    break;
                                case 'boat ride':
                                    msg = ``;
                                    break;
                                case 'watersports':
                                    msg = ``;
                                    break;
                                case 'paddle boat':
                                    msg = ``;
                                    break;
                                default:
                                    msg = ``;
                                    break;
                                break;
                            }
                        case 'is_there_x':
                            switch (keywordValue) {
                                // food
                                case 'desert':
                                    msg = ``;
                                    break;
                                case 'local cuisine':
                                    msg = ``;
                                    break;
                                case 'fast food':
                                    msg = ``;
                                    break;
                                case 'pizza':
                                    msg = ``;
                                    break;
                                case 'grill':
                                    msg = ``;
                                    break;
                                case 'pasta':
                                    msg = ``;
                                    break;
                                case 'seafood':
                                    msg = ``;
                                    break;
                                //drink
                                case 'tea':
                                    msg = ``;
                                    break;
                                case 'water':
                                    msg = ``;
                                    break;
                                case 'coffee':
                                    msg = ``;
                                    break;
                                case 'drink':
                                    msg = ``;
                                    break;
                                case 'cocktail':
                                    msg = ``;
                                    break;
                                case 'beer':
                                    msg = ``;
                                    break;
                                case 'wine':
                                    msg = ``;
                                    break;
                                //accommodation
                                case 'camp':
                                    msg = ``;
                                    break;
                                case 'accommodation':
                                    msg = ``;
                                    break;
                                case 'hostel':
                                    msg = ``;
                                    break;
                                case 'hotel':
                                    msg = ``;
                                    break;
                                case 'appartment':
                                    msg = ``;
                                    break;
                                //activity
                                case 'jet ski':
                                    msg = ``;
                                    break;
                                case 'diving':
                                    msg = ``;
                                    break;
                                case 'submarine':
                                    msg = ``;
                                    break;
                                case 'go out':
                                    msg = ``;
                                    break;
                                case 'boat ride':
                                    msg = ``;
                                    break;
                                case 'watersports':
                                    msg = ``;
                                    break;
                                case 'paddle boat':
                                    msg = ``;
                                    break;
                                // event
                                case 'gastronomical event':
                                    msg = ``;
                                    break;
                                case 'concert':
                                    msg = ``;
                                    break;
                                case 'cultural event':
                                    msg = ``;
                                    break;
                                case 'event':
                                    msg = ``;
                                    break;
                                default:
                                break;
                            }
                        default:
                                msg = `I'm sorry, I can't make out what you needed from me. Try again please`
                    }
                } else if (!('greetings' in res.entities) && 'intent' in res.entities && Object.entries(res.entities).length > 2) {
                    // tu ide get happening potencijalno
                } else {
                    msg = `I'm sorry I didn't quite get you, could you paraphrase that for me?`
                }

                setMessages(previous => [...previous, {text: msg, user: false}]);
                document.querySelector('#chat').scroll(0, document.querySelector('#chat').scrollHeight);
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