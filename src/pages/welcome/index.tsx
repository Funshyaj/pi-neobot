import logo from './logo.png'
import { Link } from 'react-router-dom';
import Login from '../login';

const Welcome = () => {
    return ( <div className="flex h-screen flex-col items-center gap-10">
        <div >
          <h1 className="text-3xl lg:text-5xl font-semibold mb-10 mt-28 text-center">Welcome to Pi-NeoBot</h1>
        <img src={logo} alt="logo_png" className="min-h-[180px] w-4/5 md:w-2/5 lg:w-1/5 my-0 mx-auto animate-pulse"/>   
        </div>
           
           <div className="flex flex-col items-center lg:flex-row gap-5 mx-5">
            {/* link to login page */}
            <Link to='/login'>
          <button className="button text-2xl bg-verdigris hover:bg-moonstone active:bg-moonstone">Sign In</button> 
            </Link>
            
            {/* link to login page */}
            <Link to='/login'>
          <button className="button text-2xl bg-cerulean hover:bg-ceruleanD active:bg-ceruleanD">Sign up</button>
            </Link>
   </div>
     {/* <button className="px-12 py-2 text-lg font-medium bg-moonstone rounded text-white">Sign up</button> 
     <button className="px-12 py-2 text-lg font-medium bg-cerulean rounded text-white">Sign up</button> 
     <button className="px-12 py-2 text-lg font-medium bg-dark-green rounded text-white">Sign up</button>
     <button className="px-12 py-2 text-lg font-medium bg-black rounded text-white">Sign up</button> 
      */}
     
           

   
    </div> );
}
 
export default Welcome;