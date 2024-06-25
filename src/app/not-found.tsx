import Image from "next/image"

export default function Erro(){
    return(
        <div className="h-screen flex items-center flex-col justify-center bg-gray-100">
            <div className="p-4 m-4 w-[280px]">
                <Image 
                    src="/vaca.png"
                    width={300}
                    height={300}
                    alt="Imagem de uma vaca"
                />
            </div>
            <div
            className="font-semibold text-cinza text-xl mt-12"
            >
                <h2>Página não encontrada</h2>
            </div>
        </div>
    )
}