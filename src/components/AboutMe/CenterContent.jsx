function CenterContent() {
  return (
    <>
      <div className="flex flex-row  my-[156px] justify-start items-center gap-[17px]">
        <p className="text-[#2e2e2e] font-jersey25">T</p>
        <div className="w-[314px] h-[5px] bg-[#2e2e2e]"></div>
        <p className="text-[#2e2e2e] font-jersey25">R</p>
        <div className="w-[355px] h-[5px] bg-[#2e2e2e]"></div>
        <p className="text-[#2e2e2e] font-jersey25">I</p>
        <div className="w-[220px] h-[5px] bg-[#2e2e2e]"></div>
        <p className="text-[#2e2e2e] font-jersey25">S</p>
        <div className="w-[331px] h-[5px] bg-[#2e2e2e]"></div>
        <p className="text-[#2e2e2e] font-jersey25">T</p>
      </div>
      <div className="w-fit absolute top-1/2 -translate-y-1/2 z-10">
        <div className="translate-x-[51.5%] flex flex-col items-center">
          <h1 className="font-librebarcode text-[118px] text-[#2e2e2e]">
            TRISTAN A.H. BASORI
          </h1>
          <div className="flex flex-row items-center gap-4">
            <p className="text-[#2e2e2e]">── .✦</p>
            <p className="text-[#2e2e2e]">✦</p>
            <p className="text-[#2e2e2e] rotate-y-180">── .✦</p>
          </div>
        </div>
        <div className="w-[5px] bg-[#2e2e2e] h-[456px] translate-x-[86.55em] -top-[62px] absolute"></div>
      </div>
    </>
  );
}

export default CenterContent;
