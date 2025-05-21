import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Like from "./Like";
import Airpods from "../../public/airpods.png";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  nasiya: string;
  isLiked?: boolean;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => setProducts(res.data.items));
  }, []);

  const handleLikeChange = (productId: number, isLiked: boolean) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, isLiked } : product
      )
    );
  };

  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="product">
        <h2 className="font-bold text-xl mt-[10px]">Most popular product</h2>
        <Swiper
        loop={true}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={5}
          className="!pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-2xl shadow p-5 w-[260px] flex flex-col">
                <div className="bg-[#f3f6fa] rounded-xl h-[180px] flex items-center justify-center mb-4">
                  <img
                    src={Airpods}
                    alt={product.name}
                    className="max-h-[140px] object-contain"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-medium mb-2">
                    {product.name}
                  </div>
                  <div className="text-[#545d6a] text-[14px] mb-2">
                    {product.description}
                  </div>
                </div>
                  <div>
                    <div className="text-[20px] font-bold text-[#222] mb-1">
                      {product.price} uzs
                    </div>
                    <div className="text-[13px] bg-pink-100 text-pink-600 rounded px-2 py-1 inline-block">
                      {product.nasiya}
                    </div>
                  </div>
                <div className="flex gap-2 mt-4">
                  <Like
                    productId={product.id}
                    initialLiked={product.isLiked}
                    onLikeChange={handleLikeChange}
                    productData={{
                      id: product.id,
                      name: product.name,
                      image: `https://api.ashyo.fullstackdev.uz${product.image}`,
                      price: product.price,
                    }}
                  />
                    <button className="w-10 h-10 rounded-xl bg-[#1756b0] flex items-center justify-center">
                      <svg width="20" height="20" fill="none">
                        <path
                          d="M6 6h12l-1.5 9h-9L6 6zm0 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
