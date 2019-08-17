import React, { useState } from 'react';
import './style.css';
import Message from './Message';
import { randomBytes } from 'crypto';
// https://github.com/ayoisaiah/weather-bot
// https://pusher.com/tutorials/weather-chatbot-react-dialogflow

//kada sam u pol screena (window.innerWidth = 958) onda mi dizajn odgovara, sad treba nekako napravit da to ostane tako kad screen postane veci
// trebam footer meni izmislit nes drugo da bude
// bilo bi dobro da ostane matej ljubic i godina a ove sve languages about i feedback smjestiti u neki meni sa strane
//u slucaju da screen postane manji trebat ce to drukcije pretumbat, tj. chat ce mi trebat bit centriran

export default () => {
   const [userInput, setUserInput] = useState('');
   const [conversation, setConversation] = useState([]);
   const handleUserInput = e => setUserInput(e.target.value);
   const sendMessage = e => {
      e.preventDefault();
      if (userInput.trim() !== '') {
         setConversation([
            ...conversation,
            { text: userInput, sentByUser: true },
         ]);
         setUserInput('');
      }
      document.querySelector('#inputField').focus();
   };
   return (
      <>
         <main>
            <div id="logo">I am logo</div>
            <div id="chat">
               <div id="messageContainer">
                  {conversation.map((msg, index) => (
                     <Message key={randomBytes(12)} sentByUser={msg.sentByUser}>
                        {msg.text}
                     </Message>
                  ))}
               </div>
               <form id="messageForm" onSubmit={sendMessage}>
                  <input
                     id="inputField"
                     type="text"
                     placeholder="Ask me something :)"
                     onChange={handleUserInput}
                     value={userInput}
                     autoComplete="off"
                  />
                  <button type="submit">Send</button>
               </form>
            </div>
         </main>
         <footer>
            <span id="author">Matej Ljubic</span>
            <div id="buttons">
               <button type="button">Feedback</button>
               <button type="button">About</button>
               <button type="button">EN</button>
               <button type="button">DE</button>
            </div>
         </footer>
      </>
   );
};
