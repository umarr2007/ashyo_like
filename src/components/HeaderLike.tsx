import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface LikedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

const HeaderLike = () => {
  const [likedProducts, setLikedProducts] = useState<LikedProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addLikedProduct = (product: LikedProduct) => {
    setLikedProducts(prev => [...prev, product]);
  };

  const removeLikedProduct = (productId: number) => {
    setLikedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const fetchLikedProducts = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      const response = await axios.get(
        `https://api.ashyo.fullstackdev.uz/like/user/${userId}`
      );
      
      if (response.data && Array.isArray(response.data)) {
        setLikedProducts(response.data);
      }
    } catch (error) {
      console.error("Liked products fetch error:", error);
    }
  };

  useEffect(() => {
    fetchLikedProducts();

    const handleProductLiked = (event: CustomEvent<LikedProduct>) => {
      addLikedProduct(event.detail);
    };

    window.addEventListener('productLiked', handleProductLiked as EventListener);

    return () => {
      window.removeEventListener('productLiked', handleProductLiked as EventListener);
    };
  }, []);

  const handleToggleLike = async (productId: number) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Iltimos, avval tizimga kiring");
        return;
      }

      const response = await axios.patch(
        `https://api.ashyo.fullstackdev.uz/products/${productId}/toggle-like`,
        { userId: Number(userId) }
      );

      if (response.status === 200) {
        removeLikedProduct(productId);
      }
    } catch (error) {
      console.error("Toggle like error:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          const userId = localStorage.getItem("userId");
          if (!userId) {
            alert("Iltimos, avval tizimga kiring");
            return;
          }
          setIsOpen(true);
        }}
        className="rounded-[6px] px-[13px] py-[12px] w-[50px] h-[48px] bg-[#ebeff3] flex items-center justify-center relative hover:bg-[#e1e8f0] transition-colors duration-200"
      >
        <img src="/like.svg" alt="Liked products" className="w-6 h-6" />
        {likedProducts.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
            {likedProducts.length}
          </span>
        )}
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          className: "rounded-lg",
        }}
      >
        <DialogTitle className="flex justify-between items-center border-b pb-4">
          <span className="text-lg font-semibold">Sevimli mahsulotlar</span>
          <IconButton 
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-100"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="pt-4">
          {likedProducts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Sevimli mahsulotlar yo'q
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {likedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow duration-200"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover mb-2 rounded-lg"
                  />
                  <h3 className="font-medium text-center mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 font-medium">
                    {product.price.toLocaleString()} so'm
                  </p>
                  <button
                    onClick={() => handleToggleLike(product.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <FavoriteIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderLike; 