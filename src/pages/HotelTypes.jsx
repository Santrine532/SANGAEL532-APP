import React, { memo } from 'react'
import Footer from '../components/Footer';
import { hotelPhotos } from '../index';

function Hoteltypes() {
  return (
    <div className="flex flex-wrap    mb-6">
      <div className="w-full  p-6 m-auto   shadow-rose-600/40   ">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/744/744502.png" alt="logo" />
          <div>
            <h3 className="text-3xl font-semibold text-center text-black-700 justify-center  uppercase  ">
              AROND THIS OUR WONNDERFUL WORLD WE HAVE COME THROW MOST HOTELS THAT ARE ACCESSIBLE THROW OUR WEBSITE.
            </h3>
            <h4 className='font-semibold text-center text-3xl'>HOTEL TYPES</h4>
          </div>
          <div className='flex  mb-6 my-6 p-2   '>
            <div className='p-2 grid  gap-4 grid-cols-3  ' >
              {hotelPhotos.map((item, index) =>
                <img
                  key={item.id}
                  src={item.img}
                  alt="hotel" className='w-full h-96 object-cover' />
                  
              )}


            </div>
            
          </div>
          
        </div>
        <Footer />
        <hotelPhotos />

      </div>

    </div>
  )
}
export default Hoteltypes;