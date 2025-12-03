  import {useRef,useEffect} from 'react'
  import { ChatMessage } from './ChatMessage';
 
  
  export function ChatMessages({chatMessages}){
        const chatMessagesRef=useRef(null);
        useEffect(()=>{
          const containerElem=chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
            
          }
         
        },[chatMessages]);
        return(
          
          <div className="chat-messages-container"
            ref={chatMessagesRef}>
           {chatMessages.length === 0 && (
           <div style={{
            textAlign: "center",
             color: "gray",
           marginTop: "20px"
             }}>
           Welcome to the chatbot project! Send a message using the textbox below.
      </div>
    )}
           { chatMessages.map((chatMessage)=>{
          return(
            <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}   
           key={chatMessage.id}
            />
          );

        })}
      </div>
        );

      }
export default ChatMessages;