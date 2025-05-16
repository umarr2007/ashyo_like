import { useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface LikeProps {
  productId: number;
  initialLiked?: boolean;
  onLikeChange?: (productId: number, isLiked: boolean) => void;
  productData?: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}

const Like: React.FC<LikeProps> = ({
  productId,
  initialLiked = false,
  onLikeChange,
  productData,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(!!initialLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (isLoading) return;

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Iltimos, avval tizimga kiring");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.patch(
        `https://api.ashyo.fullstackdev.uz/products/${productId}/toggle-like`,
        { userId: Number(userId) }
      );

      if (response.status === 200) {
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);

        if (onLikeChange) {
          onLikeChange(productId, newLikedState);
        }

        if (newLikedState && productData) {
          const event = new CustomEvent("productLiked", {
            detail: productData,
          });
          window.dispatchEvent(event);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IconButton onClick={handleLike} disabled={isLoading}>
      {isLiked ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "#6B7280" }} />
      )}
    </IconButton>
  );
};

export default Like;
