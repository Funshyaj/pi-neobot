import logo from '../welcome/logo.png';
// 
type signIn={
    signIn:()=>void;
} 

const Login = ({signIn}:signIn) => {
    return ( <div className="text-center justify-center flex h-screen flex lg">
        {/* <h2 className="text-center text-2xl">Login</h2> */}
        <div className="hidden lg:flex justify-center items-center w-3/5  bg-off-white">
            <img src={logo} alt="logo_png" className='min-h-[180px] w-4/5 md:w-2/5 lg:w-3/5 my-0 mx-auto animate-pulse'/>
        </div>

        <div className="px-10 flex flex-col gap-5 lg:w-2/5 justify-center lg:shadow-sideShadow">
            <div className="flex flex-col gap-5 items-center">
              <p className="text-xl">Authenticate with  <br /> Pi account</p>
            <button className="button text-[1.7rem] bg-pi-color mx-[3.5rem]" onClick={signIn}>Login</button>  
            </div>
            
            <form className="mt-10 flex flex-col items-center gap-3 lg:px-10 " >
                <p className="text-xl">Enter mail to Join the Waitlist</p>
                <input type="email" name="email" className="border-dark-green border focus:border-black rounded py-3 px-4 w-full lg:w-4/5"/>
                <button className="button text-[1.7rem] bg-dark-green mx-[3.5rem] hover:bg-dark-greenL active:bg-dark-greenL" type="submit">Enter</button>
            </form>
        </div>
    </div> );
}
 
export default Login;