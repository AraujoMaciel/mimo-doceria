import Image from "next/image"
import { IoIosMenu } from "react-icons/io";

export default function Header(){
    return(
        <div>
            <div className="bg-rosa1">
                <div className="flex items-center justify-center ">
                    <Image
                        className="bg-slate-50 rounded-full m-3"
                        src="/Logo-mimos.png"
                        width={80}
                        height={80}
                        alt="Logotipo" 
                    />
                </div>
                <div className="bg-rosa2 flex justify-center py-2 shadow-lg">
                    <IoIosMenu 
                        className="text-slate-100 text-2xl"
                    />
                </div>
                
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Saiba Mais</li>
                </ul>
            </div>
        </div>
    )
}