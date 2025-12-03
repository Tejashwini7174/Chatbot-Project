import RobotprofileImage from '../assets/robot.png'
import UserProfileImage from '../assets/Prophoto.png'
import dayjs from 'dayjs';

   
   export function ChatMessage({message,sender,time}) {
     // const message=props.message;
     //const sender=props.sender;
     //const{message,sender}=props;
      
     /* (if(sender==='robot'){
      return(
         <div>
          <img  src="robot.png" width="50"/>
          {message}
           
        </div>
      );
     }
     */
     
      return(
        <div className={
          sender==='user'
          ?'chat-message-user'
          :'chat-message-roboot'
        }>
          {sender==='robot'&& (
            <img  src={RobotprofileImage} 
            className="chat-message-profile" />
            )
          }
           <div className="chat-message-text">
        
       
        <div dangerouslySetInnerHTML={{ __html: message }} />

        <div className="message-time">
          {dayjs(time).format('h:mm a')}
        </div>

      </div>

           {sender==='user'&& (
            <img  src={UserProfileImage}
            className="chat-message-profile user-photo"/>
            )}
        </div>
      );
      }