const categories = [
  {
    name: "Noutbuklar",
    image: "/noutbuk.png",
    bg: "bg-[#7c6cb2]",
    labelBg: "bg-[#7c6cb2]",
    text: "text-white",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    name: "Kondetsioner",
    image: "/konditsioner.png",
    bg: "bg-[#e3e3e3]",
    labelBg: "bg-[#e3e3e3]",
    text: "text-[#222]",
    colSpan: "",
    rowSpan: "",
  },

  {
    name: "Ko'proq",
    image: "",
    bg: "bg-[#1756b0]",
    labelBg: "",
    text: "text-white",
    colSpan: "",
    rowSpan: "",
    isButton: true,
  },
  {
    name: "Smartfonlar",
    image: "/smartfon.png",
    bg: "bg-[#7c6cb2]",
    labelBg: "bg-[#7c6cb2]",
    text: "text-white",
    colSpan: "",
    rowSpan: "",
  },
  
  {
    name: "Kir yuvish mashinasi",
    image: "/kiryuvish.png",
    bg: "bg-[#b7ada7]",
    labelBg: "bg-[#b7ada7]",
    text: "text-white",
    colSpan: "",
    rowSpan: "",
  },



  {
    name: "Televizorlar",
    image: "/televizor.png",
    bg: "bg-[#d2bb8b]",
    labelBg: "bg-[#d2bb8b]",
    text: "text-white",
    colSpan: "col-span-2",
    rowSpan: "",
  },
  // {
  //   name: "Muzlatgichlar",
  //   image: "/muzlatgich.png",
  //   bg: "bg-[#a7a7a7]",
  //   labelBg: "bg-[#a7a7a7]",
  //   text: "text-white",
  //   colSpan: "",
  //   rowSpan: "",
  // },


 
];

const Tovar = () => {
  return (
    <div className="container max-w-[1440px] mx-auto py-10">
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {categories.map((tovar, idx) =>
          tovar.isButton ? (
            <div
              key={idx}
              className={`rounded-xl flex items-center justify-center h-[120px] ${tovar.bg} ${tovar.colSpan} ${tovar.rowSpan} cursor-pointer`}
            >
              <button className="w-full h-full flex items-center justify-center font-medium text-[18px] text-white">
                {tovar.name}
              </button>
            </div>
          ) : (
            <div
              key={idx}
              className={`rounded-xl relative overflow-hidden flex items-end ${tovar.bg} ${tovar.colSpan} ${tovar.rowSpan} h-[220px]`}
            >
              <img
                src={tovar.image}
                alt={tovar.name}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <span
                className={`absolute top-3 left-3 px-4 py-1 rounded-full bg-white/80 text-[#222] font-medium text-[15px]`}
                style={{ background: tovar.labelBg, color: tovar.text.replace("text-", "") }}
              >
                {tovar.name}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Tovar; 