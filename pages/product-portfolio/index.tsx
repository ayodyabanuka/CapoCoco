import Image from "next/image"
const ProductPortfolio = () => {
       return (
              <div>
                     <div className="hidden md:flex xl:flex-row md:flex-col max-w-[1920px] gap-7 my-10 h-full text-white justify-between items-center px-0 lg:px-16">
                            <div className="w-[695px] bg-yellow-700 bg-cover h-[800px] rounded-3xl bg-[url('/kingback.png')] p-16">
                                   <div className="font-bebas -mt-10 text-[96px]">King</div>
                                   <div className="font-bebas -mt-12 text-[64px]">Coconut Water</div>
                                   <div className="w-1/2 mt-9 text-[20px]">Immerse yourself in the royal realm of this beverage, a single origin product harvested in a tropical paradise. Our King Coconut water is more than just a beverage – it is an experience packed with elctrolytes and nutrition that reflect the essence of the tropics.
                                          The ultimate organic energy booster with a unique taste and multiple benefits</div>

                            </div>
                            <div className="w-[695px] flex flex-col h-[800px] items-end rounded-3xl bg-green-700 bg-cover bg-[url('/tenderback.png')] text-right p-16">
                                   <div className="font-bebas -mt-10 text-[96px]">Tender</div>
                                   <div className="font-bebas -mt-12 text-[64px]">Coconut Water</div>
                                   <div className="w-1/2 mt-9 text-[20px]">Enjoy the natural refreshing and hydrating experience of tender coconut water, sourced directly from the green plantations that dot the landscapes of Sri Lanka. With each sip you will feel the embrace of the warm breeze among the palm trees and appreciate the nature-given goodness this beverage embodies.</div>
                            </div>
                     </div >
                     <div className="flex flex-col gap-6 mx-4 md:hidden">
                            <div className="w-full h-[790px] rounded-[40px] px-10 py-10 bg-bottom bg-no-repeat bg-cover bg-[url('/kingbackmobile.png')]">
                                   <div className="font-bebas  text-[55px]">King</div>
                                   <div className="font-bebas -mt-5 text-[33px]">Coconut Water</div>
                                   <div className="w-2/3 mt-2 text-[18px]">Immerse yourself in the royal realm of this beverage, a single origin product harvested in a tropical paradise. Our King Coconut water is more than just a beverage – it is an experience packed with elctrolytes and nutrition that reflect the essence of the tropics.
                                          The ultimate organic energy booster with a unique taste and multiple benefits</div>
                            </div>
                            <div className="w-full h-[790px] rounded-[40px] px-10 py-10 bg-bottom bg-no-repeat bg-cover bg-[url('/tenderbackmobile.png')]">
                                   <div className="font-bebas  text-[55px]">Tender</div>
                                   <div className="font-bebas -mt-5 text-[33px]">Coconut Water</div>
                                   <div className="w-2/3 mt-2 text-[18px]">Enjoy the natural refreshing and hydrating experience of tender coconut water, sourced directly from the green plantations that dot the landscapes of Sri Lanka. With each sip you will feel the embrace of the warm breeze among the palm trees and appreciate the nature-given goodness this beverage embodies.</div>
                            </div>
                     </div>

              </div >
       )
}

export default ProductPortfolio