"use client";

import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function Header(){

    const [estadoMenu, setEstadoMenu] = useState(true);

    return(
        <div className="">
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
                        onClick={() => setEstadoMenu(!estadoMenu)}
                        className="text-slate-100 text-2xl hover:cursor-pointer"
                    />
                </div>
                
            </div>
            <div className={`
                bg-rosa2 p-4 flex justify-center text-white font-light ${estadoMenu?'hidden':'visible'}
                `}>
                <ul className="text-center flex flex-col gap-y-2" onClick={() => setEstadoMenu(true)}>
                    <li className="hover:text-gray-200 hover:cursor-pointer"><Link href="/">Início</Link></li>
                    <li className="hover:text-gray-200 hover:cursor-pointer"><Link href="/paginas/produtos">Produtos</Link></li>
                    <li className="hover:text-gray-200 hover:cursor-pointer"><Link href="/paginas/saiba-mais">Saiba Mais</Link></li>
                </ul>
            </div>
        </div>
    )
}