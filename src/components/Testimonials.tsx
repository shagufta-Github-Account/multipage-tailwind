import image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image'

function Testimonials() {
  return (
    <>
    <section className="
    w-full 
    px-[24px] xsm:px-[64px] 
    py-[112px]
    ">
      <h1 className="my_h1 mb-[24px]">Customer testimonials</h1> 
      <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit.</p> 

      {/*Cards div*/}
    <div className="mt-[80px] w-full flex gap-[32] flex-row overflow-x-auto">

    {/*card*/}
    
    <div className=" p-[32px] w-[362px] border-[1px] border-black">
        <div className="flex gap-1 mb-[24px]">
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        </div>
       
       <p className="mb-[24px]">orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

         <div className="flex gap-[20px]">
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
          <Image src="/team3.png" alt="team3" width={56} height={56}></Image>
          </div>
         
         
         <div className="h-full flex flex-col justify-start">
          <p>james Nduku</p>
          <p>Software Developer</p>
         </div>
         </div>
     </div>
    <div className="p-[32px] w-[362px] border-[1px] border-black">
        <div className="flex gap-1 mb-[24px]">
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        </div>
       
       <p className="mb-[24px]">orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

         <div className="flex gap-[20px]">
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
          <Image src="/team1.png" alt="team3" width={56} height={56}></Image>
          </div>
         
         
         <div className="h-full flex flex-col justify-start">
          <p>Erick Kipkemboi</p>
          <p>Scrum Master</p>
         </div>
         </div>
     </div>
    <div className="p-[32px] w-[362px] border-[1px] border-black">
        <div className="flex gap-1 mb-[24px]">
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        <FaStar size={20}/>
        </div>
       
       <p className="mb-[24px]">orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

         <div className="flex gap-[20px]">
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
          <Image src="/team6.png" alt="team3" width={56} height={56}></Image>
          </div>
         
         
         <div className="h-full flex flex-col justify-start">
          <p>Stephen Kerubo</p>
          <p>Stephen Kerubo</p>
         </div>
         </div>
     </div>
    
    </div>
</section>
    </>
  )
}

export default Testimonials