import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function BottomDesc() {
  return (
    <div className=" bottom-[24px] left-[24px] right-[24px] absolute">
      <div className="w-[300px] h-auto translate-x-[65em] translate-y-[12.4em]">
        <DotLottieReact
          src="https://lottie.host/e663eba5-7594-440a-8e00-669cb5017308/JOC623GVoa.lottie"
          loop
          autoplay
        />
      </div>
      <div className="w-[300px] h-auto -translate-x-[5em]">
        <DotLottieReact
          src="https://lottie.host/4a6e7db8-99a5-43ad-8846-5d7b6cbb056d/6iKlegmqHy.lottie"
          loop
          autoplay
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="mb-2 text-[#f8f8f8] py-[10px] px-[19px] text-[14px] bg-[#2e2e2e] w-fit rounded-[4px] font-jetbrainmono">
          IT Programmer
        </h1>
        <div className="flex flex-row items-center justify-center -translate-y-1 -translate-x-[4.55em] gap-[17px]">
          <p className="text-[#2e2e2e] font-jersey25">N</p>
          <div className="w-[590px] h-[5px] bg-[#2e2e2e]"></div>
          <p className="text-[#2e2e2e] font-jersey25">A</p>
        </div>
      </div>
      <p className="text-[#2e2e2e] text-[14px] font-jetbrainmono">
        Focused on mobile and web development.
      </p>
      <p className="text-[#2e2e2e] text-[14px] font-jetbrainmono">
        Passionate about clean UI and smooth UX.
      </p>
      <p className="text-[#2e2e2e] text-[14px] font-jetbrainmono">
        Curious, adaptive, and always learning.
      </p>
    </div>
  );
}

export default BottomDesc;
