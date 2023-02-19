import { useState,useEffect } from "react";
const ChatPage = () => {
    
    const [message, setMessage] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [show, setShow] = useState<Boolean>(false)
    const [phoneHeight, setPhoneHeight] = useState<number>()

type change = {
    change:()=> void
}
const change = (e :React.ChangeEvent<HTMLInputElement>)=> {
    let value = e.target.value;
setValue(value)
}

const display =()=>{
   setMessage(value)
   setShow(true) 
   if(message === ''){
    setShow(false)
   }
}

useEffect(() => {
setPhoneHeight(window.outerHeight)
 });


    return ( <div className="h-screen">

<div className="hidden lg:flex flex- col fixed left-0 w-1/5">
fdf
</div>

<div className={`relative lg:ml-[20%] h-[${phoneHeight}px] bg-verdigrisL`}>

{/* message display */}

 


<div className=" px-5 h-[90%] overflow-scroll">
 {/* intro */}
  <div className="mt-4 mb-2">
    <p className="alert">Welcome to Neobot, this is a chat bot that will answer your questions and help you do things faster</p>
    <p className="alert">Note that some answers maybe inaccurate</p>
    <p className="alert">This chatbot will not provide answer to inapproprite questions</p>
  </div>

    <p className="chat-text rounded-tl-none">Hi, welcome NeoBot!</p>
    <p className="chat-text ">An artificial intelligence chatbot on the Pi Network</p>
    <p className={`chat-text float-right bg-cerulean  rounded-tl-xl rounded-br-none ${
        show ? 'inline-block' : 'hidden'
    }`}>{message}</p>
</div>

     {/* message input */}
        <div className="flex absolute justify-center bottom-0 lg:w-4/5 w-full h-[10%] pt-4 pb-2 px-2 ">
        <input type="text" name="chat" className=" text-lg w-full border-dark-green border focus:border-black rounded-[30px] py-3 px-4 lg:w-full" onChange={(e)=>change(e)} value={value}/>
        <button type="submit" className="button bg-cerulean py-3 px-4 rounded-xl" onClick={()=>display()}>send</button>    
        </div>
</div>

       
        

    </div> );
}
 
export default ChatPage;