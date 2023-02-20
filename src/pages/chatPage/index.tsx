import { useState } from "react";


interface Message {
    id: number;
    content: string;
    author: string;
  }

const ChatPage = () => {    
    const [messages, setMessages] = useState<Message[]>([])
    const [value, setValue] = useState<string>('')
     

type change = {
    change:()=> void
}

const change = (e :React.ChangeEvent<HTMLInputElement>)=> setValue(e.target.value)


const display =()=>{
    const newMessage: Message = {
        id: messages.length + 1,
        content: value,
        author: 'Me'};

    
    console.log(messages)
   setMessages([...messages,newMessage]);

    
 if(messages.length == 1){
    const newReply: Message = {
        id: messages.length + 1,
        content: 'Thats awsome, my developers are working very hard to make sure Im working perfectly before the let you use me, thank you for understanding',
        author: 'Ai'};
  setMessages([...messages,newReply]);
    }

  else if(messages.length > 2){
    const newReply: Message = {
        id: messages.length + 1,
        content: 'Kindly check back soon',
        author: 'Ai'};
  setMessages([...messages,newReply])
    }

    

}

    return ( <div className="h-screen">

<div className="hidden lg:flex flex- col fixed left-0 w-1/5">
side bar content
</div>

<div className='relative lg:ml-[20%] h-full bg-verdigrisL'>

{/* message display */}


<div className=" px-3.5 lg:px-20 h-[87%] overflow-scroll">
 {/* intro */}
  <div className="mt-4 mb-2 lg:mt-8 lg:mb-5">
    <p className="alert">Welcome to Neobot, this is a chat bot that will answer your questions and help you do things faster</p>
    <p className="alert">Note that some answers maybe inaccurate</p>
    <p className="alert">This chatbot will not provide answer to inapproprite questions</p>
  </div>

    <p className="chat-text">Hi, welcome to NeoBot!</p>
    <p className="chat-text ">I am an Artificially Intelligent chatbot on the Pi Network</p>
    <p className="chat-text ">Whats your name?, tell me about yourself</p>
    
    {messages.map(message=>(
         <div key={message.id} className={`flex flex-col ${message.author === 'Me' ? 'items-end' : 'items-start'}`}>
         <div className={`chat-text  ${message.author === 'Me' ? 'bg-cerulean rounded-tl-xl rounded-br-none ' : 'bg-verdigris'} `}>{message.content}</div>
       </div>
    ))} 

{/* {replies.map(message=>(
         <div key={message.id} className={`flex flex-col ${message.author === 'Me' ? 'items-end' : 'items-start'}`}>
         <div className="chat-text">{message.content}</div>
       </div>
      ))}  */}
</div>

     {/* message input */}
        <div className="flex absolute items-center bottom-0 lg:w-4/5 w-full h-[13%] pt-4 pb-4 px-2 ">
        <input required type="text" name="chat" className=" text-lg w-full border-dark-green border focus:border-black rounded-full py-3 px-4 lg:w-full" onChange={(e)=>change(e)} value={value}/>
        <span onClick={()=>display()} className="material-symbols-outlined duration-150 text-4xl text-cerulean hover:text-dark-green active:text-dark-green pointer py-3 px-4 rounded-xl">send</span>  
        </div>
</div>

       
        

    </div> );
}
 
export default ChatPage;