import { HiPencilSquare, HiOutlinePhone, HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

const TopBar = () => {
  return (
    <div className="bg-topBarColor text-[#EDEDCB] py-2 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <div className="flex items-center justify-center text-topBarColor h-7 w-7 rounded-full bg-gray-200 mr-1">
            <HiPencilSquare size={20} />
          </div>
          <span className="text-base mr-4">Designed by IBOS Consulting</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
          <div className="flex items-center justify-center text-topBarColor h-7 w-7 rounded-full bg-gray-200 mr-1">
            <HiOutlinePhone size={20} />
          </div>
          <span className="text-base mr-3">+41786492314</span>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
          <div className="flex items-center justify-center text-topBarColor h-7 w-7 rounded-full bg-gray-200 mr-1 ml-1">
            <HiOutlineGlobeEuropeAfrica size={30} />
          </div>
          <span className="text-base">Switzerland</span>
        </div>
      </div>
      <div className="ml-4 mt-4 md:mt-8">
        <span className="text-base mr-4">Umoja Corp.</span>
      </div>
    </div>
  );
};

export default TopBar;
