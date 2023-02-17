import { useState } from "react";
const ChatPage = () => {
    
    const [message, setMessage] = useState<string>('')
    const [value, setValue] = useState<string>('')
type change = {
    change:()=> void
}
const change = (e:any)=> {
    let value = e.target.value;
setValue(value)
}

const display =()=>{
   setMessage(value) 
}
    return ( <div className="h-screen">
{/* message display */}
<div className="hidden lg:flex flex- col fixed left-0 w-1/5">
fdf
</div>

<div className=" lg:ml-[20%]">
<div className="absolute top-[10%]">
    <p className="chat-text">Hi, welcome NeoBot!</p>
    <p className="chat-text ">An artificial intelligence chatbot on the Pi Network</p>
    <p className="chat-text ">{message}</p>

</div>

     {/* message input */}
        <div className="flex absolute bottom-0 lg:w-4/5 w-full ">
        <input type="text" name="chat" className=" text-lg w-full border-dark-green border focus:border-black rounded py-3 px-4 lg:w-full" onChange={(e)=>change(e)} value={value}/>
        <button type="submit" className="button bg-dark-green p-4" onClick={()=>display()}>send</button>    
        </div>
</div>

       
        

    </div> );
}
 
export default ChatPage;