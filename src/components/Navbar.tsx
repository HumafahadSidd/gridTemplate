import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <div>
      <div className="w-full md:h-[92px] h-[62px] flex justify-between items-center bg-[#043873]">
        <div className="ml-5 mt-3 mb-2">
          <Image alt={"logo"} src={"/Logo.png"} width={144} height={34} className="md:w-[191px] md:h-[34px]" />
        </div>
          <div className="flex gap-8 items-center mr-3">
            <ul className="flex gap-5 text-white font-semibold"> 
                <li>Products v</li>
                <li>Solution v</li>
                <li>Resources v</li>
                <li>Pricing v</li>
            </ul>
            <button className="md:px-7 hidden md:flex md:py-3 bg-[#FFE492] md:rounded-[8px] text-black">
              Login
            </button>
            <button className="px-7 hidden py-3 bg-[#4F9CF9] rounded-[8px] text-white md:flex items-center gap-2">
              Try whitepace free 
              <Image
              src='/VectorR.svg'
              alt="vectorR"
              width={7}
              height={7}
              />
            </button>
            <Image
            src='/Hum-menu.png'
            alt="error"
            width={42}
            height={45}
            className="w-[42px] h-[24px]"
            />
          </div>
      </div>
    </div>
  );
};

export default NavBar;