import { MdEmail } from "react-icons/md"


const Footer = () => {
       return (
              <div className=" bg-[#FFF4E2] p-10">
                     <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between px-10 xl:mx-[240px] min-[1440px]:mx-10 bg-[#8C6120] p-4 rounded-2xl">
                            <div className="flex  items-center border border-[#DF921F] rounded-xl text-white gap-2 p-3">
                                   <div><MdEmail /> </div>
                                   <div>info@capococo.com</div>
                            </div>
                            <div className="">
                                   © 2023. All rights reserved.
                            </div>
                     </div>
              </div>
       )
}

export default Footer