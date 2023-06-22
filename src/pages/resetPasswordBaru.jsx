import Header from '../components/header'
import ResetPasswordBaru from '../components/resetPasswordBaru';
import Logo from './tiketku.png'
import { Image } from 'primereact/image';

function ResetPasswordBaru(){
    return(
        <div className="flex items-center h-screen ">
            <div className='w-3/6'>

            <Image className="image" src={Logo} alt="Image" width='' />
            </div>
            <div className='flex flex-col w-3/6  px-32'>
                <label className="text-3xl text-left font-extrabold text-gray-900">Reset Password</label>
                <ResetPasswordBaru/>
                <Header
                    // heading="Masuk"
                    // labelText="aaaaaaaaaaaa"
                    // paragraph="Belum punya akun? "
                    // linkName="Daftar di sini"
                    // linkUrl="/signup"
                />
                
            </div>
        </div>
    )
}

export default ResetPasswordBaru