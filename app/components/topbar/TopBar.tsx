import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
  <div className='hidden sm:block'>  
   <div className=" flex justify-between text-white bg-topBarColor  py-2 px-4 ">
      <div className="flex items-center">
        <div className="mr-2 ">
          <div className="flex items-center justify-center text-topBarColor h-6 w-6 rounded-full bg-gray-200">
            <HiOutlineMail size={20}/>
          </div>

        </div>
        <span className="text-lg mr-4 ">palmier.ge@gmail.com</span>
        <div>
          <div className="flex items-center justify-center text-topBarColor h-6 w-6 rounded-full bg-gray-200 mr-1">
          <HiOutlinePhone size={20}/>
          </div>
        </div>
        <span className="text-lg">+417621489473</span>
      </div>

      <div className="flex items-center ml-30">
        <a href="https://www.youtube.com/embed/MRzudQl4exY?playlist=MRzudQl4exY&autoplay=0&mute=1&loop=1&controls=1&rel=0" >
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default TopBar;
