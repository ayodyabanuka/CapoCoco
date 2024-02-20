import Image from "next/image"

const Loading = () => {
       return (
              <div className="flex h-screen w-full justify-center items-center text-black bg-white">
                     <div className="flex flex-col justify-center items-center text-sm font-light animate-bounce">
                            <Image src={"/logo.png"} alt={""} width={80} height={80} className="animate-pulse"></Image>
                     </div>
              </div>
       )
}

export default Loading