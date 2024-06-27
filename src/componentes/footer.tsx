import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <div>
            <div className="bg-amarelo">
                <div className="flex flex-col py-4 px-5 text-xs text-marrom/90 gap-3">
                    <div>
                        <h2 className="font-semibold pb-1 text-sm">Mimo's Doceria </h2>
                        <p className="">Trabalhando com carinho e pensando na satisfação do cliente.</p>
                    </div>
                    <div>
                        <h2 className="font-semibold pb-1 text-sm">Links úteis</h2>
                        <div>
                            <ul className="flex flex-col gap-1 w-[80px]">
                                <li className="hover:text-vermelhoForte hover:cursor-pointer"><Link href="/">Início</Link></li>
                                <li className="hover:text-vermelhoForte hover:cursor-pointer"><Link href="/paginas/produtos">Produtos</Link></li>
                                <li className="hover:text-vermelhoForte hover:cursor-pointer"><Link href="/paginas/saiba-mais">Saiba Mais</Link></li>
                                <li className="hover:text-vermelhoForte hover:cursor-pointer"><Link href="/paginas/pedidos">Pedidos</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold pb-1 text-sm">Fale Conosco</h2>
                        <ul className="flex flex-col w-[80px] gap-1">
                            <li><a className="flex flex-row gap-1 hover:text-vermelhoForte hover:cursor-pointer" href=""><FaInstagram />Instagram</a></li>
                            <li><a className="flex flex-row gap-1 hover:text-vermelhoForte hover:cursor-pointer" href=""><FaTwitter />Twitter</a></li>
                            <li><a className="flex flex-row gap-1 hover:text-vermelhoForte hover:cursor-pointer" href=""><FaWhatsapp />WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-marrom mt-2 text-xs text-marrom/90 p-4 flex justify-center items-center">
                    <h3>&copy;Mimo's Doceria | Todos os direitos reservados</h3>
                </div>
            </div>
        </div>
    )
}