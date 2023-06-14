import Header from "../components/header";
import Signup from "../components/signup";
import { Image } from 'primereact/image';
import Logo from './tiketku.png'

export default function SignupPage(){
    return(
        <>
            {/* <Image className="image col-6" src={Logo} alt="Image" />
           
            <Signup/> */}
            <div className="flex items-center h-screen ">
            <div className='w-3/6'>

            <Image className="image" src={Logo} alt="Image" width='' />
            </div>
            <div className='flex flex-col w-3/6  px-32'>
                <label className="text-3xl text-left font-extrabold text-gray-900">Daftar</label>
            <Signup/>

            <Header
              paragraph="Sudah punya akun? "
              linkName="Masuk di sini"
              linkUrl="/api/v1/user/login"
            />
                
            </div>
        </div>
        </>
    )
}