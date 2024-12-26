import React from "react";
import Image from "next/image";
const Sec3 = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen bg-[#043873] ">
        <div className="relative flex flex-col md:flex-row justify-evenly items-center w-[95%] ">
          <div className="relative flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="relative font-bold md:text-[64px] text-[36px] z-20 ">
              Use as {""} 
              <span className=" relative z-30 text-wrap">
                Extension 
                </span>
              <Image
              src='/Dash.png'
              alt="dash"
              width={300}
              height={300}
               className="absolute bottom-[-11px] left-[25%] w-[250px] md:w-[400px] z-10"
              />
            </h1>
            <p className="text-[18px] font-normal md:w-[600px] mt-3">
              Use the web clipper extension, available on Chrome and Firefox,  to
              save web pages or take screenshots as notes.
            </p>
            <button className="flex gap-2 items-center font-medium px-[40px] py-[20px]  rounded-lg bg-[#4F9CF9] text-white mt-12 md:mt-10">
              Lets Go 
              <Image
              alt="vector"
              src='/VectorR.svg'
              width={7}
              height={7}
              />
            </button>
            </div>
            <div className="bg-[#C4DEFD] md:w-[520px] md:h-[350px] w-[350px] h-[200px] mt-20 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
