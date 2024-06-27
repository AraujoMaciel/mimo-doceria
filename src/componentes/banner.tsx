import Image from "next/image"

export default function Banner(){
    return(
        <div>
            <div>
                <div className="w-10 h-10 float-end rounded-full bg-amarelo/40 relative top-12 right-12 z-10"></div>

                <div className="flex justify-center items-center h-full py-7 z-20">
                    
                    <div className="bg-vermelhoFraco h-[300px] flex flex-col justify-center items-center rounded-2xl">
                        <Image className=""
                            src="/torta.png"
                            width={300}
                            height={300}
                            alt="Torta de Morango"
                        />
                        <div className="relative -bottom-4 -right-16 bg-rosa1 text-white p-2 rounded-2xl px-4 hover:cursor-pointer hover:bg-vermelhoForte/50 duration-500 hover:animate-bounce">
                            <button>Ver mais</button>
                        </div>
                    </div>    
                </div>

                <div className="w-28 h-28 float-start rounded-full bg-rosa1/40 relative -top-32 left-12 z-30"></div>

            </div>
        </div>
    )
}