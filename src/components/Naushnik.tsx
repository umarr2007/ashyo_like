const Naushnik = () => {
  return (
    <div className="container max-w-[1440px] mx-auto py-8">
      <div className="rounded-2xl bg-[#232323] flex items-center justify-between overflow-hidden" style={{ minHeight: 300 }}>
        <div className="flex-1 flex items-center justify-center min-w-[300px]">
          <img
            src="/naushnik.png"
            alt="Naushnik"
            className="w-[518px] h-[493px] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <div className="text-white text-2xl font-bold mb-6 text-center leading-snug">
            Musiqa zavqini his qilish<br />
            uchun ko'p mablag' sarflash<br />
            shart emas!
          </div>
          <button className=" btn rounded-[6px] px-[16px] py-[18px] w-[161px] h-[54px] bg-[#fff] pt-[20px] font-normal text-[16px] leading-[1.2] text-center text-[#111]">
            Batafsil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Naushnik; 