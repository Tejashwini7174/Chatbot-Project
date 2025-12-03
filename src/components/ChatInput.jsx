import { useState } from 'react'    
import { Chatbot } from 'supersimpledev';
import LoadSpinner from '../assets/loading-spinner.gif'     
import dayjs from 'dayjs';
         
        export function ChatInput({ chatMessages,setChatMessages}){
         const[inputText,setInputText]= useState('');
         function saveInputText(event){
         setInputText(event.target.value);

        }
         function sendMessage(){
          if (!inputText.trim()) return;
          const time = dayjs().valueOf();
          const normalized = inputText.trim(); // keep original for display
          const normalizedForBot = inputText.trim().toLowerCase(); // for matching
          const newChatMessages=[
           ...chatMessages,
           {
            message:inputText,
            sender:'user',
            time: time,
            id:crypto.randomUUID()
           }
           ]
            setChatMessages(newChatMessages);
           
           const response=Chatbot.getResponse(inputText);
            setChatMessages([
           ...newChatMessages,
           {
            message: `<img src="${LoadSpinner}"  class="loading-spinner" />`,
            sender:'robot',
            id:crypto.randomUUID(),
             isLoading: true
           }
           ]);
           setTimeout(() => {
              //const response = Chatbot.getResponse(inputText);
               const response = Chatbot.getResponse(normalizedForBot) || Chatbot.getResponse(normalized) || "Sorry, I didn't understand that.";

               setChatMessages(prevMessages =>
               prevMessages.map(msg => msg.isLoading
                  ?{ ...msg, message: response, isLoading: false }
                   : msg
                   )
                   );
                     }, 700); 
              
           setInputText('')

        }
      return(
      
        <div className="chat-input-container">
          
          <input 
            placeholder="send a message to chatbot" 
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
          />

          <button
          onClick={sendMessage}
          className="send-button"
          >send</button>

          <button
         className="clear-button"
            onClick={() => {
              setChatMessages([]);
         localStorage.setItem('messages', JSON.stringify([]));
            }}
>
  Clear
</button>
        </div>



      );
     }