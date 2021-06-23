import Input from "../components/Input"
import Button from "../components/Button"
import loginImg from '../images/login-pic.png'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-2 mr-auto ml-auto">
                <div className="p-6 m-10">
                    <h2 className="pb-6 text-2xl pl-3 font-bold font-poppins">Sign Up</h2>
                    <div className="flex">
                        <Input label="first Name"/>
                         <Input label="Last Name"/>
                    </div>
                        <Input label="Email address"/>
                        <Input label="Password"/>
                        <Input label="Confirm Password"/>

                        <div className="block mt-2 text-center">
                            <Button children="create Account" classNames="p-3 text-white font-poppins w-30 bg-black rounded"/>
                        </div>
                
                </div>
                <div className="creamy-bg block">
                    <div className="mt-6">
                        <img src={loginImg} alt="" className="mr-auto ml-auto"/>
                        <p className="text-center">Already have an account? <Link to="/login"><span className="text-base font-poppins text-maingreen">Login here</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup