const Hero = () => {
  return (
    <div className=" wrapper_hero bg-[#f7f6f6]  py-10 ">
      <div className="container max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="font-black text-[44px] leading-[1.2] text-[#0a1729]">
              Siz kutgan Xiaomi 12 Mi Laite
            </h1>
            <p className=" hero_p font-normal text-[16px] text-[#545d6a]">
              Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
              uchun eng yaxshi arziydigan takliflarimizdan biridir!
            </p>
            <button className=" hero_button rounded-[6px] px-[20px] py-[10px] ] w-[160px] h-[48px] bg-[#134e9b] font-medium text-[16px] text-[#fff]">
              Batafsil
            </button>


            {/* <div className="flex justify-center mt-8 gap-3">
          <span className="w-3 h-3 rounded-full bg-[#e0e0e0] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#134e9b] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#e0e0e0] inline-block"></span>
        </div> */}
          </div>
          <div className="flex-1 flex justify-end">
            <img 
              src="/rasm.svg"
              alt="Xiaomi 12 Mi Laite"
              className="max-h-[850px] object-contain"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
