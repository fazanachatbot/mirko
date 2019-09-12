import React, { useState } from 'react'
import { Wit, log } from 'node-wit'

const client = new Wit({
    accessToken: 'BCBOT3Y7PRJ2YGTE6HKJVGGXHNCAEHDI',
    logger: new log.Logger(log.DEBUG),
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
                        };
                    };
                    const {value: keywordValue} = res.entities[keywordEntity][0];
                    const {value: intentValue} = res.entities.intent[0];
                    switch(intentValue) {
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
                                    msg = `You can get desert at just about any restaurant or café`;
                                    break;
                                case 'local cuisine':
                                case 'seafood':
                                case 'pasta':
                                    msg = `You can eat some tasty${keywordValue} in either 'Konoba Feral' or 'Stara Konoba', both of which are in the center of Fažana. Follow the coastline and you won't miss them :)`;
                                    break;
                                case 'fast food':
                                    msg = `You can usually find fish and chips at any restaurant but we also have a local fast food called 'Kroko food' which is worth checking out`;
                                    break;
                                case 'pizza':
                                    msg = `There are many pizzerias and pizza-cuts, but my personal favorite is Sorisso, which you can visit by moving towards BiVillage. It's hard to miss.`;
                                    break;
                                case 'grill':
                                    msg = `The best grill is in 'Konoba Karlen'. It's to your left before the roundabout when heading from Fažana to Pula.`;
                                    break;
                                //drink
                                case 'tea':
                                    msg = ``;
                                    break;
                                case 'water':
                                    msg = `You can buy water at any store but I suggest you rather walk into any café or restaurant and ask for a glass of tap water because in Croatia we still have clean water :)`;
                                    break;
                                case 'coffee':
                                    msg = `Coffe is sold in every locale in Fažana. 'Porto' is serving the best coffe in town.`;
                                    break;
                                case 'drink':
                                    msg = `You can go out and drink at the local beach bars 'Shark' or 'Chupa Cabra'. They work long hours and you can also take a night swim while you're there :D`;
                                    break;
                                case 'cocktail':
                                    msg = `Try visiting 'Beach Bar Coco'. It's to your right when you follow the coastline towards biVillage. There's a nice view at the top of the bunker it was made out of`;
                                    break;
                                case 'beer':
                                    msg = ``;
                                    break;
                                case 'wine':
                                    msg = `Oh just about any restaurant is fine. You haven't really been to Istria if you haven't tried Malvazija or Teran`;
                                    break;
                                //accommodation
                                case 'camp':
                                    msg = `You can find camp 'Pineta' if you drive north of Fažana (towards Vodnjan) and turn left at the sign that says 'Peroj'`;
                                    break;
                                case 'accommodation':
                                    msg = `Try visiting or contacting our tourist office and asking them for help if you haven't found anything online already. They usually know who can book a place even when everyone's full.`;
                                    break;
                                case 'hostel':
                                    msg = `In the old town there's a hostel that's a bit pricey called 'Chersin' but it's worth checking out if you're staying for one night.`;
                                    break;
                                case 'hotel':
                                    msg = `We have a few hotels, 'Villetta Phasiana' is the most beautiful one in my opinion and it's just next to the parish Church of Saint Cosmas and Damian`;
                                    break;
                                case 'apartment':
                                    msg = `Apartments are usually booked so if there's no apartment on booking.com or airbnb.com I think you're out of luck :/`;
                                    break;
                                //activity
                                case 'jet ski':
                                case 'paddle boat':
                                    msg = `They rent ${keywordEntity} at the seafront in biVillage.`;
                                    break;
                                case 'diving':
                                    msg = `Just take a diving mask and walk into the water, you'll be surprised by how much you can sea hehe :D. As of any renting official scuba diving equipment, we unfortunately don't have that in Fažana`;
                                    break;
                                case 'submarine':
                                    msg = `There's a red submarine that books rides in the center of Fažana`;
                                    break;
                                case 'go out':
                                    msg = `You can go indulge in one of our many events in Fažana, visit beach bars and restaurants or take a ride to Pula and go clubbing from Thursday till Sunday.`;
                                    break;
                                case 'boat ride':
                                    msg = `You can book a boat ride by talking to one of the bookers in Fažana (there are many along the seafront) or rent a boat near the parking with the big white cross.`;
                                    break;
                                case 'watersports':
                                    msg = `Unfortunately, there aren't any official places to play watersports. You'll have to improvise :)`;
                                    break;
                                default:
                                    msg = `I'm sorry I can't give you directions to something that I don't know where it is`;
                                    break;
                            }
                            break;
                        case 'is_there_x':
                            switch (keywordValue) {
                                // food
                                case 'desert':
                                    msg = ``;
                                    break;
                                case 'local cuisine':
                                case 'pasta':
                                case 'seafood':
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
                                case `Unfortunately, there aren't any official places to play watersports. You'll have to improvise :)`:
                                    msg = ``;
                                    break;
                                case 'paddle boat':
                                    msg = ``;
                                    break;
                                    // event
                                case 'event':
                                    msg = `Yes. We have many gastronomical events, cultural events and of course concerts.`;
                                    break;
                                case 'gastronomical event':
                                    msg = ``;
                                    break;
                                case 'concert':
                                    msg = ``;
                                    break;
                                case 'cultural event':
                                    msg = ``;
                                    break;
                                default:
                                    msg = `Not that I know of...`
                                break;
                            }
                            break;
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
                </form>
            </div>
        </aside>
    )
}

export default Chat