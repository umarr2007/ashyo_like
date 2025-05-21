import Artel from "../assets/artel.png";
import Samsung from "../assets/samsung.png";
import Nokia from "../assets/nokia.png";
import Mi from "../assets/mi.png";
import Apple from "../assets/apple.png";
import Vivo from "../assets/vivo.png";
import Huawei from "../assets/huawei.png";

const Brend = () => {
  return (
    <div className="container max-w-[1440px] mx-auto ">
      <div className="brend">
        <div className="max-w-[1200px]  my-20 mx-auto grid  grid-row-42 grid-cols-2 md:grid-cols-11 gap-[10px]">
          <div className="col-span-1 md:col-span-3 md:row-span-14 row-span-10 rounded-[6px] bg-[#67B43733] flex items-center justify-center">
            <img className="w-full h-full" src={Artel} alt="image" />
          </div>
          <div className="col-span-1 md:col-span-3 row-span-17 md:row-span-24 rounded-[6px] bg-[#034EA21A] flex items-center justify-center">
            <img className="w-full h-full" src={Samsung} alt="image" />
          </div>
          <div className="md:col-span-3 row-span-14 rounded-[6px] bg-[#034EA21A] flex items-center justify-center">
            <img className="w-full h-full" src={Nokia} alt="image" />
          </div>
          <div className="md:col-span-2 row-span-20 md:row-span-27 rounded-[6px] bg-[#FF670033] flex items-center justify-center">
            <img className="w-full h-full" src={Mi} alt="image" />
          </div>
          <div className="md:col-span-3 row-span-18 md:row-span-24 rounded-[6px] bg-[#0000001A] flex items-center justify-center">
            <img className="w-full h-full" src={Apple} alt="image" />
          </div>
          <div className="md:col-span-3 row-span-14 grid-cols-2 md:col-start-4 md:row-start-25  rounded-[6px] bg-[#006DB833] flex items-center justify-center">
            <img className="w-full h-full" src={Vivo} alt="aimage " />
          </div>
          <div className="md:col-span-3 row-span-14 rounded-[6px] bg-[#FF000033] flex items-center justify-center">
            <img className="w-full h-full" src={Huawei} alt="image" />
          </div>
          <div className="md:col-span-2 row-span-11 rounded-[6px] bg-[#EBEFF3] flex items-center justify-center">
            <h2 className="text-[20px] font-[700]">Ko'proq</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
