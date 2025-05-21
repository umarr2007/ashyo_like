import axios from "axios";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import HeaderLike from "./HeaderLike";
import ForgotPassword from "./ForgotPassword";
import Verify from "./Verify";


interface Category {
  name: string;
}

const HeaderBottom = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  const handleClick = async () => {
    const { data } = await axios.get(
      "https://api.ashyo.fullstackdev.uz/categories/all?limit=20"
    );
    setCategories(data);
    setShowCategories(!showCategories);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowForgot(false);
    setShowVerify(false);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div>
      <header>
        <div className="container max-w-[1440px] mx-auto">
          <div className="wrapper flex justify-between items-center">
            <div className="logo">
              <div className="flex">
                <img src="/logo.svg" alt="" />
                <h1 className="font-black text-[36px] text-[#134e9b]">Ashyo</h1>
              </div>
            </div>

            <div className="menu relative">
              <button
                onClick={handleClick}
                className="rounded-[6px] px-[20px] py-[10px] w-[160px] h-[48px] bg-[#134e9b] font-medium text-[16px] text-[#fff]"
              >
                Kategorya
              </button>

              {showCategories && (
                <div className="absolute top-[55px] left-0 z-10 bg-white border border-[#e1e8f0] rounded-md shadow-lg p-4 w-[200px] max-h-[300px] overflow-y-auto">
                  {categories.map((category) => (
                    <p key={category.name} className="text-[14px] text-[#545d6a] font-medium py-2 px-4 hover:bg-[#f0f4f8] cursor-pointer rounded-md transition-all duration-200">
                      {category.name}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="inputs flex p-5">
              <input
                className="rounded-[6px] border-none w-[518px] h-[48px] bg-[#ebeff3] font-normal text-[13px] text-[rgba(0,_0,_0,_0.2)]"
                placeholder="What are you looking for?"
                type="text"
              />
              <button className="rounded-[6px] w-[60px] h-[48px] bg-[#134e9b] flex items-center justify-center">
                <img src="/search.svg" alt="" />
              </button>
            </div>

            <div className="buttons flex gap-4">
              <button className="rounded-[6px] px-[13px] py-[12px] w-[50px] h-[48px] bg-[#ebeff3] flex items-center justify-center">
                <img src="/picture.svg" alt="" />
              </button>
              <HeaderLike />
              <button className="rounded-[6px] px-[13px] py-[12px] w-[50px] h-[48px] bg-[#ebeff3] flex items-center justify-center">
                <img src="/picture1.svg" alt="" />
              </button>
              <button 
                onClick={() => setShowLogin(true)}
                className="rounded-[6px] px-[13px] py-[12px] w-[50px] h-[48px] bg-[#ebeff3] flex items-center justify-center"
              >
                <img src="/user.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {showLogin && (
        <Login
          onClose={handleClose}
          onSwitchToRegister={handleSwitchToRegister}
          onSwitchToForgot={() => {
            setShowLogin(false);
            setShowForgot(true);
          }}
        />
      )}
      {showRegister && (
        <Register 
          onClose={handleClose}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
      {showForgot && (
        <ForgotPassword
          onClose={handleClose}
          onSwitchToLogin={() => {
            setShowForgot(false);
            setShowLogin(true);
          }}
          onSwitchToVerify={() => {
            setShowForgot(false);
            setShowVerify(true);
          }}
        />
      )}
      {showVerify && (
        <Verify
          onClose={handleClose}
          onSwitchToLogin={() => {
            setShowVerify(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
};

export default HeaderBottom;
