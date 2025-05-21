import React from 'react';
import { Link } from "react-router-dom";

const HeaderTop: React.FC = () => {
  return (
    <header>
      <div className="">
        <div className="wrapper bg-[#ebeff3]  h-[40px]  ">
          <div className="box container flex items-center justify-between">
            <div className="right">
              <ul className="flex items-center gap-8 ">
                <li >
                  <Link className="font-normal text-[14px] leading-[1.3] text-[#545d6a]" to="/">
                    Tashkent
                  </Link>
                </li>
                <li>
                  <Link className="font-normal text-[14px] leading-[1.3] text-[#545d6a]" to="/">About Us</Link>
                </li>
                <li>
                  <Link className="font-normal text-[14px] leading-[1.3] text-[#545d6a]" to="/products">Products</Link>
                </li>
                <li>
                  <Link className="font-normal text-[14px] leading-[1.3] text-[#545d6a]" to="/">Contacts</Link>
                </li>
              </ul>
            </div>

            <div className="left">
              <ul className="flex gap-6 ">
                <li>
                  <Link className="font-normal text-[14px] leading-[1.3] text-[#545d6a]" to="/">+998 (71) 123-45-67</Link>
                </li>
                <select className="font-normal text-[14px] leading-[1.3] text-[#545d6a]"  name="" id="">
                  <option value="">UZ</option>
                  <option value="">RU</option>
                  <option value="">EN</option>
                </select>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;