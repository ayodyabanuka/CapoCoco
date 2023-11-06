import { MdEmail } from "react-icons/md"


const Footer = () => {
       return (
              <div className=" bg-[#FFF4E2] p-10">
                     <div className="flex max-w-[1540px] flex-col md:flex-row gap-6 md:gap-0 items-center justify-between mx-auto bg-[#8C6120] p-4 rounded-2xl">
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