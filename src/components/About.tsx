import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from "./ui/button";

function AboutUs() {
  return (
    <>
      <section
        className="
    w-full 
    py-[48px] xsm:py-[112px] 
    text-center
    bg-headerColor
    "
      >
        <h1 className="my_h1 mb-[24px] ">Our team</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        {/* Cards div*/}
        <div
          className="
       w-full
       xsm:h-auto
       grid
       grid-cols-1 xsm:grid-cols-3 
       xsm:grid-rows-2 
        gap-x-[48px] 
        gap-y-[48px] xsm:gap-y-[64px] 
        mt-[48px] xsm:mt-[80px] 
        "
        >
          <div className=" flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team1.png"
                alt="team1"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              james Nduku
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">
              Marketing Coordinator
            </p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team2.png"
                alt="team2"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              Joseph Munyambu
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">
              Nursing Assistant
            </p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>
          <div className=" flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team3.png"
                alt="team3"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              Joseph Ngumbau
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">
              Medical Assistant
            </p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>
          <div className=" flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team4.png"
                alt="team4"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              Erick Kipkemboi
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">Web Designer</p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team5.png"
                alt="team5"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              Stephen Kerubo
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">
              President of Sales
            </p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>

          <div className=" flex flex-col justify-center">
            <div className="inline-block m-auto mb-[24px]">
              <Image
                src="/team6.png"
                alt="team6"
                width={80}
                height={80}
              ></Image>
            </div>

            <h1 className="text-[20px] leading-[150%] font-semibold">
              John Leboo
            </h1>

            <p className="text-[18px] leading-[150%] mb-[24px]">Dog Trainer</p>

            <div className="flex gap-[14px] justify-center m-auto">
              <FaLinkedin size={24} />
              <FaTwitter size={24} />
              <CiGlobe size={24} />
            </div>
          </div>
        </div>
        <Button
          variant="transparentBtn"
          className="
      mt-[48px]
      xsm:hidden
      "
        >
          View All
        </Button>
      </section>
    </>
  );
}

export default AboutUs;
