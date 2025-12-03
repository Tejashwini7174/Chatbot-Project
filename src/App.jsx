import { useState,useEffect} from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';



import './App.css'
     
 function App(){

       const [chatMessages, setChatMessages] = useState(
        JSON.parse(localStorage.getItem('messages')) || []
         );


       useEffect(() => {
          localStorage.setItem('messages', JSON.stringify(chatMessages));
           }, [chatMessages]);
          // const {chatMessages,setChatMessages}=array; line 55 is the shortcut for this line
          //const chatMessages=array[0];
         // const setChatMessages= array[1];//line 77 is an example for the array destructering for both lines 76,77
        
              
        return(
          <div className="app-container">
          
          <ChatMessages
           chatMessages={chatMessages}
          />
          <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
           />
          
          </div>
        );
      }
       
export default App
