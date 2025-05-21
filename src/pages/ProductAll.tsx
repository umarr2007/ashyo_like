import { useEffect, useState } from "react";
import axios from "axios";

interface Brand {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  nasiya: string;
  brand_id: string;
}

const ProductAll = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/brands/all")
      .then((res) => setBrands(res.data));
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => setProducts(res.data.items));
  }, []);

  const filteredProducts = activeBrand
    ? products.filter((p) => p.brand_id === String(activeBrand))
    : products;

  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="max-w-[1300px] mx-auto px-4 py-10 flex gap-8">
        <div className="rounded-[8px] w-[280px] h-[430px]">
          <h2 className="font-bold text-xl mb-4">Brandlar</h2>
          <div className="grid grid-cols-3 gap-2 mt-[30px] ">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(brand.id)}
                className="rounded-[30px] px-[18px]  border-2 border-[#3c4a5f] py-[7px] w-[60px] h-[30px] bg-white text-[#0a1729] text-[12px] font-normal leading-[1.33333]"
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 flex-1">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-5 w-[260px] h-[422px] flex flex-col"
            >
              <div className="bg-[#f3f6fa] rounded-xl h-[180px] flex items-center justify-center mb-4">
                <img
                  src={`https://api.ashyo.fullstackdev.uz${product.image}`}
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
              <div className="flex items-center justify-between mt-3">
                <div>
                  <div className="text-[20px] font-bold text-[#222] mb-1">
                    {product.price} uzs
                  </div>
                  <div className="text-[13px] bg-pink-100 text-pink-600 rounded px-2 py-1 inline-block">
                    {product.nasiya}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl border border-[#e1e8f0] flex items-center justify-center">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M10 18s-6-4.35-6-8.5A3.5 3.5 0 0110 6a3.5 3.5 0 016 3.5C16 13.65 10 18 10 18z"
                        stroke="#545d6a"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-xl  flex items-center justify-center">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
