import Image from "next/image"
import { IoIosMenu } from "react-icons/io";

export default function Header(){
    return(
        <div className="mb-4">
            <div className="bg-rosa1">
                <div className="flex items-center justify-center ">
                    <Image
                        className="bg-white rounded-full m-3"
                        src="/Logo-mimos.png"
                        width={80}
                        height={80}
                        alt="Logotipo" 
                    />
                </div>
                <div className="bg-rosa2 flex justify-center py-2 shadow-lg">
                    <IoIosMenu 
                        className="text-slate-100 text-2xl hover:cursor-pointer"
                    />
                </div>
                
            </div>
            <div className="bg-rosa2 p-4 flex justify-center text-white font-light ">
                <ul className="text-center flex flex-col gap-y-2">
                    <li className="hover:text-gray-200 hover:cursor-pointer">Home</li>
                    <li className="hover:text-gray-200 hover:cursor-pointer">Menu</li>
                    <li className="hover:text-gray-200 hover:cursor-pointer">Saiba Mais</li>
                </ul>
            </div>
        </div>
    )
}