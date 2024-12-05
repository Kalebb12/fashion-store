import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const IconWrapper = ({ children }) => {
  return (
    <button className="min-w-[50px] shadow-md active:scale-95 min-h-[50px] px-3 py-2 flex items-center justify-center bg-black text-white rounded-full">
      {children}
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <div className="flex gap-5">
        <a href="#">Home</a>
        <a href="#">Collection</a>
        <a href="#">New</a>
      </div>
      <img src="/logo.png" alt="Fasion store logo" />
      <div className="flex items-center gap-5">
        <IconWrapper>
          <CiHeart />
        </IconWrapper>

        <IconWrapper>Cart (x)</IconWrapper>

        <IconWrapper>
          <FiUser />
        </IconWrapper>
      </div>
    </div>
  );
};

export default Navbar;
