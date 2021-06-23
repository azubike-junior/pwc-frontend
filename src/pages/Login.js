import Input from "../components/Input"
import Button from "../components/Button"
import loginImg from '../images/login-pic.png'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-2 mr-auto ml-auto h-screen">
                <div className="p-10 m-10">
                    <h2 className="pb-10 text-2xl pl-3 font-bold font-poppins">Login to continue</h2>
                  
                        <Input label="Email address"/>
                        <Input label="Password"/>

                        <div className="block mt-2 text-center">
                            <Button children="Login" classNames="py-3 px-6 text-white font-poppins w-30 bg-black rounded"/>
                        </div>
                
                </div>
                <div className="creamy-bg block">
                    <div className="mt-6">
                        <img src={loginImg} alt="" className="mr-auto ml-auto"/>
                        <p className="text-center">Already have an account? <Link to="/signup"><span className="text-base font-poppins text-maingreen">create an account</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup