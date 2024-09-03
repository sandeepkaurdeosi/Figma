import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { SiBentobox } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Gallery() {
  const [images, setImages] = useState([
    'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-cute-cuteness-wallpaper-image_2935345.jpg',
    'https://images6.alphacoders.com/133/1338174.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPw8MtewOiG77kKPQF4E2AT-exfQT81kImmk5gCBYUmomVFKlK5iDysOwr23a6sutk0CtPv3y_ZwBZtj4_nv6a0iaqv4JYKxGpgt2mKGXdSsd1MpeMoJm0vCef3CkQS9cNUUk0ecig3wA/s1600/CUTE-WALLPAPER-LAPTOP-HD.png'
  ]);
  const sliderRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result;
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    document.getElementById('fileInput').click(); 
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full p-4'>
        <div className='flex space-x-4 '>
        <div>
            <IoMdHelpCircleOutline className='text-xl'/>
        </div>
        <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">Gallery</h2>
        <div className="flex space-x-4 items-center">
          <button 
            onClick={handleAddImage}
            className="bg-gray-900 text-white ml-32 mr-4 px-5 py-3 rounded-2xl">
            + Add Image
          </button>
            <>
              <button
                onClick={handlePrevClick}
                className="bg-gray-700 text-white p-4 rounded-full">
                <FaArrowCircleLeft />
              </button>
              <button
                onClick={handleNextClick}
                className="bg-gray-700 text-white p-4 rounded-full">
                <FaArrowCircleRight />
              </button>
            </>
      
        </div>
        <input 
          type="file" 
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden" 
        />
      </div>
      </div>
      </div>
      <div>
      {images.length > 3 ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="px-2"> 
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded w-full"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded"
            />
          ))}
        </div>
      )}
      
      </div>
    </div>
  );
}

export default Gallery;

