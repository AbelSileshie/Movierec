import React from 'react';
import Banner from '../assets/Banner.png'
const Hero = () => {
  return (
    <div className=''>
      <div className=''>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center'>
          <h1 className='absolute bottom-3.5 left-0 p-2  opacity-75 px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
        </div>
        <img
          className='w-full flex object-cover'
        src={Banner}
          alt='/'
        />
      </div>
    </div>
  );
};
export default Hero;