import { useState } from 'react';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SiBentobox } from "react-icons/si";
function Tabs() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <p>Hi, I’m Sandeep Kaur, a passionate Front-End Developer with a Bachelor’s degree in Computer Science Engineering. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in crafting responsive and user-friendly web applications.</p>;
      case 'experiences':
        return <p>Developed a full-featured bookstore application with user authentication and a clean, user-friendly interface. Integrated local storage to manage user data and implemented a responsive design for mobile and desktop views and many other projects...</p>;
      case 'recommended':
        return <p>Heyyy!!! You are in recommended tab. "The only limit to our realization of tomorrow is our doubts of today. "" – Franklin D. Roosevelt: Doubts can restrict our potential more than any external barriers.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 w-full lg:w-1/2">
        <div className='flex space-x-4'>
        <div>
            <IoMdHelpCircleOutline className='text-xl'/>
        </div>
        <div className='w-full '>
      <div className="flex border-3  bg-gray-800 shadow-lg w-[450px]  rounded-xl mb-4 overflow-x-auto ">
        <button 
          onClick={() => setActiveTab('about')}
          className={`px-4 py-2 w-1/3 rounded-xl  ${activeTab === 'about' ? 'bg-gray-900' : 'bg-gray-800'}`}>
        About
        </button>
        <button 
          onClick={() => setActiveTab('experiences')}
          className={`px-4 py-2 w-1/3 rounded-xl ${activeTab === 'experiences' ? 'bg-gray-900' : 'bg-gray-800'}`}>
          Experiences
        </button>
        <button 
          onClick={() => setActiveTab('recommended')}
          className={`px-4 py-2  w-1/3 rounded-xl ${activeTab === 'recommended' ? 'bg-gray-900' : 'bg-gray-800'}`}>
          Recommended
        </button>
      </div>
      </div>
      </div>
      <div className='flex space-x-3'>
        <div  className='flex justify-center items-center'>
        <SiBentobox />
        </div>
        <div className='w-full'>
      <div className='w-[450px] '>
        {renderContent()}
      </div>
      </div>
      </div>
    </div>
  );
}
export default Tabs