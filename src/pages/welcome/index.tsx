const Welcome = () => {
    return ( <div className="flex h-screen flex-col items-center gap-10">
        <div >
          <h1 className="text-3xl lg:text-5xl font-semibold mb-10 mt-28 text-dark-green">Welcome to Pi-NeoBot</h1>
        <img src="" alt="logo_png" className="min-h-[180px]"/>   
        </div>
           
           <div className="flex flex-col lg:flex-row gap-5 mx-5">
    <button className="px-12 py-2 text-lg font-medium bg-verdigris hover:bg-moonstone active:bg-moonstone text-white rounded">Sign in</button> 
    <button className="px-12 py-2 text-lg font-medium bg-verdigris hover:bg-moonstone active:bg-moonstone text-white rounded">Sign up</button>
</div>
     <button className="px-12 py-2 text-lg font-medium bg-moonstone rounded text-white">Sign up</button> 
     <button className="px-12 py-2 text-lg font-medium bg-cerulean rounded text-white">Sign up</button> 
     <button className="px-12 py-2 text-lg font-medium bg-dark-green rounded text-white">Sign up</button>
     <button className="px-12 py-2 text-lg font-medium bg-black rounded text-white">Sign up</button> 
      
     
     
     
           

   
    </div> );
}
 
export default Welcome;