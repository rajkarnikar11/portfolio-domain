import React from "react";

const page = () => {
  return (
    <div className="h-screen  flex items-center flex-col justify-center  text-center w-screen uppercase ">
      <div className="relative shadow-xl p-[1.5rem] ">
        <div className="absolute h-[2%] top-0 left-0 w-[100%] bg-gradient-to-r from-[#343231ff] to-[#34323100]"></div>
        <div className="opacity-60 absolute bg-gradient-to-b from-[#343231ff] to-[#34323100] h-[100%] top-0 left-0 w-[0.5%]"></div>
        <div className="opacity-60 absolute bg-gradient-to-t from-[#343231ff] to-[#34323100] h-[100%] bottom-0 right-0 w-[0.5%]"></div>
        <div className=" absolute opacity-60 bg-gradient-to-l from-[#343231ff] to-[#34323100] h-[2%] top-full right-0 w-[100%]"></div>
        <h6 className="font-bold text-shadow-[#C0C0C0] text-shadow-sm  [font-size:clamp(1.5rem,4.5vw,8rem)] ">
          salil rajkarnikar
        </h6>
        <p className=" tracking-[2.2vw] text-shadow-[#C0C0C0] text-shadow-sm  [font-size:clamp(1.1rem,2.5vw,4rem)]">
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default page;
