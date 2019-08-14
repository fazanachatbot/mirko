import React from 'react';

//kada sam u pol screena (window.innerWidth = 958) onda mi dizajn odgovara, sad treba nekako napravit da to ostane tako kad screen postane veci
// trebam footer meni izmislit nes drugo da bude
// bilo bi dobro da ostane matej ljubic i godina a ove sve languages about i feedback smjestiti u neki meni sa strane
//u slucaju da screen postane manji trebat ce to drukcije pretumbat, tj. chat ce mi trebat bit centriran

export default () => {
   return (
      <>
         <style>
            {`
              * {
                margin: 0;
                box-sizing: border-box;
              }
              main {
                background-color: lightcoral;
                height: 95vh;
                padding-top: 5vh;
                padding-left: 3vh;
              }
              button {
                background: transparent;
                color: black;
                border-radius: 2px;
                border: 1px solid black;
                margin-right: 1vw;
              }
              #logo {
                border: 2px solid black;
                height: 15vh;
                width: 65%;
                margin-bottom: 12vh;
              }
              #chat {
                // border: 2px solid black;
                width: 55%;
                height: 60vh;
                background-color: whitesmoke;
                display: flex;
                flex-direction: column;
                padding: 10px;
              }
              #messageContainer {
                border: 1px solid silver;
                height: 95%;
                overflow: auto;
                overflow-x: hidden;
                scroll-behavior: smooth;
                margin-bottom: 5px;
              }
              .message {
                padding: 5px;
                width: 55%;
                text-align: justify;
                border-radius: 5px;
                margin: 5px;
              }
              .messageUser {
                background-color: black;
                color: white;
                margin-left: auto;
              }
              .messageBot {
                background-color: silver;
                color: black;
                margin-left: 5px;
              }
              #messageForm {
                height: 5%;
                // border: 1px solid red;
                padding: 3px;
                display: flex;
                flex-direction: row;
              }
              #messageForm > input {
                width: 100%;
              }
              #messageForm > button {
                margin-right: 0;
                margin-left: 1vw;
              }
              footer {
                background-color: lightblue;
                height: 5vh;
                display: grid;
                grid-template-areas: 
                  'author author author author author author author buttons'
                ;
                align-items: center;
              }
              #author {
                grid-area: author;
                justify-self: start;
                margin-left: 1vw;
              }
              #buttons {
                grid-area: buttons;
                justify-self: end;
              }
            `}
         </style>
         <main>
            <div id="logo">I am logo</div>
            <div id="chat">
               <div id="messageContainer">
                  <div className="message messageBot">Bot sent this</div>
                  <div className="message messageUser">
                     Elit sit in adipisicing sint ea in nisi anim commodo ad
                     tempor. Exercitation aliqua amet et exercitation tempor
                     consequat elit labore exercitation nisi ipsum. Non ullamco
                     in veniam officia dolor magna do voluptate consequat. Ut
                     officia sunt ex excepteur commodo minim cupidatat aute.
                     Velit laborum est tempor et irure aliquip Lorem proident
                     dolore non aliquip adipisicing adipisicing duis.
                     Exercitation quis laborum sit esse mollit officia esse
                     aliquip occaecat consequat officia occaecat excepteur
                     fugiat.
                  </div>
                  <div className="message messageBot">
                     Enim excepteur dolore et elit amet dolore est eu amet.
                     Labore ex magna laborum minim elit. Esse cillum cupidatat
                     deserunt culpa non esse occaecat minim. Ut amet incididunt
                     reprehenderit fugiat labore occaecat sunt aliquip
                     voluptate. Dolor occaecat consectetur ullamco pariatur
                     fugiat velit.
                  </div>
                  <div className="message messageUser">User sent this</div>
                  <div className="message messageUser">User sent this</div>
                  <div className="message messageBot">
                     Exercitation proident est officia ullamco minim excepteur
                     ullamco nostrud duis elit minim. In et aute cillum eu non
                     id excepteur duis. Veniam minim officia id culpa sit veniam
                     sunt aliqua in dolore. Sunt aliqua consequat consectetur in
                     deserunt magna anim laborum adipisicing quis sit
                     exercitation. Lorem magna ad commodo do nostrud labore do
                     adipisicing.
                  </div>
               </div>
               <form id="messageForm">
                  <input type="text" placeholder="Ask me something..." />
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
